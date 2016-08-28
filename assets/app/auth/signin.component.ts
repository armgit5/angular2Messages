import {Component, OnInit} from "angular2/core";
import {FormBuilder, ControlGroup, Validators, Control} from "angular2/common";
import {AuthService} from "./auth.service";
import {User} from "./user";
import {Router} from "angular2/router";

@Component({
    selector: 'my-signin',
    template: `
    <section class="col-md-8 col-md-offset-2">
      <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="email">Email</label>
          <input [ngFormControl]="myForm.find('email')" type="email" id="email" class="form-control">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input [ngFormControl]="myForm.find('password')" type="password" id="password" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign up</button>
      </form>
    </section>
    `
})

export class SigninComponent {

    myForm: ControlGroup;

    constructor(private _fb: FormBuilder, private _authService: AuthService, 
                private _router: Router) {
         this.myForm = this._fb.group({
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.required],
        });
    } 

    onSubmit() {
       const user = new User(this.myForm.value.email, this.myForm.value.password);
       this._authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this._router.navigateByUrl('/');
                },
                error => console.error(error)
            );
        
    }   

  
    private isEmail(control: Control): {[s: string]: boolean} {
        if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
            return {invalidMail: true};
        }
    }
}