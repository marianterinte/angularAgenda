import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { DialogService }  from '../../dialog.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // public dialogService: DialogService
  ) {}


  ngOnInit() {
    this.route.data
      .subscribe((data: { contact: Contact }) => {
        this.editName = data.contact.name;
        this.contact = data.contact;
      });
  }

  cancel() {
    this.gotoContacts();
  }

  save() {
    this.contact.name = this.editName;
    this.gotoContacts();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no contact or the contact is unchanged
    if (!this.contact || this.contact.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    // return this.dialogService.confirm('Discard changes?');
  }

  gotoContacts() {
    const contactId = this.contact ? this.contact.id : null;
    // Pass along the contact id if available
    // so that the contactListComponent can select that contact.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: contactId, foo: 'foo' }], { relativeTo: this.route });
  }

}
