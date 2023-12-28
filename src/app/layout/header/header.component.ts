import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public _auth: AuthService,private router:Router){}
  logOut=()=>{
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  scrolled = 0;

  @HostListener('window:scroll')
  onWindowScroll() {

    if (document.documentElement.scrollTop>0) {
      this.scrolled=1
    }
    else{
      this.scrolled=0
    }

    // const numb = window.scrollY;
    // if (numb >= 50){
    //   this.scrolled = 1;
    // }
    // else {
    //   this.scrolled = 0;
    // }
  }

}
