import { FakeformateurService } from './../fakeformateur.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  @Input() formateur:any;
  constructor(private formateurService: FakeformateurService) { }

  ngOnInit(): void {
  }

  onDelete()
  {
this.formateurService.delete(this.formateur);
  }
}
