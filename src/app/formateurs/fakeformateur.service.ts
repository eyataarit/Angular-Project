import { Injectable } from '@angular/core';
import { FORMATEURSITEMS } from './formateurs';

@Injectable({
  providedIn: 'root'
})
export class FakeformateurService {
  constructor() { }
  get() { return FORMATEURSITEMS;}
  delete(formateur)
  {
    let index; 
    index = FORMATEURSITEMS.indexOf (formateur);
    if (FORMATEURSITEMS.indexOf(formateur)>= 0 )
    {
      FORMATEURSITEMS.splice(index,1);
  }}
  add(formateur)
  {
    formateur.id = FORMATEURSITEMS.length + 1;
    FORMATEURSITEMS.push(formateur);
  }
  getformateur(id: number){
    return FORMATEURSITEMS[id-1];
  }


  }
