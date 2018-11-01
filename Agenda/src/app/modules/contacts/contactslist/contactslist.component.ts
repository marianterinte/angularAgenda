import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.scss']
})
export class ContactslistComponent implements OnInit {

  contacts$: Observable<Contact[]>;
  selectedId: number;

  constructor(
    private service: ContactService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.contacts$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getContacts();
      })
    );
  }

}
