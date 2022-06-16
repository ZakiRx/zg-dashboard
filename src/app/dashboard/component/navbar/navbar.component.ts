import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public toggleSidebar() {
    let sidebar = document.querySelector('#sidebar');
    let navbar = document.querySelector('#navbar');
    let search = document.querySelector('#sidebar .sidebar-header .search');
    let content = document.querySelector('.content');
    sidebar?.classList.toggle('closed');
    navbar?.classList.toggle('closed');
    if (!sidebar?.classList.contains('closed')) {
      content?.classList.remove('sidebar-mini');
      setTimeout(() => {
        search?.classList.remove('hide');
      }, 400);
    } else {
      search?.classList.add('hide');
      content?.classList.add('sidebar-mini');
    }
  }
  public subProfileToggle() {
    let subProfile = document.querySelector('#navbar .profile .sub-profile');
    subProfile?.classList.toggle('show');
  }
}
