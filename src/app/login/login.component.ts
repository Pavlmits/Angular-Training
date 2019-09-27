import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Pavlina'
  password = 'pav'
  invalidLogin = false
  errorMessage = 'Invalid credentials'

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username==="pa" && this.password==="pa"){
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
    }else{
      this.invalidLogin = true
    }
    console.log(this.username);
  }

}
