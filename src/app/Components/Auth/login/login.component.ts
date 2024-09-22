import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    debugger;
    alert("login");
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          debugger;
          // Handle successful login
          localStorage.setItem('token', response.token); // Store JWT token
          localStorage.setItem('userRole', response.role); // Ensure your backend returns the user's role
          this.router.navigate(['/dashboard']); // Redirect to the dashboard
          alert("login successful");
        },
        error => {
          debugger;
          console.log('Login failed', error);
          alert("login failed");
        }
      );
    }
  }
}
