import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import {RegistroPersonaComponent} from './registro-persona/registro-persona.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {IndexPersonaComponent} from '../index-persona/index-persona.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    RegistroPersonaComponent,
    IndexPersonaComponent
  ],
  imports: [
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    PersonaRoutingModule,
    MatCardModule
  ]
})
export class PersonaModule { }
