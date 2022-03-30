import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { StoreDataService } from './store-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   
  constructor(private storedataservice:StoreDataService, private route:Router){

  }

  canActivate(): boolean {
     if(this.storedataservice.loggedin()){
       return true;
     }else{
       this.route.navigate(['./login']);
       return false;
     }
  }
}
