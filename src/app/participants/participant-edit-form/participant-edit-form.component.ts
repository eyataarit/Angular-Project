import { ParticipanthttpService } from './../participanthttp.service';
import { FakeparticipantService } from './../fakeparticipant.service';
import { ActivatedRoute } from '@angular/router';
import { participant } from './../participant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participant-edit-form',
  templateUrl: './participant-edit-form.component.html',
  styleUrls: ['./participant-edit-form.component.css']
})
export class ParticipantEditFormComponent implements OnInit {

  
  id;
  private sub: any;
  participant : any;
  constructor(private route:ActivatedRoute ,private participantItemService: FakeparticipantService , private formateurhttp: ParticipanthttpService ) { }

  ngOnInit():void { 
    
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
    });
    console.log('participant id ' + this.id.toString());
    this.participant = this.participantItemService.getparticipant(this.id);
    }
   editformateur(participant){ 
     console.log(participant); }

}
