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
  username;
  e_id;
  data = { body: "" };
  userdata;
  setTime;
  message;
  channeldata;
  ngOnInit() {
    this.userdata=localStorage.getItem('key');
      this.api.createuser(this.username);
      localStorage.setItem('usrkey',this.username);

      this.setTime=setInterval(()=>{
        this.api.getallMessages().subscribe(res=>{console.log(res);
        this.message=res.messages})},1000)
  }
    apicall() {
    let subs = this.api.postapicall();
    subs.subscribe(data => console.log(data));

  }

  channelcall() {
    let channel = this.api.createchannel(this.u_name);
    channel.subscribe(data => console.log(data));
  }
  messagecall() {
    let message = this.api.sendMessages(this.msg);
    message.subscribe(data => {
      this.data = data;
    });
    console.log(this.data)
    const msgstring = JSON.stringify(this.data);
  }
  usercall(){
    let channel = this.api.createuser(this.username);
    channel.subscribe(data => console.log(data));
  }
  listmessagecall(){
  let message = this.api.getallMessages();
    message.subscribe(data => {
      this.data = data;
    });
  }
  length;
  show:string;
  allchannelcall(srcstr){
    this.api.getallchannels().subscribe(res=>
    {
      this.length=res.channels.length;
      for(let i=0;i<this.length;i++){
        if(srcstr===res.channels[i].unique_name){
          this.show=res.channels[i].unique_name;
          break;
        }
        else{
          this.show="channel not found";

        }
      }
    }),
    err => {console.log(err);}
    }
  

}
