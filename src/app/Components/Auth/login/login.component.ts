import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from 'src/app/Services/auth.service';
// import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:any ;

  constructor( private authService: AuthService, private router: Router) {
    this.loginForm = {
      username: "",
      password: ""
    };
  }

  onSubmit(): void {
      this.authService.login(this.loginForm).subscribe(
        (response: any) => {
          console.log(response.userRole); // Access the user role
          localStorage.setItem('userRole', response.role); // Ensure your backend returns the user's role
          localStorage.setItem('userID', response.userID); // Ensure your backend returns the user's role
          localStorage.setItem('username', response.username); // Ensure your backend returns the user's role
          
          // if("admin" === localStorage.getItem('userRole'))
          this.router.navigate(['/dashboard']); // Redirect to the dashboard
          // else
          // this.router.navigate(['/dashboard/service-requests']); 
          alert("login successful");
        },
        error => {
          if (error.status === 404) {
            console.error('Error:', error.error.error); // Log the error message
          } else {
            console.error('Unexpected error:', error);
          }
        }
      );
      
  }

  isUndefinedOrNullOrEmpty(obj:any) {
    if (obj == undefined || obj == null || obj == '' || obj == ' ') {
      return true;
    } else {
      return false;
    }
  }
}
