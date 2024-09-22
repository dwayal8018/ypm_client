import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  accountExists: boolean=false;

  role:any[]=[
    {
      option:"Select role",
      value:""
    },
    {
      option:"Admin",
      value:"admin"
    },
    {
      option:"Tech Expert",
      value:"tech expert"
    },
    {
      option:"Client",
      value:"client"
    }
  ]

  constructor(private fb: FormBuilder, private userService: UserService,private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      
      // Check if the user already exists
      this.userService.checkUserExists(userData.username).subscribe(
        exists => {
          if (exists) {
            this.accountExists = true; // Set flag if account exists
            this.router.navigate(['/login']); // Redirect to login page
          } else {
            this.userService.register(userData).subscribe(
              response => {
                console.log('User registered successfully!', response);
                alert('User registered successfully!');
                this.router.navigate(['/login']); // Redirect to login page after successful registration
              },
              error => {
                console.error('Registration failed', error);
                // Handle registration errors
              }
            );
          }
        },
        error => {
          console.error('Error checking user existence', error);
          // Handle error in checking user existence
        }
      );
    }
  }
}
