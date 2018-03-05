import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgClass } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Employee } from './employee';
import { EmployeeComponent } from './main/employee/employee.component';
import { EmployeeListComponent } from './main/employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './main/employee/add-employee/add-employee.component';

import { EmployeeService } from './employee.service';
import { OrderByPipe } from './order-by.pipe';
import { NumbersOnlyDirective } from './numbers-only.directive';

const appRoutes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-employee/:id', component: AddEmployeeComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  {
    path: '',
    redirectTo: '/employees', pathMatch: "full"
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    AddEmployeeComponent,
    PageNotFoundComponent,
    EmployeeComponent,
    EmployeeListComponent,
    OrderByPipe,
    NumbersOnlyDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
