import { CompanyService } from './company/company.service';
import { MaterialModule } from './material';
import { AngularFireDatabase } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyListComponent } from './company/company-list/company-list.component';

import {Routes,RouterModule} from '@angular/router';

const routes:Routes = [
    { path: '',pathMatch: 'full', redirectTo: 'company-list' },
    {path: 'company-list', component: CompanyListComponent},
    {path: 'company-edit/:id', component: CompanyEditComponent},
]

const firebaseConfig = {
  apiKey: "AIzaSyCinJnxoc3UNyQKxeVKdv3lVYU9s8PlokI",
  authDomain: "angular-fire-app-2efa6.firebaseapp.com",
  databaseURL: "https://angular-fire-app-2efa6.firebaseio.com",
  projectId: "angular-fire-app-2efa6",
  storageBucket: "angular-fire-app-2efa6.appspot.com",
  messagingSenderId: "888179132967"
};

@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent,
    CompanyListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    FormsModule,
    AngularFireDatabaseModule, 
    AngularFireAuthModule, 
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    
  ],
  providers: [AngularFireDatabase,CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
