import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NewUserComponent } from '../../pages/new-user/new-user.component';
import { SignupComponent } from '../../pages/signup/signup.component';
import { LoginComponent } from '../../pages/login/login.component';
import { ProfileComponent } from '../../pages/profile/profile.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NewUserComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) { }

  logout() {
    localStorage.clear();
    this.router.navigate(['/loginUser'])
  }

}
