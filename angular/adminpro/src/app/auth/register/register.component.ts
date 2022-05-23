import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UsersService]
})
export class RegisterComponent implements OnInit {

  NameVal:string;
  EmailVal:string;
  PasswordVal:string;

  constructor(private usersService:UsersService) { }
  //constructor(){}

  ngOnInit(): void {
  }

  registrar():void{
    let user = {Name: this.NameVal, Email: this.EmailVal, Password: this.PasswordVal};

    this.usersService.createUser(user).subscribe();
  }
}
