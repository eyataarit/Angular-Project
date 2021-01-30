import { FakecardService } from '../fakecard.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() card:any;
  constructor(private cardItemService: FakecardService) { }
  ngOnInit(): void {
  
  }


}
