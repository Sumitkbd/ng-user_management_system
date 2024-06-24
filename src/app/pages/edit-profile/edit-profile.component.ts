import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit {
  data!: any;
  newName: string = '';
  newPhone: string = '';
  newDob: string = '';
  newAddress: string = '';
  newWork: string = '';

  constructor(
    private http: HttpClient,
    private auth: UserService) { }

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
        // this.logout();
      }
    }, err => {
    })
  }

  updateData(id: number, newName: string, newPhone: string, newDob: string, newAddress: string, newWork: string): void {
    const newData = {
      displayName: newName,
      dob: newDob,
      phone: newPhone,
      work: newWork,
      address: newAddress
    };

    this.http.put<any>(`http://localhost:3000/auth/editProfile/${id}`, newData).subscribe(updatedData => {
      console.log('Data updated:', updatedData);
      // window.location.reload(); // Refresh the page after data update
    });
  }

  selectedItemId: any; // property to store selected item id
  populateForm(data: any): void {
    // Assign item values to form fields
    this.selectedItemId = data._id;
    this.newName = data.displayName;

  }




  // when click close button
  refresh() {
    window.location.reload(); // Refresh the page after data update
  }



}



