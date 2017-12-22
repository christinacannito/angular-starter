import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { SummaryComponent } from './summary/summary.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'summary',  component: SummaryComponent },
  { path: 'details',  component: DetailComponent },
  { path: '**',    component: NoContentComponent },
];
