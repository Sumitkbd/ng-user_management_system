import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, EditProfileComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  data!: any;

  constructor(private auth: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.auth.getProfile().subscribe((res: any) => {
      //  console.log(JSON.stringify(res))
      if (res.success) {
        this.data = res.data;
        // console.log(this.data);
      } else {
        alert('Please Signup !')
      }
    }, err => {
    })
  }

  /*
    logout() {
      localStorage.clear();
      this.router.navigate(['/loginUser'])
    }
  */



}

