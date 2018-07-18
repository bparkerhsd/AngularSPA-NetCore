import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adal6Service } from 'adal-angular6';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adalService: Adal6Service
  ) { }

  ngOnInit() {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    if (this.adalService.userInfo.authenticated) {
      this.router.navigate([returnUrl]);
    } else {
      this.adalService.login();
      console.log("Logged In")
    }
  }
}
