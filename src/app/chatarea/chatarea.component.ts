import { Component, OnInit } from '@angular/core';
import { ApiobserveService } from '../apiobserve.service';
import { GoogleLoginProvider, AuthService } from 'angular-6-social-login';
import { Router } from '@angular/router';
import { GoogleloginService } from '../googlelogin.service';


@Component({
  selector: 'app-chatarea',
  templateUrl: './chatarea.component.html',
  styleUrls: ['./chatarea.component.css']
})
export class ChatareaComponent implements OnInit {

  constructor(private api: ApiobserveService,private socialAuthService:AuthService,private router:Router,private googleService:GoogleloginService) { }

  ngOnInit() { }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + "sign in data:", userData);
        this.googleService.setData(userData);
        this.router.navigate(["/chat"])
      }
    )
  }
}


