import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  correo: string = '';


  ngOnInit(): void {
  }

  verificar(){
    if (this.correo == 'admin@binder.cl'){
      console.log('success');
    }
  }
  

}
