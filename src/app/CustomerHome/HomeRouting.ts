import { HomeComponent } from './Home.component';
import { CustomerLoginComponent } from '../CustomerLogin/CustomerLogin.component';


;


export const HomeRoutes = [
    { path:'' , component:HomeComponent},
    { path:'Home' , component:HomeComponent},
    { path:'CustomerLogin' , loadChildren: () => import('../CustomerLogin/CustomerLogin.module')
    .then(m => m.CustomerLoginModule)},
    { path:'CustomerAdd' , loadChildren: () => import('../CustomerAdd/CustomerAdd.module')
    .then(m => m.HomeModule)},
    { path:'CustomerSearch' , loadChildren: () => import('../CustomerSearch/CustomerSearch.module')
    .then(m => m.CustomerSearchModule)}
    
];