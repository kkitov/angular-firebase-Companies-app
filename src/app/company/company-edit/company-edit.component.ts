import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { CompanyService } from '../../company/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Company } from '../../company';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  isNewCompany: boolean;
  companyKey: string;
  company$: FirebaseObjectObservable<any>;
  name :string = '';

  constructor(
    private router:Router,
    private activatedRouter: ActivatedRoute,
    private companyService:CompanyService) {
   
   }

  ngOnInit() {
    this.companyKey = this.activatedRouter.snapshot.params['id'];
    this.isNewCompany = this.companyKey ==='new';
    !this.isNewCompany ? this.getCompany() : this.company$ = Observable.of({}) as FirebaseObjectObservable<Company>
    
  }
  getCompany(){
    this.company$ = this.companyService.getCompany(this.companyKey);
  }
  saveCompany(company){
    this.companyService.saveCompany(company);
  }
  editCompany(company){
    this.companyService.editCompany(company);
  }
  removeCompany(company){
    this.companyService.removeCompany(company);
  }
}
