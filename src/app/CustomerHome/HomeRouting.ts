import { HomeComponent } from './Home.component';
import { CustomerLoginComponent } from '../CustomerLogin/CustomerLogin.component';
import { SecurityLogic } from '../Utilities/Utility.AuthGuard';


;


export const HomeRoutes = [
    { path:'' , component:HomeComponent , canActivate: [SecurityLogic]},
    { path:'Home' , component:HomeComponent , canActivate: [SecurityLogic]},
    { path:'CustomerLogin' , component:CustomerLoginComponent},
    { path:'CustomerAdd' , loadChildren: () => import('../CustomerAdd/CustomerAdd.module')
    .then(m => m.HomeModule) , canActivate: [SecurityLogic]},
    { path:'CustomerSearch' , loadChildren: () => import('../CustomerSearch/CustomerSearch.module')
    .then(m => m.CustomerSearchModule) , canActivate: [SecurityLogic]}
    
];