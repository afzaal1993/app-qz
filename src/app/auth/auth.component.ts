import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonAlert,
  IonApp,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonAlert,
    IonApp,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonIcon,
  ],
})
export class AuthComponent implements OnInit {
  constructor() {}

  alertButtons = ['Action'];

  ngOnInit() {}

  loginWithGoogle() {
    console.log('login with google');
  }

  loginWithFacebook() {
    console.log('login with facebook');
  }

  playAsGuest() {
    console.log('play as guest');
  }
}
