import { FakeparticipantService } from './fakeparticipant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  participantsItems= [];
  constructor(private participantService: FakeparticipantService) { }
  ngOnInit(): void 
  {
    this.participantsItems = this.participantService.get();
  }

}
