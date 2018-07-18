import { Component, OnInit } from '@angular/core';
import { Adal6Service } from 'adal-angular6';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private adalSvc: Adal6Service) {
    this.adalSvc.init(environment.adalConfig);
  }

  ngOnInit(): void {
    this.adalSvc.handleWindowCallback();
  }
}
