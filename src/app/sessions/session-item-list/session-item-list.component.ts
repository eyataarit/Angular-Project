import { FakesessionsService } from './../fakesessions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {

  sessionItems = [];

  constructor(private sessionItemService: FakesessionsService) { }

  ngOnInit() {
    this.sessionItems = this.sessionItemService.get();
  }

}
