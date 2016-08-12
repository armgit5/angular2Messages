import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `
    <div class="row">
       <section class="col-md-8 col-md-offset-2">
         <article class="panel panel-default">
           <div class="panel-body">
             {{message.content}}
           </div>
           <footer class="panel-footer">
            <div class="author">
              {{message.author}}
            </div>
            <div class="config">
              <a href="#">Edit</a>
              <a href="#">Delete</a>
            </div>
           </footer>
         </article>
       </section>
      </div>
    `
})
export class AppComponent {
  message = {
    content: 'A message',
    author: 'Arm'
  }
}
