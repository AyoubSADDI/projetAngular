import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ServiceContactService {
  url='http://localhost:3000/contact/';
  constructor(private httpClient:HttpClient) { }
  getContacts(){
    return this.httpClient.get<Contact[]>(this.url);
  }
  addContact(c:Contact){
    console.log(c);
    return this.httpClient.post(this.url,c);
  }
}
