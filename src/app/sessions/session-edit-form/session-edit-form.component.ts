import { SessionhttpService } from './../../sessionhttp.service';
import { FakesessionsService } from './../fakesessions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {

  id;
  private sub: any;
  session : any;
  tracks= ['MEAN', 'Angular', 'NodeJs', 'Android','Swift','Xamarin'];
  //session = new session(1,'Web', this.tracks[0], new Date('2018-06-11'), 10, 'Lyon',0,false);
  constructor(private route:ActivatedRoute ,private sesssionItemService: FakesessionsService , private sessionhttp: SessionhttpService ) { }

  ngOnInit():void { 
   // this.session = this.sesssionItemService.getSession(1);
   this.sub = this.route.params.subscribe(params => {
     this.id = params['id']; // sert a convertir le 'id' string en number 
   });
   console.log('session id ' + this.id.toString());
   this.session = this.sesssionItemService.getSession(this.id);
   }
  editSession(sessionItem){ 
    console.log(sessionItem); }


}
