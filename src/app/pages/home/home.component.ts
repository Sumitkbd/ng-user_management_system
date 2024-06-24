import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../include/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data!: any[];
  newName!: string;
  newPhone!: string;
  newEmail!: string;
  newAge!: number;
  newAddress!: string;
  showSearchResults: boolean = false;
  searchKey: string = '';
  filteredData: any[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.get<any[]>('http://localhost:3000/api/users').subscribe(data => { this.data = data; });
  }

  searchUsers(): void {
    if (this.searchKey.trim() !== '') {
      this.filteredData = this.data.filter(user =>
        user.name.toLowerCase().includes(this.searchKey.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchKey.toLowerCase()) ||
        user.phone.includes(this.searchKey)
      );
      this.showSearchResults = true;
    } else {
      this.filteredData = [];
      this.showSearchResults = false;
    }
  }
}