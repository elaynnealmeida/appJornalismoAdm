import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public professor = {
    nome: "",
    email: "",
    senha: ""
  };
  public professor2: any = {
    nome: "",
    email: "",
    senha: ""
  };

  private num: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public toastCtrl: ToastController) {
  }

  login(req) {
    this.auth.login(req)
    .subscribe((data:any )=>{
      data = { console:console.log(JSON.parse(JSON.stringify(data))),
        this:this.professor2=data             
      },
      err => console.log(JSON.parse(JSON.stringify(err)))     
    });   
    this.faz(); 
  }

  faz() {
    console.log("data: " + this.professor2);
    console.log("email: " + this.professor2.email);
    if (this.num > 2) {
      let toast = this.toastCtrl.create({
        message: 'Logado',
        duration: 4000
      });
      toast.present();
    } else {
      let toast = this.toastCtrl.create({
        message: 'Usuário ou senha invalido',
        duration: 4000
      });
      toast.present();
    }
  }

  alterarsenha() { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logout() {
    this.auth.logout();
  }

}
