import { Component } from '@angular/core';
import { ajax } from "rxjs/ajax";
import { map, catchError, observeOn } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-users-app';

// link="https://api.github.com/users?per_page=5"
// obs$ = ajax.getJSON(this.link).pipe(
//   map(userResponse =>
//     console.log("users: ", userResponse)),
//   catchError(error => {
//     console.log("error: ", error);
//     return of(error);
//   })

// );
// obs=this.obs$.subscribe(arg => console.log( arg));

}
