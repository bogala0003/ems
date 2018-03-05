import { Component, OnInit } from '@angular/core';
import { Employee } from './../../../employee';
import { EmployeeService } from '../../../employee.service'
import { Router,ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employees = employeeService.getAll();
  }
  navigate(id: String): void {
    this.router.navigate(['add-employee', id ]);
  }
  onDelete(employee){
    alert(employee.id)
    if(this.employeeService.delete(employee)){
      this.employees=this.employeeService.getAll();
    }else{

    }
  }
}
