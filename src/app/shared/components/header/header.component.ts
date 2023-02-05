import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public router: Router, public httpService: HttpService) {
    this.httpService.getCategories();
  }

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }
}
