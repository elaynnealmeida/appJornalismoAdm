import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CadastrouserPage } from '../pages/cadastrouser/cadastrouser';
import { AvisosPage } from '../pages/avisos/avisos';
import { CadastrarsetorcursoPage } from '../pages/cadastrarsetorcurso/cadastrarsetorcurso';
import { CadastrarsetoruftPage } from '../pages/cadastrarsetoruft/cadastrarsetoruft';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { AuthProvider } from '../providers/auth/auth';
import { AvisosProvider } from '../providers/avisos/avisos';
import { SetorcursoProvider } from '../providers/setorcurso/setorcurso';
import { SetoruftProvider } from '../providers/setoruft/setoruft';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AvisosPage,
    CadastrouserPage,
    CadastrarsetorcursoPage,
    CadastrarsetoruftPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot( {
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AvisosPage,
    CadastrouserPage,
    CadastrarsetorcursoPage,
    CadastrarsetoruftPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: ServiceProvider, useClass: ServiceProvider},
    {provide: AuthProvider, useClass: AuthProvider},
    {provide: AvisosProvider, useClass: AvisosProvider},
    {provide: SetorcursoProvider, useClass: SetorcursoProvider},
    {provide: SetoruftProvider, useClass: SetoruftProvider}  
    
  ]
})
export class AppModule {}
