import { FakeparticipantService } from './../fakeparticipant.service';
import { participant } from './../participant';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
@Input() participant:any;
  constructor(private participantService: FakeparticipantService) { }

  ngOnInit(): void {
  }
  onDelete()
  {
this.participantService.delete(this.participant);
  }
}
