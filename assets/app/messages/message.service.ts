import {Http, Headers} from "angular2/http";
import {Injectable} from "angular2/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import {Message} from "./message";


@Injectable()

export class MessageService {
  messages: Message[] = [];
  host: string = 'http://localhost:3000/message';

  constructor (private _http: Http) {}

  addMessage(message: Message) {
      const body = JSON.stringify(message);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this._http.post(this.host, body, {headers: headers})
              .map(response => {
                const data = response.json().obj;
                let message = new Message(data.content, data._id, 'Dummy', null);
                return message;
              })
              .catch(error => Observable.throw(error.json()));
  }

  getMessages() {
    return this._http.get(this.host)
              .map(response => {
                
                const data = response.json().obj;
                let objs: any[] = [];
            
                for (let i=0; i<data.length; i++) {
                  let message = new Message(data[i].content, data[i]._id, 'Dummy', null);
                  console.log(message);
                  objs.push(message);
                }
                
                return objs;
              })
              .catch(error => Observable.throw(error.json()));
  }

  editMessage(message: Message) {
    this.messages[this.messages.indexOf(message)] = new Message('Edit Message', null, 'Arm');
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
