import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInfoComponent } from './check-info/check-info.component';
import { CertFormComponent } from './cert-form/cert-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormSubmittedComponent } from './form-submitted/form-submitted.component';

const routes: Routes = [
  { path: '', redirectTo: '/checkinfo', pathMatch: 'full'},
  { path: '', component: CheckInfoComponent},
  { path: 'checkinfo', component: CheckInfoComponent},
  { path: 'CertificationEquation', component: CertFormComponent},
  { path: 'pagenotfound', component: PageNotFoundComponent},
  { path: 'formsubmitted', component: FormSubmittedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
