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
  userForm: FormGroup;
  editPage: boolean = false;
  viewPage: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });

    this.viewPage = true;
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  onSubmit(): void {
    this.editPage = false;
          this.viewPage = true;
    // if (this.userForm.valid) {
    //   this.userService.createUser(this.userForm.value).subscribe(
    //     (user: User) => {
    //       console.log('User created successfully', user);
    //       this.loadUsers();
    //       // this.router.navigate(['/user-list']);
    //       this.editPage = false;
    //       this.viewPage = true;
    //     },
    //     error => {
    //       console.error('Error creating user', error);
    //       this.editPage = true;
    //       this.viewPage = false;
    //     }
    //   );
    // }
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
  editUser(id: number) {
    this.editPage = true;
    this.viewPage = false;
  }

  openAddPage(){
    this.editPage = true;
    this.viewPage = false;
  }
}
