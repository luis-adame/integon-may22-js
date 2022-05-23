import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {UtileriasModule} from './utilerias/utilerias.module'

import { ComponentOne } from './app.component';
import {Ejemplo} from './app.ejemplo';
import {Tercero} from './app.tercero';
import { QuintoComponent } from './quinto/quinto.component';
import { CounterComponent } from './counter/counter.component';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { MatematicoComponent } from './matematico/matematico.component';

import { SharedModule } from './shared/shared.module'

import { AerolineaModule } from './aerolinea/aerolinea.module'

import { HttpClientModule } from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import { DemoutileriasComponent } from './utilerias/demoutilerias/demoutilerias.component';
import { PersonasComponent } from './personas/personas.component';
import { DetallepersonasComponent } from './detallepersonas/detallepersonas.component';

const routes: Routes = [
  {path: 'demoutilerias', component: DemoutileriasComponent},
  {path: 'personas', component: PersonasComponent},
  {path: 'personas/detallepersonas/:id', component: DetallepersonasComponent},
  {path: '**', redirectTo: '/demoutilerias'}
];

// import { SortPipe } from './sort.pipe';
// import { CopyrightDirective } from './copyright.directive';
// import { NumericDirective } from './numeric.directive';
// import { PermissionDirective } from './permission.directive';

@NgModule({
  declarations: [
    ComponentOne,
    Ejemplo,
    Tercero,
    QuintoComponent,
    CounterComponent,
    InfoPersonaComponent,
    MatematicoComponent,
    PersonasComponent,
    DetallepersonasComponent
    // SortPipe,
    // CopyrightDirective,
    // NumericDirective,
    // PermissionDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    UtileriasModule,
    SharedModule,
    AerolineaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ComponentOne]
})
export class ModuleOne { }
