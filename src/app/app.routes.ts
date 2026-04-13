import { Routes } from '@angular/router';
import { FullScreenMapPage } from './pages/full-screen-map-page/full-screen-map-page';
import { HousesPage } from './pages/houses-page/houses-page';
import { MarkersPage } from './pages/markers-page/markers-page';

export const routes: Routes = [
  {
    path: 'fullscreen',
    component: FullScreenMapPage,
    title: 'Full Screen Map'
  },
  {
    path: 'houses',
    component: HousesPage,
    title: 'Houses'
  },
  {
    path: 'markers',
    component: MarkersPage,
    title: 'Markers'
  },
  {
    path: '**',
    redirectTo: 'fullscreen'
  }
];
