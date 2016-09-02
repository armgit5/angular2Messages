import {Http, Headers} from "angular2/http";
import {Injectable, EventEmitter} from "angular2/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import {Message} from "./message";


@Injectable()

export class MessageService {
  messages: Message[] = [];
  messageIsEdit = new EventEmitter<Message>();
  // host: string = 'http://localhost:3000/message';
  
  host: string = 'https://armangular2.herokuapp.com/message';

  constructor (private _http: Http) {}

  addMessage(message: Message) {
      const body = JSON.stringify(message);
      const headers = new Headers({'Content-Type': 'application/json'});
      const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
      return this._http.post(this.host + token, body, {headers: headers})
              .map(response => {
                const data = response.json().obj;
                let message = new Message(data.content, data._id, data.user.firstName, data.user._id);
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
                  let message = new Message(data[i].content, data[i]._id, data[i].user.firstName, data[i].user._id);
                  console.log(message);
                  objs.push(message);
                }
                
                return objs;
              })
              .catch(error => Observable.throw(error.json()));
  }

  updateMessage(message: Message) {
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this._http.patch(this.host + '/' + message.messageId + token, body, {headers: headers})
            .map(reponse => reponse.json())
            .catch(error => Observable.throw(error.json()));
  }

  editMessage(message: Message) {
    
    this.messageIsEdit.emit(message);
  }

  deleteMessage(message: Message) {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    this.messages.splice(this.messages.indexOf(message), 1);
    return this._http.delete(this.host + '/' + message.messageId + token)
            .map(reponse => reponse.json())
            .catch(error => Observable.throw(error.json()));
  }
}
