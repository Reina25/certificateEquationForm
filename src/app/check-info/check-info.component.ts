import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Md5 } from 'ts-md5';
import { CertServiceService } from '../service/cert-service.service';


@Component({
  selector: 'app-check-info',
  templateUrl: './check-info.component.html',
  styleUrls: ['./check-info.component.css']
})
export class CheckInfoComponent implements OnInit {

  md5 = new Md5();

  salt: string = "salt";

  hash: any;

  hash2: any;

  studentID: any;

  constructor(private router: Router, private route: ActivatedRoute, private certService: CertServiceService) { }


  ngOnInit() {

    // to clear any saved data for new data to come 
    window.sessionStorage.clear();

    window.localStorage.clear();
    
    this.studentID = this.certService.setStudentID(this.route.snapshot.queryParamMap.get("studentID"));


    this.hash = this.certService.setHash(this.route.snapshot.queryParamMap.get("hash"));


    const completeData: string = this.certService.getStudentID() + this.salt;


    this.md5.appendStr(completeData);

    this.hash2 = this.md5.end();


    if (this.certService.getHash() == this.hash2) {


      if (this.certService.getStudentID() == '321') {
        this.router.navigate(['/formsubmitted']);

      } else {
        this.router.navigate(['/CertificationEquation']);
      }

    } else {
      this.router.navigate(['/pagenotfound']);
    }

  }



}
