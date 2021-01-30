import { FakeformateurService } from './fakeformateur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css']
})
export class ContenuComponent implements OnInit {
  formateursItems = [];
  constructor(private formateurService : FakeformateurService) {}
  ngOnInit() {
    this.formateursItems = this.formateurService.get();
  }

}
