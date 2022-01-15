import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    benutzerName: '',
    passwort: ''
  })

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder, private auth: AuthService) { }

  login() {
    const user = { userName: this.form.get('benutzerName')?.value, password: this.form.get('passwort')?.value }

    this.auth.login(user).subscribe((accessTokenObj: any) => {
      if (accessTokenObj['access_token']) {
        localStorage.setItem('access_token', accessTokenObj['access_token'])
        this.auth.loggedIn.next(true);
        this.bsModalRef.hide();
      }


    });


  }

}
