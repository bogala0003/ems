import { Injectable } from '@angular/core';
import { Employee } from './employee';
@Injectable()
export class EmployeeService {
  constructor() {
    const employees = [
      {
        'id': 1001,
        'firstName': 'Superman',
        'lastName': 'Yoda',
        'doj': new Date(),
        'designation': 'Jr. Software Engineer'
      },
      {
        'id': 1002,
        'firstName': 'Foo',
        'lastName': 'Whateveryournameis',
        'doj': new Date(),
        'designation': 'Software Engineer'
      },
      {
        'id': 1003,
        'firstName': 'Toto',
        'lastName': 'Titi',
        'doj': new Date(),
        'designation': 'Sr. Software Engineer'
      }
    ];

    if (!localStorage.getItem('employees')) {
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  }
  getAll(): Employee[] {
    let employeesInMemory: Employee[];
    employeesInMemory = JSON.parse(localStorage.getItem('employees'));
    return employeesInMemory;
  }
  getById(id: number): Employee {
    return this.getAll().filter((employee) => employee.id === id)[0];
  }
  add(employee: Employee) {
    const employees = this.getAll();
    employees.unshift(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
  }

  update(employee: Employee): void {
    const employees = this.getAll();
    for (let index = 0; index < employees.length; index++) {
      if (employees[index].id === employee.id) {
        employees[index] = employee;
        break;
      }
    }
    localStorage.setItem('employees', JSON.stringify(employees));
  }
  delete(employee: Employee): Employee {
    const employees = this.getAll();
    let position = 0;
    for (let index = 0; index < employees.length; index++) {
      if (employees[index].id === employee.id) {
        position = index;
        break;
      }
    }
    let employeeFromDb: Employee;
    if (position !== -1) {
      employeeFromDb = employees[position];
      employees.splice(position, 1);
      localStorage.setItem('employees', JSON.stringify(employees));
    }
    return employeeFromDb;
  }
  getDesignations(): String[] {
    return ['Jr. Software Engineer',
      'Software Engineer',
      'Sr. Software Engineer',
      'System Admin',
      'Sr. System Admin',
      'Techincal Lead',
      'Associate Manager',
      'Manager'
    ];
  }
}
