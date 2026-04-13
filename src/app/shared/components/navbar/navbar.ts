import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { routes } from '../../../app.routes';
import { filter, map, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'navbar',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './navbar.html',
})
export class Navbar {

  router = inject(Router);

  routes = routes
    .map(r => ({
      path: r.path,
      title: `${r.title ?? 'Angular maps'}`
    }))
    .filter(r => r.path !== '**')

  pageTitle = this.router.events.pipe(
    filter(data => data instanceof NavigationEnd),
    // tap((data) => console.log(data)),
    map(data => data.url),
    map(data => {
      return this.routes.find(r => `/${r.path}` == data)!.title
    })
  )

}
