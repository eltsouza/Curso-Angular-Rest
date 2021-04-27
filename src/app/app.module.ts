import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms' /*Importe para capturar dados do formularios */
import { HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component'; /*Fazer requisi��es Ajax*/
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders} from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';

//declarar a exportacao de configuracao de rotas.
export const appRouters: Routes = [

  {path : 'home' , component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : '', component : LoginComponent}

];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
],
imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
