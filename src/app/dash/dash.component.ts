import { FakecardService } from './fakecard.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{
 cardsItems = [];
  constructor(private cardsItemsService : FakecardService) {}
  ngOnInit() {
    this.cardsItems = this.cardsItemsService.get();
  }
}
