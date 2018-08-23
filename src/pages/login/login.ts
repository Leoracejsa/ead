import {UsersProvider} from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private credential: Object ={
    userUniversityId: '',
    userPassword: ''
  };

  constructor(
    model: User;

    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {


      this.model = new User();
      this.model.matricula = 5306203;
      this.model.password = 123456;
  }

  login(){
    this.userProvider.login(this.model.matricula, this.model.password)
    .then((result: any) => {
      this.toast.login({ message: 'Usuário Logado com sucesso.'})
    })
    .catch((error: any) =>{
      this.toast.login({message: 'Erro ao efetuar o login.'})
    });

  }
}

export class User{
  matricula: number;
  password: string;

}
