import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { LoginComponent } from './login/login.component';
import { AdminpgComponent } from './adminpg/adminpg.component';
import { RouterModule } from '@angular/router';
export const routes: Routes = [
    {
        path:'',component:LoginComponent
    },
    {
        path:'home',component:HomeComponent
    },
    {
        path:'movie/:id',component:MoviedetailComponent
    },
    {
        path:'admin',component:AdminpgComponent
    },
    // { path: 'search', component: SearchComponent },
];
