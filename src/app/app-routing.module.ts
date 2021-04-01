import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingOneComponent } from './routing-one/routing-one.component';
import { RoutingTwoComponent } from './routing-two/routing-two.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { AppComponent } from './app.component';
import { RoutingParamComponent } from './routing-param/routing-param.component';
import { RoutingSearchComponent } from './routing-search/routing-search.component';
import { WildCardRouteComponent } from './wild-card-route/wild-card-route.component';
import { RouteGuardGuard } from './route-guard.guard';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  // {path:" ", component:AppComponent},
  { path: "", redirectTo: "search", pathMatch: "full" },//to set a default path use redirect
  { path: "one", component: RoutingOneComponent ,canActivate: [RouteGuardGuard] },
  {
    path: "employee",component:EmployeeDetailComponent,
    children: [
      { path: "input", component: InputOutputComponent }//example for child route
    ]
  },
  { path: "input", component: InputOutputComponent },
  { path: "two", component: RoutingTwoComponent },
  { path: "param/:id/:id2", component: RoutingParamComponent },
  { path: "search", component: RoutingSearchComponent },
  { path: "forms", component: ReactiveFormsComponent },
  { path: "**", component: WildCardRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
