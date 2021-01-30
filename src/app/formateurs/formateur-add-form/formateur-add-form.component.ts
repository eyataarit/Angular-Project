import { formateur } from './../formateur';
import { FakeformateurService } from './../fakeformateur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formateur-add-form',
  templateUrl: './formateur-add-form.component.html',
  styleUrls: ['./formateur-add-form.component.css']
})
export class FormateurAddFormComponent implements OnInit {

  constructor(private formateurItemService: FakeformateurService) { }

  ngOnInit():void {
  }
  addformateur(formateur){
    console.log(formateur);
    this.formateurItemService.add(formateur);
  }

}
