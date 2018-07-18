import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';


import { MainComponent } from './main/main.component';

import { Http, HttpModule } from '@angular/http';
import { Adal6Service, Adal6HTTPService } from 'adal-angular6';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationGuard } from './guards/authentication.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MainComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: '', redirectTo: 'app-main/app-home', pathMatch: 'full' },
      {
        path: 'app-main', component: MainComponent, canActivate: [AuthenticationGuard], canActivateChild: [AuthenticationGuard], children:
          [
            { path: 'app-home', component: HomeComponent},
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent }
          ]
      }
    ])
  ],
  providers: [
    Adal6Service,
    {
      provide: Adal6HTTPService,
      useFactory: Adal6HTTPService.factory,
      deps: [Http, Adal6Service]
    },
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
