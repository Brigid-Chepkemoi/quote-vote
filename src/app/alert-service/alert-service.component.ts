import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceComponent {
  alertMe(message:string){
    alert(message)
  }

  constructor() { }
}
