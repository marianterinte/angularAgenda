import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { HomeComponent } from './shared-components/home/home.component';
import { AboutComponent } from './shared-components/about/about.component';
import { PageNotFoundComponent } from './shared-components/page-not-found/page-not-found.component';

const appRoutes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacts',
    loadChildren: './modules/contacts/contacts.module#ContactsModule',
   // data: { preload: true }
  },


  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
