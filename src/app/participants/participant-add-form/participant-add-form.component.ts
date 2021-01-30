import { participant } from './../participant';
import { FakeparticipantService } from './../fakeparticipant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participant-add-form',
  templateUrl: './participant-add-form.component.html',
  styleUrls: ['./participant-add-form.component.css']
})
export class ParticipantAddFormComponent implements OnInit {

  constructor(private participantItemService: FakeparticipantService) { }

  ngOnInit(): void {
  }
addparticipant(participant)
{
  
  console.log(participant);
  this.participantItemService.add(participant);
}
}
