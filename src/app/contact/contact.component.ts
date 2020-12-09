import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Contact } from '../model/contact';
import { ServiceContactService } from '../services/service-contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:Contact;
  contact1:Contact;
  listContact:Contact[];
  registerForm : FormGroup;

  constructor(private serviceHttp:ServiceContactService) { }

  ngOnInit(): void {

    this.serviceHttp.getContacts().subscribe((data: Contact[])=>{this.listContact =data});
  this.contact=new Contact();
  //this.contact.objet=this.registerForm.get('objectif');
    this.registerForm = new FormGroup({
      objectif: new FormControl('',[Validators.required ,Validators.minLength(10)]),
      information: new FormGroup({
        nom : new FormControl('',[Validators.required , Validators.minLength(2)]),
        prenom : new FormControl('',[Validators.required , Validators.minLength(2)]),
        cin : new FormControl('',[Validators.required , Validators.minLength(8) , Validators.maxLength(8)]),
        email : new FormControl('',[Validators.required , Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
      })
       });

  }
  onSubmit(){
    console.log(this.registerForm.value);
    alert('success\n\n' + JSON.stringify(this.registerForm.value,null,4));
  }
 reset(){
    this.registerForm.reset()
  }
  envoyer(){
   this.contact1=this.contact=<Contact> this.registerForm.value;
   this.serviceHttp.addContact(this.contact1).subscribe(()=>this.listContact =[this.contact1, ...this.listContact]);
   console.log("ayoub"+this.contact);
  console.log("ayoubsaddi"+this.listContact);
  }
}
