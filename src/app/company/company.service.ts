
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Company } from '../company';

@Injectable()
export class CompanyService {
  companies$: FirebaseListObservable<Company[]>;
  company$: FirebaseObjectObservable<Company>;

  constructor(private db:AngularFireDatabase) {
    this.company$ = this.db.object(`company`);
    this.companies$ = this.db.list(`companies`)

   }
   getCompany(companyKey:string){
    return this.db.object(`companies/${companyKey}`)
   }

  
  saveCompany(company){
    this.companies$.push(company).then(_=>console.log('success')).catch(error=>console.log(error));
  }
  editCompany(company:Company){
    this.companies$.update(company.$key,company).then(_=>console.log('success')).catch(error=>console.log(error));
  }
  removeCompany(company){
    this.company$.remove().then(_=>console.log('success')).catch(error=>console.log(error));
  }
  getCompanies(){
    return this.companies$;
  }
 
}
