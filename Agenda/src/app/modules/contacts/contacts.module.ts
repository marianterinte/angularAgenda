import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactslistComponent } from './contactslist/contactslist.component';
import { ContactsRoutingModule } from './contacts-routing/contacts-routing.module';
import { ContactsHomeComponent } from './contacts-home/contacts-home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ContactsHomeComponent,
    ContactDetailComponent,
    ContactslistComponent]
})
export class ContactsModule {

}
