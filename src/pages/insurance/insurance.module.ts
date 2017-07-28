import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { InsurantListComponent } from './insurant-list/insurant-list.component';
import { InsurantItemComponent } from './insurant-item/insurant-item.component';
import { InsurantEditComponent } from './insurant-edit/insurant-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { InsuranceService } from './insurance.service'


@NgModule({
  imports: [
     // Import Official Shared Module
    CommonModule,
    FormsModule,
    // Import Custom Shared Module
    PipesModule,
    DirectivesModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: InsurantListComponent, pathMatch: 'full' },
      { path: 'insurant/edit/:planid', component: InsurantEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   InsurantListComponent,
   InsurantItemComponent, 
   InsurantEditComponent
   ],
   providers:[InsuranceService]
})
export class InsuranceModule { }
