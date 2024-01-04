import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import { HomeComponent } from 'src/app/home/home.component';
import { CatComponent } from 'src/app/cat/cat.component';
import { LoginComponent } from 'src/app/acces/login/login.component';
import { ChekInComponent } from 'src/app/acces/chek-in/chek-in.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cat', component: CatComponent },
    { path: 'login', component: LoginComponent },
    { path: 'chekin', component: ChekInComponent },
    {
      path: '**',redirectTo: 'chekin',pathMatch: 'full'
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
