import { HomeComponent } from './Home.component';


;


export const HomeRoutes = [
    { path:'' , component:HomeComponent},
    { path:'Home' , component:HomeComponent},
    { path:'CustomerAdd' , loadChildren: () => import('../CustomerAdd/CustomerAdd.module')
    .then(m => m.HomeModule)},
    { path:'CustomerSearch' , loadChildren: () => import('../CustomerSearch/CustomerSearch.module')
    .then(m => m.CustomerSearchModule)}
    
];