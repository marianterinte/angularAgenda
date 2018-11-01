import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';



const contactsMock: Contact[] = [
  { id: 1, name: 'Dragon Burning Cities' },
  { id: 2, name: 'Sky Rains Great White Sharks' },
  { id: 3, name: 'Giant Asteroid Heading For Earth' },
  { id: 4, name: 'Procrastinators Meeting Delayed Again' },
];

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private contactsList: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>(contactsMock);

  getContact(id: number | string): any {
    return this.getContacts().pipe(
      map(ctc => ctc.find(contact => contact.id === +id))
    );
  }

  getContacts() {
    return this.contactsList;
  }

}
