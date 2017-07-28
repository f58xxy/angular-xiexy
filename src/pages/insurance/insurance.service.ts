import { Injectable } from "@angular/core";

@Injectable()
export class InsuranceService{
    isLogined:boolean = false;
    insurants: Array < any > = [{
      'planId': 1,
      'planName':'意外保险',
     'name':'chenlu',
     'sex':'M',
     'age': 30,
     'period':'2071年'
    },
    {
     'planId': 2,
      'planName':'意外保险',
     'name':'kalezhang',
     'sex':'M',
     'age': 20,
     'period':'2071年'
    },
    {
     'planId': 3,
      'planName':'意外保险',
     'name':'kalezhang',
     'sex':'M',
     'age': 20,
     'period':'2071年'
    },
    {
     'planId': 4,
      'planName':'意外保险',
     'name':'kalezhang',
     'sex':'M',
     'age': 20,
     'period':'2071年'
    },
    {
     'planId': 5,
     'planName':'意外保险',
     'name':'kalezhang',
     'sex':'M',
     'age': 20,
     'period':'2071年'
    }
  ];

    constructor(){

    }

    getInsurants(){
        return this.insurants;
    }

}

