import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {//implements OnInit {
  public perfil1: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public storage: Storage,
    public service: ServiceProvider,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController) {
    this.storage.get('login').then(val => {
      if (val !== null) {
        this.perfil1 = val;
        this.perfil1 = this.perfil1.toString().replace('["', '');
        this.perfil1 = this.perfil1.toString().replace('"]', '');
      }
    });
  }

  ionViewCanEnter() {
    return this.auth.userLogado();
  }

  alterarsenha() {
    let prompt = this.alertCtrl.create({
      title: 'Alterar Senha',
      inputs: [
        {
          name: 'atual',
          placeholder: 'Senha Atual',
          value: ''
        },
        {
          name: 'nova',
          placeholder: 'Senha Nova',
          value: ''
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            let params: any = {
              id: this.perfil1,
              atual: data.atual,
              nova: data.nova
            }
            console.log('params: ' + params.id);
            console.log('senha atual: ' + params.atual);
            console.log('nova senha: ' + params.nova);
            this.service.alteraSenha(params)
              .subscribe((data: any) => {
                let toast = this.toastCtrl.create({
                  message: data.mensage,
                  duration: 4000,
                  position: 'bottom'
                });
                toast.present();
              });
          }
        }
      ]
    });
    prompt.present();

  }

  logout() {
    //this.auth.logout();
    this.storage.remove('login');
    this.navCtrl.setRoot(HomePage);
  }

  esqueceusenha() { }

}
