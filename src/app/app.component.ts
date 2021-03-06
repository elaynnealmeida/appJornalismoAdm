import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CadastrouserPage } from '../pages/cadastrouser/cadastrouser';
import { AvisosPage } from '../pages/avisos/avisos';
import { CadastrarsetorcursoPage } from '../pages/cadastrarsetorcurso/cadastrarsetorcurso';
import { CadastrarsetoruftPage } from '../pages/cadastrarsetoruft/cadastrarsetoruft';
import { AuthProvider } from '../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { PerfilPage } from '../pages/perfil/perfil';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  public perfil: any = [];


  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: AuthProvider,
    public storage: Storage,
    public app: App) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: HomePage },
      { title: 'Usuários', component: ListPage },
      { title: 'Avisos', component: AvisosPage },
      { title: 'Setores da UFT', component: CadastrarsetoruftPage },
      { title: 'Setores do Curso', component: CadastrarsetorcursoPage },
      { title: 'Alterar Status', component: CadastrouserPage },
      { title: 'Perfil', component: PerfilPage }
    ];


    this.storage.get('login').then(val => {
      if (val !== null) {
        this.perfil = val;
        this.perfil = this.perfil.toString().replace('["','');
        this.perfil = this.perfil.toString().replace('"]','');
        this.rootPage = AvisosPage;
        //  return true;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, { 'perfil': this.perfil });

    //this.app.getRootNav().push(page.component);

  }

}
