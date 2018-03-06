import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:Object;
  constructor(private http: AppService) { }

  ngOnInit() {
    this.http.get("users").subscribe(
      data => { this.users = data },
      err => console.error(err),
      () => console.log('done loading users')
    );
  }

}
