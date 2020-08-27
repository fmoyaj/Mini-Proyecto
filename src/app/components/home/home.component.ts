import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  correo: string = '';
  contrasenha: string = '';

  constructor (private router: Router) {
  }

  ngOnInit(): void {
  }

  verificar(){
    if (this.correo == 'admin@binder.cl' && this.contrasenha == 'adminsetup'){
      console.log('success');
      this.router.navigate(['/usuarios']);
    }
    else {
      alert('Usuario incorrecto. Intente otra vez');
    }
  }
  

}
