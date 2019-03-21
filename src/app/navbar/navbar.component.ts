import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() navTitle = '';

  items: MenuItem[];


  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: this.navTitle + ' 的代辦事項'
      }
    ];
  }

  logout(event: any) {
    localStorage.clear();
    localStorage.setItem('isReload', 'true');
    this.router.navigate(['/']);
  }

}
