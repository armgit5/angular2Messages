var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("messages/message", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Message;
    return {
        setters:[],
        execute: function() {
            Message = (function () {
                function Message(content, messageId, username, userId) {
                    this.content = content;
                    this.messageId = messageId;
                    this.username = username;
                    this.userId = userId;
                }
                return Message;
            }());
            exports_1("Message", Message);
        }
    }
});
System.register("messages/message.component", ["angular2/core", "messages/message"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, message_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent() {
                    this.editClicked = new core_1.EventEmitter();
                    this.show = true;
                }
                MessageComponent.prototype.onClick = function () {
                    this.editClicked.emit('Changed');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', message_1.Message)
                ], MessageComponent.prototype, "message", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MessageComponent.prototype, "editClicked", void 0);
                MessageComponent = __decorate([
                    core_1.Component({
                        selector: 'my-message',
                        template: "\n      <article class=\"panel panel-default\" *ngIf=\"show\">\n        <div class=\"panel-body\">\n          {{message.content}}\n        </div>\n        <footer class=\"panel-footer\">\n         <div class=\"author\">\n           {{message.username}}\n         </div>\n         <div class=\"config\">\n           <a href=\"#\" (click)=\"onClick()\">Edit</a>\n           <a href=\"#\">Delete</a>\n         </div>\n        </footer>\n      </article>\n  ",
                        styles: ["\n    .author {\n      display: inline-block;\n      font-style: italic;\n      font-size: 12px;\n      width: 80%;\n    }\n    .config {\n      display: inline-block;\n      text-align: right;\n      font-size: 12px;\n      width: 19%;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_2("MessageComponent", MessageComponent);
        }
    }
});
System.register("messages/message-list.component", ["angular2/core", "messages/message.component", "messages/message"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, message_component_1, message_2;
    var MessageListComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            }],
        execute: function() {
            MessageListComponent = (function () {
                function MessageListComponent() {
                    this.messages = [
                        new message_2.Message('A new message', null, 'Arm'),
                        new message_2.Message('A new message2', null, 'Arm2'),
                        new message_2.Message('A new message3', null, 'Arm3'),
                    ];
                }
                MessageListComponent = __decorate([
                    core_2.Component({
                        selector: 'my-message-list',
                        template: "\n    <section class=\"col-md-8 col-md-offset-2\">\n       <my-message *ngFor=\"#message of messages\" [message]=\"message\" (editClicked)=\"message.content = $event\"></my-message>\n    </section>\n  ",
                        directives: [message_component_1.MessageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageListComponent);
                return MessageListComponent;
            }());
            exports_3("MessageListComponent", MessageListComponent);
        }
    }
});
System.register("messages/message-input.component", ["angular2/core", "messages/message.component", "messages/message"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, message_component_2, message_3;
    var MessageInputComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (message_component_2_1) {
                message_component_2 = message_component_2_1;
            },
            function (message_3_1) {
                message_3 = message_3_1;
            }],
        execute: function() {
            MessageInputComponent = (function () {
                function MessageInputComponent() {
                }
                MessageInputComponent.prototype.onCreate = function (content) {
                    var message = new message_3.Message(content, null, 'Dummy');
                    console.log(message);
                };
                MessageInputComponent = __decorate([
                    core_3.Component({
                        selector: 'my-message-input',
                        template: "\n    <section class=\"col-md-8 col-md-offset-2\">\n       <div class=\"form-group\">\n        <label for=\"content\">Content</label>\n        <input type=\"text\" class=\"form-control\" id=\"content\" #input>\n        <button type=\"submit\" class=\"btn btn-primary\"\n            (click)=\"onCreate(input.value)\">Send Message</button>\n       </div>\n    </section>\n  ",
                        directives: [message_component_2.MessageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageInputComponent);
                return MessageInputComponent;
            }());
            exports_4("MessageInputComponent", MessageInputComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "messages/message-list.component", "messages/message-input.component"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_4, message_list_component_1, message_input_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (message_list_component_1_1) {
                message_list_component_1 = message_list_component_1_1;
            },
            function (message_input_component_1_1) {
                message_input_component_1 = message_input_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_4.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"row spacing\">\n      <my-message-input></my-message-input>\n    <div>\n    <div class=\"row spacing\">\n      <my-message-list></my-message-list>\n      </div>\n    ",
                        directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_5("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
System.register("auth/user", [], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(email, password, firstName, lastName) {
                    this.email = email;
                }
                return User;
            }());
            exports_7("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNRSxpQkFBYSxPQUFlLEVBQUUsU0FBa0IsRUFBRSxRQUFpQixFQUFFLE1BQWU7b0JBQ2xGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixDQUFDO2dCQUNILGNBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELDZCQVlDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ3lCRDtnQkFBQTtvQkFFWSxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO29CQUVuRCxTQUFJLEdBQUcsSUFBSSxDQUFDO2dCQU1kLENBQUM7Z0JBSkMsa0NBQU8sR0FBUDtvQkFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFQRDtvQkFBQyxZQUFLLEVBQUU7O2lFQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7cUVBQUE7Z0JBcENYO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSx3Y0FlVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyx5UEFhUixDQUFDO3FCQUNILENBQUM7O29DQUFBO2dCQVlGLHVCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCwrQ0FVQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNsQ0Q7Z0JBQUE7b0JBQ0UsYUFBUSxHQUFjO3dCQUNwQixJQUFJLGlCQUFPLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7d0JBQ3pDLElBQUksaUJBQU8sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO3dCQUMzQyxJQUFJLGlCQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztxQkFDNUMsQ0FBQztnQkFDSixDQUFDO2dCQWZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLDJNQUlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUMvQixDQUFDOzt3Q0FBQTtnQkFPRiwyQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsdURBTUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDREQ7Z0JBQUE7Z0JBS0EsQ0FBQztnQkFKQyx3Q0FBUSxHQUFSLFVBQVMsT0FBZTtvQkFDdEIsSUFBTSxPQUFPLEdBQVksSUFBSSxpQkFBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBbEJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsUUFBUSxFQUFFLHNYQVNUO3dCQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUMvQixDQUFDOzt5Q0FBQTtnQkFNRiw0QkFBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQseURBS0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDTEQ7Z0JBQUE7Z0JBR0EsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDJMQU9UO3dCQUNELFVBQVUsRUFBRSxDQUFDLDZDQUFvQixFQUFFLCtDQUFxQixDQUFDO3FCQUU1RCxDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQsdUNBR0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNqQkQsbUJBQVMsQ0FBQyw0QkFBWSxDQUFDLENBQUM7Ozs7Ozs7Ozs7O1lDSnhCO2dCQUVFLGNBQVksS0FBYSxFQUFFLFFBQWdCLEVBQUUsU0FBa0IsRUFBRSxRQUFpQjtvQkFDaEYsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0gsV0FBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQsdUJBS0MsQ0FBQSIsImZpbGUiOiIuLi8uLi8uLi9TZWVkIFByb2plY3QvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIG1lc3NhZ2VJZDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvciAoY29udGVudDogc3RyaW5nLCBtZXNzYWdlSWQ/OiBzdHJpbmcsIHVzZXJuYW1lPzogc3RyaW5nLCB1c2VySWQ/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubWVzc2FnZUlkID0gbWVzc2FnZUlkO1xuICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwic2hvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgIHt7bWVzc2FnZS5jb250ZW50fX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICAgICAgICAge3ttZXNzYWdlLnVzZXJuYW1lfX1cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiPlxuICAgICAgICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJvbkNsaWNrKClcIj5FZGl0PC9hPlxuICAgICAgICAgICA8YSBocmVmPVwiI1wiPkRlbGV0ZTwvYT5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIC5hdXRob3Ige1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgLmNvbmZpZyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHdpZHRoOiAxOSU7XG4gICAgfVxuICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuICBASW5wdXQoKSBtZXNzYWdlOiBNZXNzYWdlO1xuICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBzaG93ID0gdHJ1ZTtcblxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuZWRpdENsaWNrZWQuZW1pdCgnQ2hhbmdlZCcpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LW1lc3NhZ2UtbGlzdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICA8bXktbWVzc2FnZSAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIFttZXNzYWdlXT1cIm1lc3NhZ2VcIiAoZWRpdENsaWNrZWQpPVwibWVzc2FnZS5jb250ZW50ID0gJGV2ZW50XCI+PC9teS1tZXNzYWdlPlxuICAgIDwvc2VjdGlvbj5cbiAgYCxcbiAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IHtcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtcbiAgICBuZXcgTWVzc2FnZSgnQSBuZXcgbWVzc2FnZScsIG51bGwsICdBcm0nKSxcbiAgICBuZXcgTWVzc2FnZSgnQSBuZXcgbWVzc2FnZTInLCBudWxsLCAnQXJtMicpLFxuICAgIG5ldyBNZXNzYWdlKCdBIG5ldyBtZXNzYWdlMycsIG51bGwsICdBcm0zJyksXG4gIF07XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSBcIi4vbWVzc2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlLWlucHV0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJjb250ZW50XCI+Q29udGVudDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb250ZW50XCIgI2lucHV0PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25DcmVhdGUoaW5wdXQudmFsdWUpXCI+U2VuZCBNZXNzYWdlPC9idXR0b24+XG4gICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICBgLFxuICBkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUlucHV0Q29tcG9uZW50IHtcbiAgb25DcmVhdGUoY29udGVudDogc3RyaW5nKSB7XG4gICAgY29uc3QgbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKGNvbnRlbnQsIG51bGwsICdEdW1teScpO1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2VMaXN0Q29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtNZXNzYWdlSW5wdXRDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZS1pbnB1dC5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgPG15LW1lc3NhZ2UtaW5wdXQ+PC9teS1tZXNzYWdlLWlucHV0PlxuICAgIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICA8bXktbWVzc2FnZS1saXN0PjwvbXktbWVzc2FnZS1saXN0PlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUxpc3RDb21wb25lbnQsIE1lc3NhZ2VJbnB1dENvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG5cbn1cbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyIsImV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgZW1haWw6IHN0cmluZztcbiAgY29uc3RydWN0b3IoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgZmlyc3ROYW1lPzogc3RyaW5nLCBsYXN0TmFtZT86IHN0cmluZykge1xuICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
