import { ParticipantAddFormComponent } from './participants/participant-add-form/participant-add-form.component';
import { ParticipantsComponent } from './participants/participants.component';
import { SessionsComponent } from './sessions/sessions.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenuComponent } from './formateurs/contenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SessionItemComponent } from './sessions/session-item/session-item.component';
import { SessionItemListComponent } from './sessions/session-item-list/session-item-list.component';
import { SessionAddFormComponent } from './sessions/session-add-form/session-add-form.component';
import { FormsModule } from '@angular/forms';
import { SessionEditFormComponent } from './sessions/session-edit-form/session-edit-form.component';
import { TableSessionsComponent } from './dash/table-sessions/table-sessions.component';
import { TableFormateursComponent } from './dash/table-formateurs/table-formateurs.component';
import { FormateurComponent } from './formateurs/formateur/formateur.component';
import { FormateurEditFormComponent } from './formateurs/formateur-edit-form/formateur-edit-form.component';
import { CardComponent } from './dash/card/card.component';
import { FormateurAddFormComponent } from './formateurs/formateur-add-form/formateur-add-form.component';
import { ParticipantComponent } from './participants/participant/participant.component';
import { ParticipantEditFormComponent } from './participants/participant-edit-form/participant-edit-form.component';

const appRoutes: Routes = [
  {path:'dashboard', component: DashComponent},
  {path:'sessions', component: SessionsComponent,
  children :[
{path:'list', component: SessionItemListComponent },
{path:'add', component: SessionAddFormComponent },
{path:'edit/:id', component: SessionEditFormComponent },
{ path:'sessions', redirectTo:'/list', pathMatch:'full'}
]
},
  {path: 'formateurs', component: ContenuComponent,
  children:[
{path:'edit/:id',component:FormateurEditFormComponent},
{path:'add', component: FormateurAddFormComponent },
{path:'refresh', redirectTo:'', pathMatch:'full'}

  ]},
  {path: 'participants', component: ParticipantsComponent,
  children: [
    {path:'add', component: ParticipantAddFormComponent},
    {path:'edit/:id',component: ParticipantEditFormComponent},
    {path:'refresh', redirectTo:'', pathMatch:'full'}

 
  ]

}, 
  { path:'', redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContenuComponent,
    SessionsComponent,
    NavComponent,
    DashComponent,
    SessionItemComponent,
    SessionItemListComponent,
    SessionAddFormComponent,
    SessionEditFormComponent,
    CardComponent,
    TableSessionsComponent,
    TableFormateursComponent,
    FormateurComponent,
    FormateurEditFormComponent,
    FormateurAddFormComponent,
    ParticipantComponent,ParticipantsComponent, ParticipantAddFormComponent, ParticipantEditFormComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule, RouterModule.forRoot(appRoutes, {enableTracing: true}), BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
