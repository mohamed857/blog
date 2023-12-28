import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  author={
    email:'',
    password:''
  }
  constructor(private _auth:AuthService,private router:Router){}
  
  token:any;
  login=()=>{
    this._auth.login(this.author)
      .subscribe(
        res=>{
          this.token=res;
          localStorage.setItem('token',this.token.mytoken);
          this.router.navigate(['/home']);
          
        },
        err=>{
          console.error('error on login :: '+err);
          
        }
      )
  }
}
