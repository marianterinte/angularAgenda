import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactsHomeComponent } from '../contacts-home/contacts-home.component';
import { ContactslistComponent } from '../contactslist/contactslist.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { ContactDetailResolverService } from '../contact-detail/contact-detail-resolver.service';
import { CanDeactivateGuard } from 'src/app/can-deactivate.guard';
  // tslint:disable-next-line:import-spacing


const contactsRoutes: Routes = [
  {
    path: '',
    component: ContactsHomeComponent,
    children: [
      {
        path: '',
        component: ContactslistComponent,
        children: [
          {
            path: ':id',
            component: ContactDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              contact: ContactDetailResolverService
            }
          },
        ]
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contactsRoutes)
  ],
  declarations: []
})
export class ContactsRoutingModule {
  RouterModule;
 }
