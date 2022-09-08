import {Component, OnInit} from '@angular/core';
import {Persona} from '../../models/persona.model';
import {PersonaService} from '../../services/persona.service';

@Component({
  selector: 'app-index-persona',
  templateUrl: './index-persona.component.html',
  styleUrls: ['./index-persona.component.css']
})
export class IndexPersonaComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
    private personaService: PersonaService
  ) {
  }

  ngOnInit(): void {
    this.personaService.index().subscribe(personas => this.personas = personas);
  }

}
