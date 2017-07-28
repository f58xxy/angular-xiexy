import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { InsuranceService } from '../insurance.service'

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-insurant-edit',
  templateUrl: './insurant-edit.component.html',
  styleUrls: ['./insurant-edit.component.scss']
})
export class InsurantEditComponent implements OnInit {
insurant:any = {};
planId:any = "";
isNew:boolean = false;
 constructor(private route: ActivatedRoute,
  private insuranceServ:InsuranceService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
 // Subscribe Declaration
  getUserSubscribe:any;

  save(){
    this.insuranceServ.insurants.push(this.insurant)
    this.location.back();
  }
  ngOnInit() {
    this.getUserSubscribe = this.route.params.subscribe(params=>{
      this.getInsurant(params['planid']).then(insurant=>{
      console.log(insurant)
      this.planId = insurant.planId;
      this.insurant = insurant
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getUserSubscribe.unsubscribe();
  }

  getInsurant(id: any): Promise<any> {
 
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let insurant = {name:""}
        this.isNew = true;
        resolve(insurant)
      }
      let insurant = this.insuranceServ.insurants.find(item=>item.planId == id)
      if(insurant){
        resolve(insurant)
      }else{
        reject("insurant not found")
      }
    })
    return p
}

}
