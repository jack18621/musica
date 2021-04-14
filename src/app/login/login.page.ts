import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario ={
    nombre: 'Valeria',
    password: 'tueresigual'
  }
  ingreso = {
    nombre:'',
    password: ''
  }
  constructor( private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  ingresar(){
    let message;
    if(this.ingreso.nombre === ''){
      message = 'El nombre es requerido';
      this.showAlert(message);
      return; 
    }
    if(this.ingreso.password === ''){
      message = 'La contraseña es requerida';
      this.showAlert(message);
      return;
    }
    if(this.ingreso.nombre !== this.usuario.nombre || this.ingreso.password !== this.usuario.password){
      message = 'Los datos son invalidos';
      this.showAlert(message);
      return;
    }

    localStorage.setItem('usuario', 'true');
    this.router.navigate(['home']);


  }

  async showAlert(message){
    let alert = await this.alertController.create({
      header: 'Aviso',
      message
    });

    alert.present();
  }

}
