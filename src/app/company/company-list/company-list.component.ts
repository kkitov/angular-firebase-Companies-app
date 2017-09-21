import { Company } from './../../company';
import { FirebaseListObservable } from 'angularfire2/database';
import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies$: FirebaseListObservable<Company[]>;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }
  getCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

}
