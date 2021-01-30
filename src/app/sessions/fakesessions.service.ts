import { Injectable } from '@angular/core';
import { SESSIONITEMS } from './sessionss';
@Injectable({
  providedIn: 'root'
})
export class FakesessionsService {
  constructor() { }
  get() { return SESSIONITEMS;}
  add(sessionItem)
  {
    sessionItem.id = SESSIONITEMS.length + 1;
    SESSIONITEMS.push(sessionItem);
  }
  delete(sessionItem)
  {
    let index; 
    index = SESSIONITEMS.indexOf (sessionItem);
    if (SESSIONITEMS.indexOf(sessionItem)>= 0 ){
      SESSIONITEMS.splice(index,1);
    }
  }
  getSession(id: number){
    return SESSIONITEMS[id-1];
  }

  search(nom :String)
  {
    return SESSIONITEMS;
  } 
  
}
