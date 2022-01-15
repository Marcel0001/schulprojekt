import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedIn = false;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService, private authService: AuthService) { }


  ngOnInit(): void {
    this.authService.loggedIn.subscribe(isLoggedIn => this.loggedIn = isLoggedIn);
    if (localStorage.getItem('access_token')) {
      this.authService.loggedIn.next(true);
    }
  }

  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(LoginComponent, { class: 'modal-dialog-centered' });

  }

  logout() {
    this.authService.loggedIn.next(false)
    localStorage.removeItem('access_token')
  }

}
