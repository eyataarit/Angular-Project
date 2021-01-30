import { Injectable } from '@angular/core';
import { PARTICIPANTSITEMS } from './participants';

@Injectable({
  providedIn: 'root'
})
export class FakeparticipantService {

  constructor() { }

  get() { return PARTICIPANTSITEMS;}
  delete(participant)
  {
    let index; 
    index = PARTICIPANTSITEMS.indexOf (participant);
    if (PARTICIPANTSITEMS.indexOf(participant)>= 0 )
    {
      PARTICIPANTSITEMS.splice(index,1);
  }}
  add(participant)
  {
    participant.id = PARTICIPANTSITEMS.length + 1;
    PARTICIPANTSITEMS.push(participant);
  }
  getparticipant(id: number){
    return PARTICIPANTSITEMS[id-1];
  }
  }
