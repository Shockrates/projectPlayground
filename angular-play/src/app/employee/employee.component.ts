import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:Employee[] = []
  employee?: Employee;
  currentIndex = -1;
  title = '';
  constructor(private service: EmployeeServiceService) { }

  ngOnInit(): void {
    this.retrieveEmployee()
  }
  retrieveEmployee(): void {
    this.service.getAllEmployees()
      .subscribe(
        (data) => {
          // this.employee = data;
          //console.log(data);
          for(let key in data){
            console.log(key);
            this.employees.push(new Employee( data[key].id, data[key].name, data[key].email, []))
            }
        },
        error => {
          console.log(error);
        });
  }

}
