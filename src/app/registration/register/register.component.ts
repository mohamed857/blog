import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{


  author ={
    name:'',
    lastName:'',
    email:'',
    password:'',
    about:'',
    image:''
  }

  constructor(private _auth:AuthService, private router:Router){}

  ngOnInit(): void {
  
}
image : any;
select=(e:any)=>{
  this.author.image=e.target.files[0];
}

register=()=>{
  
  let fd = new FormData();
  fd.append('name',this.author.name);
  fd.append('lastName',this.author.lastName);
  fd.append('email',this.author.email);
  fd.append('password',this.author.password);
  fd.append('about',this.author.about);
  fd.append('image',this.author.image);

  this._auth.register(fd).subscribe(
    res=>{
      this.router.navigate(['/login']);
    },
    err=>{
      console.error("error on registering: "+err);
    }
  )
}

}
