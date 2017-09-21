import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private af:AngularFireDatabase){
    const observable = this.af.object(`connected`);
      observable.subscribe(
      next=>console.log('next',next),
      error=>console.log('error',error),
      ()=>console.log('completed')
    
    );
    

  }
}
