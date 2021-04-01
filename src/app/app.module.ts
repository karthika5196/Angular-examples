import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { DynamicComponentDirective } from './dynamic-component.directive';
import { PureImpurePipe } from './pure-impure.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { RoutingOneComponent } from './routing-one/routing-one.component';
import { RoutingTwoComponent } from './routing-two/routing-two.component';
import { RoutingParamComponent } from './routing-param/routing-param.component';
import { RoutingSearchComponent } from './routing-search/routing-search.component';
import { WildCardRouteComponent } from './wild-card-route/wild-card-route.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    DynamicComponentDirective,
    PureImpurePipe,
    EmployeeDetailComponent,
    CustomDirectiveDirective,
    RoutingOneComponent,
    RoutingTwoComponent,
    RoutingParamComponent,
    RoutingSearchComponent,
    WildCardRouteComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
