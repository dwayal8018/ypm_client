import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  userList: User[] = [];
  editPage: boolean = false;
  viewPage: boolean = false;
  newUser: User = new User();
  isEdit: boolean = false;
  usernameTouched = false;
  passwordTouched = false;
  emailTouched = false;
  phoneNumberTouched = false;
  addressTouched = false;
  roleTouched = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {

    this.viewPage = true;
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  onSubmit(): void {
    // this.editPage = false;
    // this.viewPage = true;


    this.userService.createUser(this.newUser).subscribe(
      (user: User) => {
        console.log('User created successfully', user);
        this.loadUsers();
        // this.router.navigate(['/user-list']);
        this.editPage = false;
        this.viewPage = true;
      },
      error => {
        console.error('Error creating user', error);
        this.editPage = true;
        this.viewPage = false;
      }
    );

  }

  loadUsers(): void {
    this.userService.getUsers("").subscribe(
      (data: User[]) => {
        this.userList = data;
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(
        () => {
          this.loadUsers();
        },
        error => {
          console.error('Error deleting user', error);
        }
      );
    }
  }

  openEditPage(id: number) {
    this.newUser = this.userList[id];
    this.isEdit = true;
    this.editPage = true;
    this.viewPage = false;
  }

  openAddPage() {
    this.newUser = new User();
    this.isEdit = false;
    this.editPage = true;
    this.viewPage = false;
  }

 

  cancelForm() {
    this.newUser = new User();
    this.editPage = false;
    this.viewPage = true;
  }

  selectRole(event:any){
    this.newUser.role=event.target.value;
  }
}
