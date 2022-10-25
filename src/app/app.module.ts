import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [AppComponent, RoomsComponent, RoomsListComponent, HeaderComponent, ContainerComponent, EmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, TooltipModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
