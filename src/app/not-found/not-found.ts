import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container">
      <p class="code mono" aria-hidden="true">404</p>
      <h1>There’s no page here</h1>
      <p>
        The link may be mistyped. Try our
        <a routerLink="/itineraries/hong-kong-in-four-days">Hong Kong in four days</a> plan instead.
      </p>
    </section>
  `,
  styles: `
    section {
      padding-block: var(--space-4xl);
      max-width: 46rem;
    }

    .code {
      font-size: var(--text-3xl);
      font-weight: 600;
      color: var(--crimson);
    }

    h1 {
      margin-top: var(--space-sm);
      font-size: var(--text-2xl);
    }

    p {
      margin-top: var(--space-md);
      max-width: 55ch;
    }
  `,
})
export class NotFound {
  constructor() {
    inject(Title).setTitle('Page not found — Itineraries');
    inject(Meta).updateTag({ name: 'robots', content: 'noindex' });
  }
}
