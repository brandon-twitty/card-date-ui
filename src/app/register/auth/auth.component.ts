import { Component, OnInit } from '@angular/core';
import {AmplifyService} from 'aws-amplify-angular';
import {Router} from '@angular/router';
import Auth from '@aws-amplify/auth';
import {auth} from 'aws-amplify-angular/dist/src/assets/data-test-attributes';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent  {

  state: any;
  newUser: any;
  username: any;
  password: any;

  constructor(public amplifyService: AmplifyService, public router: Router){
    this.amplifyService = amplifyService;
    this.amplifyService.authStateChange$
        .subscribe(authState => {
          if (authState.state === 'signedIn') {
            this.router.navigate(['/profile']);
          }
        });
  }
}
