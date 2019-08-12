import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCCtN3ltcee1Uv4TfxVQNenhPobDV3H-4M",
    authDomain: "proo-1e2f4.firebaseapp.com",
    databaseURL: "https://proo-1e2f4.firebaseio.com",
    projectId: "proo-1e2f4",
    storageBucket: "proo-1e2f4.appspot.com",
    messagingSenderId: "670196486432",
    appId: "1:670196486432:web:27710117246b5875"
    }), AngularFireDatabaseModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
