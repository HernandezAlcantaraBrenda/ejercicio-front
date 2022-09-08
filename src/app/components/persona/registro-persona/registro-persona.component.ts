import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PersonaService} from '../../../services/persona.service';
import {NotificationService} from '../../../services/notification.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit {

  fgPersona: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private personaService: PersonaService,
    private notificationService: NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.configureFormGroupPersona();
  }

  ngOnInit(): void {
  }

  private configureFormGroupPersona(): void {
    this.fgPersona = this.formBuilder.group({
      id: [undefined],
      nombre: [undefined, [Validators.required]],
      apellidoPaterno: [undefined, [Validators.required]],
      apellidoMaterno: [undefined],
      identificacion: [undefined, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.fgPersona.valid) {
      this.personaService.create(this.fgPersona.value).subscribe(() => this.redirectIndex());
    } else {
      this.notificationService.error('El formulario tiene errores');
    }
  }

  private redirectIndex(): void {
    this.router.navigate(['.'], {relativeTo: this.activatedRoute.parent}).then();
  }

}
