import { FormateurhttpService } from './../formateurhttp.service';
import { FakeformateurService } from './../fakeformateur.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formateur-edit-form',
  templateUrl: './formateur-edit-form.component.html',
  styleUrls: ['./formateur-edit-form.component.css']
})
export class FormateurEditFormComponent implements OnInit {
  id;
  private sub: any;
  formateur : any;
  domaines=['Web','Mobile','Design','Back-End','Front-End'];
  constructor(private route:ActivatedRoute ,private formateurItemService: FakeformateurService , private formateurhttp: FormateurhttpService ) { }

  ngOnInit():void { 
    
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
    });
    console.log('formateur id ' + this.id.toString());
    this.formateur = this.formateurItemService.getformateur(this.id);
    }
   editformateur(formateur){ 
     console.log(formateur); }

}
