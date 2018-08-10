import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, identity } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiobserveService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic QUMwZmJkYWE1YzQ5OTQzZDI0ZjdjY2Y1MzY4YTc3YjI5YzpiZWRjMTQ0YzNkMzJhMzJjOTUwOWQ3ZmMzNzUyMDU0ZA=='
    })
  }; username: string;
  password: string;

  url = "https://chat.twilio.com/v2/Services/";
  serviceId = "ISdca12eb9df2b4e4880a9c0c2be26059d/";
  channelId = "CH2a19a05ac41a44ef8536167e3aa84b7a";
  //
  public postapicall(): Observable<any> {
    const body = new HttpParams().set('FriendlyName', 'srinivas').set('Uniquename', 'play/');
    return this.http.post<any>(this.url, body.toString(), this.httpOptions);

  }
  public getapicall(getURL: string): Observable<any> {
    return this.http.get<any>(getURL, this.httpOptions);
  }


  generalchannel(identity): Observable<any> {
    return this.http.post<any>("https://chat.twilio.com/v2/Services/ISdca12eb9df2b4e4880a9c0c2be26059d/channels/general/Members", "Uniquename=general&Identity=" + identity + "&serviceid=" + this.serviceId, this.httpOptions);
  }
  //Create Channel
  createchannel(u_name): Observable<any> {
    const body = new HttpParams().set('FriendlyName', 'srinivas').set('UniqueName', u_name);

    return this.http.post<any>(this.url + this.serviceId + "Channels", body.toString(), this.httpOptions);
  }
  //retrieve channel
  getcreatedChannel(): Observable<any> {
    return this.http.get<any>(this.url + this.serviceId + "Channels/" + this.channelId, this.httpOptions);
  }
  getgeneralchannel(): Observable<any> {
    return this.http.get<any>("https://chat.twilio.com/v2/Services/ISdca12eb9df2b4e4880a9c0c2be26059d/channels/");
  }
  
  sendMessages(msg): Observable<any> {
    const body = new HttpParams().set('Body', msg);
    return this.http.post<any>(this.url + this.serviceId + "Channels/" + this.channelId + "/Messages", body.toString(), this.httpOptions);
  }
  getallMessages(): Observable<any> {
    return this.http.get<any>(this.url + this.serviceId + "Channels/" + this.channelId + "/Messages", this.httpOptions);
  }
  createuser(username):Observable<any>{
    const body = new HttpParams().set('Identity', username).set('ServicesId','ISdca12eb9df2b4e4880a9c0c2be26059d');

    return this.http.post<any>(this.url + this.serviceId + "Users", body.toString(), this.httpOptions);
    
  }
  
  //adding a member to a channel through its SID or Uniquename
  //addmember(u_name):Observable<any>{
    //const body = new HttpParams().set('Identity', localStorage.getItem('usrkey')).set('ChannelSid', u_name).set('ServiceId','ISdca12eb9df2b4e4880a9c0c2be26059d');
    //return this.http.post<any>(this.url+this.serviceId+"Channels/"+this.channelId+"/Members",body.toString(),this.httpOptions)
  //}
}
