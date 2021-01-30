import { FakesessionsService } from './../fakesessions.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {

  constructor(private sessionItemService: FakesessionsService) { }

  ngOnInit():void {
  }
  addSession(sessionItem){
    console.log(sessionItem);
    this.sessionItemService.add(sessionItem);
  }
}
