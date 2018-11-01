import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { ContactService } from '../contact.service';

@Injectable({
  providedIn: 'root',
})
export class ContactDetailResolverService implements Resolve<Contact> {
  constructor(private cs: ContactService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.cs.getContact(id).pipe(
      take(1),
      mergeMap(contact => {
        if (contact) {
          return of(contact);
        } else {
          // id not found
          this.router.navigate(['/contacts']);
          return EMPTY;
        }
      })
    );
  }
}
