import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public router: Router,
    public httpService: HttpService,
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document
  ) {}

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }

  manageSession() {}
}
