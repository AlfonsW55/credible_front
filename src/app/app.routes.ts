import { Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomepageMaincontentComponent } from './component/homepage-maincontent/homepage-maincontent.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path: 'home', component: HomepageComponent},
    {path: 'homePage', component: HomepageComponent},
    {path: 'main', component: HomepageMaincontentComponent},
    {path: 'signUp', component:SignupComponent},
    {path: 'login', component:LoginComponent}
];