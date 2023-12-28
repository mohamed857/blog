import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AuthorComponent } from './author/author.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './services/auth.guard';
import { RegisterComponent } from './registration/register/register.component';
import { LoginComponent } from './registration/login/login.component';
import { ForgotPasswordComponent } from './registration/forgot-password/forgot-password.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path: 'article/:id',component: DetailComponent},
    {path:'create',component: CreatearticleComponent, canActivate:[authGuard]},
    {path:'about',component:AboutComponent},

    {path:'privacy', component: PrivacyComponent},
    {path:'author/:id',component:AuthorComponent},

    {path:'login',component:LoginComponent},
    {path:'register',component: RegisterComponent},
    {path:'forgot',component: ForgotPasswordComponent},

    {path:'**',component:NotfoundComponent}
];
