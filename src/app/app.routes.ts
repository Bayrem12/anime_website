import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from './shared/guards/auth.guard';
import HomeComponent from './home/home.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { AnimeDetailsComponent } from './home/anime-details/anime-details.component';
import { AnimeListComponent } from './home/anime-list/anime-list.component';
import { CharacterDetailsComponent } from './home/character-details/character-details.component';
import { CharacterListComponent } from './home/character-list/character-list.component';
import { ContactComponent } from './home/contact/contact.component';
import { AnimeNewsComponent } from './home/anime-news/anime-news.component';
import { NgModule } from '@angular/core';
import { WebSiteHomeComponent } from './home/web-site-home/web-site-home.component';
import { AnimequizComponent } from './home/animequiz/animequiz.component';
import { AnimeAddComponent } from './home/anime-add/anime-add.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'home',
    canActivate: [isAuthenticatedGuard()],
    component:HomeComponent,
    children:[
      {
        path: '',
        canActivate: [isAuthenticatedGuard()],
        component: WebSiteHomeComponent,
        
      },
      {
        path: 'aboutus',
        canActivate: [isAuthenticatedGuard()],
        component: AboutUsComponent,
        
      },
      {
        path: 'animedetails',
        canActivate: [isAuthenticatedGuard()],
        component: AnimeDetailsComponent,
        
      },
      {
        path: 'animelist',
        canActivate: [isAuthenticatedGuard()],
        component: AnimeListComponent,
        
      },
      {
        path: 'characterdetails',
        canActivate: [isAuthenticatedGuard()],
        component: CharacterDetailsComponent,
        
      },
      {
        path: 'charcterlist',
        canActivate: [isAuthenticatedGuard()],
        component: CharacterListComponent,
        
      },
      {
        path: 'contact',
        canActivate: [isAuthenticatedGuard()],
        component: ContactComponent,
       
      },
      {
        path: 'animenews',
        canActivate: [isAuthenticatedGuard()],
        component: AnimeNewsComponent,
        
      },
      {
        path: 'websitehome',
        canActivate: [isAuthenticatedGuard()],
        component: WebSiteHomeComponent,
        
      },
      { path: 'quiz',
        canActivate: [isAuthenticatedGuard()],
        component:AnimequizComponent },

    ]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];

