import { CARDSITEMS } from './cards';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakecardService {
  get() { return CARDSITEMS;}

  constructor() { }
}
