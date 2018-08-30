import {UsersProvider} from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: any;
  private credential: Object ={
    userUniversityId: '5306203',
    userPassword: '123456'
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController, 
    private userProvider: UsersProvider
  ) {
      this.model = new User();
      this.model.matricula = "5306203";
      this.model.password = 123456;
  }

  login(){
    this.userProvider.login(this.model.matricula, this.model.password)
    .then((result: any) => {
      let toast = this.toast.create({
        message: 'Usuário Logado com sucesso.',
        duration: 3000,
        position: 'top'
      });
      toast.present()
    })
    .catch((error: any) =>{
      let toast = this.toast.create({
        message: 'Erro ao efetuar o login.',
        duration: 3000,
        position: 'top'
      });
      toast.present()
    });

  }
}

export class User{
  matricula: string;
  password: string;

}
