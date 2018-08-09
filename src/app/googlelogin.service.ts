import { Injectable } from '@angular/core';
import { getViewData } from '../../node_modules/@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class GoogleloginService {

  constructor() { }
  data:any
  getViewData(){
    return this.data;
  }
  setData(data):void{
    this.data=data;
  }
}
