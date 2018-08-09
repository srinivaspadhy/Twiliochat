import { Component, OnInit } from '@angular/core';
import { ApiobserveService } from '../apiobserve.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private api: ApiobserveService) { }

u_name;
msg;
data={body:""};
  ngOnInit() {
    
  }
apicall(){
 let subs= this.api.postapicall();
 subs.subscribe(data=>console.log(data));

}

channelcall(){
  let channel=this.api.createchannel(this.u_name);
  channel.subscribe(data=>console.log(data));
}
messagecall(){
  let message=this.api.sendMessages(this.msg);
  message.subscribe(data=>{
    this.data=data;
  });
  console.log(this.data)
  const msgstring = JSON.stringify(this.data);
}
}
