import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from 'src/app/home/home.component';
import { CatComponent } from 'src/app/cat/cat.component';
import { LoginComponent } from 'src/app/acces/login/login.component';
import { ChekInComponent } from 'src/app/acces/chek-in/chek-in.component';

@NgModule({
  declarations: [AppComponent,
                HomeComponent,
                CatComponent,
                LoginComponent,
                ChekInComponent
              ],
  imports: [
            BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
            FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
