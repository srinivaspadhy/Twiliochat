import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Headers, Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChatareaComponent } from './chatarea/chatarea.component';
import { ApiobserveService } from './apiobserve.service';
import { SocialLoginModule, GoogleLoginProvider, AuthServiceConfig } from 'angular-6-social-login';
import { GoogleloginService, } from './googlelogin.service';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import {FormsModule} from '@angular/forms';


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("339350460455-jqu23ugejedftr9p06kdp51ute5b639b.apps.googleusercontent.com")
      }
    ]
  );
  return config;
}
  const routes: Routes = [
    {
    path: '',
    component: ChatareaComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  }]
  
@NgModule({
  declarations: [
    AppComponent,
    ChatareaComponent,
    ChatComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    SocialLoginModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ApiobserveService, GoogleloginService,
  {provide:AuthServiceConfig,
  useFactory:getAuthServiceConfigs}],
  bootstrap: [AppComponent]
})

export class AppModule { }
