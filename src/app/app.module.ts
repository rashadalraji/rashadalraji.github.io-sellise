import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VehicleAddComponent } from './vehicles/vehicle-add/vehicle-add.component';
import { FormsModule } from '@angular/forms';
import { Vehicle } from './vehicles/models/vehicle';
import { VehicleListComponent } from './vehicles/vehicle-list/vehicle-list.component';
import { DashboardComponent } from './vehicles/dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { GoogleChartsModule } from 'angular-google-charts';
import { ToastrModule } from 'ngx-toastr';
// import { HighchartsChartComponent } from 'highcharts-angular';
@NgModule({
  declarations: [
    AppComponent,
    VehicleAddComponent,
    VehicleListComponent,
    DashboardComponent,
    
    // HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule,
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
        closeButton : true
      }
    )
  ],exports:[
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
