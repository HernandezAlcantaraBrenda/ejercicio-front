import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexPersonaComponent} from '../index-persona/index-persona.component';
import {RegistroPersonaComponent} from './registro-persona/registro-persona.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexPersonaComponent,
  },
  {
    path: 'create',
    component: RegistroPersonaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule {
}
