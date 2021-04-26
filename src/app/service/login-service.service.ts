import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(usuario){


    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

        /* Corpo do retorno HTTP */

       var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

       localStorage.setItem("token",token);

       console.info("O Token de acesso foi gerado.:" + localStorage.getItem("token"));


    },
       error => {
          console.error("Dados de acesso invalido!!");
       }
    );
  }
}
