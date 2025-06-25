import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { MovieDetailComponent } from './moviedetail/moviedetail.component';
import { LoginComponent } from './login/login.component';
import { AdminpgComponent } from './adminpg/adminpg.component';

export const routes: Routes = [
    {
        path:'',component:LoginComponent
    },
    {
        path:'home',component:HomeComponent
    },
    // {
        // path:'detail',component:MovieDetailComponent
    // },
    {
        path:'admin',component:AdminpgComponent
    }
];
