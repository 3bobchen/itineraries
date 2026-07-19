import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Itinerary } from '../itinerary.model';
import { ItineraryService } from '../itinerary.service';
import { DayNav } from '../day-nav/day-nav';
import { DaySection } from '../day-section/day-section';

@Component({
  selector: 'app-itinerary-page',
  imports: [NgOptimizedImage, RouterLink, DayNav, DaySection],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './itinerary-page.html',
  styleUrl: './itinerary-page.scss',
})
export class ItineraryPage {
  /** Route param, bound via withComponentInputBinding. */
  readonly slug = input.required<string>();

  private readonly service = inject(ItineraryService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly itinerary = computed(() => this.service.bySlug(this.slug()));
  protected readonly activeDay = signal<string | null>(null);

  constructor() {
    effect(() => {
      const itinerary = this.itinerary();
      if (itinerary) {
        this.title.setTitle(`${itinerary.title} — Bobbing around`);
        this.meta.updateTag({ name: 'description', content: itinerary.tagline });
        this.setJsonLd(itinerary);
      } else {
        this.title.setTitle('Itinerary not found — Bobbing around');
        this.meta.updateTag({ name: 'robots', content: 'noindex' });
      }
    });

    afterNextRender(() => this.observeDays());
  }

  /** Scroll-spy for the sticky day nav. Browser-only; SSR output ships no active state. */
  private observeDays(): void {
    const sections = this.host.nativeElement.querySelectorAll<HTMLElement>('section.day');
    if (sections.length === 0) return;
    this.activeDay.set(sections[0].id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.activeDay.set(entry.target.id);
        }
      },
      // Active band: just below the sticky nav to 45% down the viewport.
      { rootMargin: '-80px 0px -55% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private setJsonLd(itinerary: Itinerary): void {
    const id = 'itinerary-jsonld';
    this.document.getElementById(id)?.remove();
    const script = this.document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: itinerary.title,
      description: itinerary.tagline,
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: itinerary.days.length,
        itemListElement: itinerary.days.map((day) => ({
          '@type': 'ListItem',
          position: day.number,
          name: `Day ${day.number} — ${day.title}`,
        })),
      },
    });
    this.document.head.appendChild(script);
  }
}
