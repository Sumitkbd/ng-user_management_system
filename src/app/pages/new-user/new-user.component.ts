import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],

  // imports: [],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  userForm: FormGroup; // Declare userForm as a FormGroup

  constructor(private userService: UserService) {
    // Initialize userForm with form controls and validators
    this.userForm = new FormGroup({
      'name': new FormControl(''),
      'phone': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'age': new FormControl(''),
      'address': new FormControl('')
    });
  }

  addUser(): void {
    if (this.userForm.valid) {
      // Proceed with adding user if form is valid
      const userData = this.userForm.value; // Get form values
      this.userService.addUser(userData); // Call the addUser method from the UserService
      console.log('User added successfully');
      this.userForm.reset(); // Clear form fields after successful submission
    } else {
      // Handle invalid form submission
      console.log('Form is invalid');
    }
  }
  // This will clear all fields in the form
  clearForm() {
    this.userForm.reset();
  }
  //Set the message when data added successfully in userlist
  displayMessage() {
    alert("User added successfully")
  }
}
