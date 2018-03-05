import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Employee } from './../../../employee';
import { EmployeeService } from './../../../employee.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee;
  maxDate: NgbDateStruct;
  joiningDate: NgbDateStruct;
  designations: String[];
  employeeId: number;
  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {
    this.designations = employeeService.getDesignations();
    this.employee = new Employee();
    this.maxDate = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeeId = +params['id'];
      var employee = this.employeeService.getById(this.employeeId);
      this.employee = employee ? employee : this.employee = new Employee();
      if (this.employee && this.employee.doj) {
        this.employee.doj = new Date(this.employee.doj);
        this.joiningDate = { year: this.employee.doj.getFullYear(), month: this.employee.doj.getMonth()+1 , day: this.employee.doj.getDate() };
      }
    });
  }

  onSubmit(employeeForm): void {
    if (employeeForm.submitted && employeeForm.valid) {
      if (this.joiningDate) {
        var date = new Date(this.joiningDate.year, this.joiningDate.month-1, this.joiningDate.day);
        this.employee.doj = date;
      }
      if (this.employeeId) {
        this.employeeService.update(this.employee);
      } else {
        this.employeeService.add(this.employee);
      }
      this.router.navigate(['employees']);
    }
  }
  onReset(): void {
    this.employee = new Employee();
  }
}

