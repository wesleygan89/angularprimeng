import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { BookingsystemRoutingModule } from './bookingsystem-routing.module';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { CarService } from 'src/app/showcase/service/carservice';
import { CountryService } from 'src/app/showcase/service/countryservice';
import { EventService } from 'src/app/showcase/service/eventservice';
import { NodeService } from 'src/app/showcase/service/nodeservice';
import { AppComponent } from 'src/app/bookingsystem/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from 'src/app/bookingsystem/components/home/home.component';
import { CalendarModule } from 'src/app/components/calendar/calendar';
import { TabViewModule } from 'src/app/components/tabview/tabview';
import { CodeHighlighterModule } from 'src/app/components/codehighlighter/codehighlighter';
import { DropdownModule } from '../components/dropdown/dropdown';
import { CardModule } from '../components/card/card';
import { SpinnerModule } from '../components/spinner/spinner';
import { ProgressSpinnerModule } from '../components/progressspinner/progressspinner';
import { GrowlModule } from '../components/growl/growl';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsService } from './notifications/notifications.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Subject } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    BookingsystemRoutingModule ,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule,
    TabViewModule,
    CodeHighlighterModule,
    DropdownModule,
    CardModule,
    SpinnerModule,
    ProgressSpinnerModule,
    GrowlModule
  ],
  declarations: [
    AppComponent,HomeComponent,BookingpageComponent, NotificationsComponent] 
  ,providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CarService,CountryService,EventService,NodeService,NotificationsService
],
bootstrap: [AppComponent]
})
export class BookingsystemModule { }
