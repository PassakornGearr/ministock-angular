import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

    //One way binding
    message:string = "Hello Angular";
    //object One way binding
    profile = {
      "name":"passakorn",
      "tel":"0648649570",
      "gender":"Male"
    }

    // Two way binding
    userData = {
      "email":"",
      "password":""
    }

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  submitLogin() {
    if(this.userData.email == "admin@email.com" && this.userData.password == "1234" ) { 
      this.route.navigate(['backend']);
    }else {
      alert("login Fail !!!");
    }
    // alert("Hey");
  }

}
