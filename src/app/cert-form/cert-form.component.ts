import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { formResponse } from '../model/formResponse';
import { UploadedFile } from '../model/uploadedFile';
import { CertServiceService } from '../service/cert-service.service';
import { studentData } from '../model/studentData';

@Component({
  selector: 'app-cert-form',
  templateUrl: './cert-form.component.html',
  styleUrls: ['./cert-form.component.css']
})
export class CertFormComponent implements OnInit {

  constructor(private certService: CertServiceService, private http: HttpClient){}



  submitted:boolean=false;

  response: formResponse;

  student: studentData;

  q1 = "إسم الطالب";
  q2 = "إسم الأب";
  q3 = "الشهرة";
  q4 = "الجنسية"
  q5 = "تاريخ الولادة";
  q6 = "مكان الولادة";
  q7 = "بلد الولادة"
  q8 = "الجنس";
  q9 = "رقم الهاتف";
  q10 = "البريد الالكتروني الخاص بالجامعة ";
  q18 =  " البريد الالكتروني الشخصي";
  q11 = "رقم جواز سفر"; // only for foreingers

  q12 = "علامات مصدقة";
  q13 = "هوية أو إخراج قيد(جديد) أو جواز سفر صالح";
  q14 = "شهادة مصدقة (اذا كنت محولا من جامعة أخرى يجب ارفاق الدرجات أيضا) "
  q15 = "ثانوية عامة أو ما يعادلها مصدقة (اذا من خارج لبنان, يجب ان تكون مصدقة و معادلة و لم يمر على تاريخ اصدارها اكثر من سنة)  ";
  q16 = "بيان من الامن العام دخول وخروج لغير اللبنانيين و الفلسطينيين";
  q17 = "صورة عن الإقامة أيام الدراسة لغير اللبنانيين و الفلسطينيين"


 // place of birth
  selectedOption1: any 
  savedOption1: any;

 // country of birth
  selectedOption2: any 
  savedOption2: any;

  // phone
  selectedOption3: any 
  savedOption3: any;

  // passport number
  selectedOption4: any 
  savedOption4: any;

  // personal email 
  selectedOption5: any 
  savedOption5: any;



  
  noshow: boolean = false;



  //////////////// grades
  selectedFile1: UploadedFile | undefined;

  @ViewChild('fileInput1') fileInput1!: ElementRef;

  onFileSelected1(event: any) {
    const file: File = event.target.files[0];
    if (file && ( file.type === 'application/pdf')) {
      const reader = new FileReader();
      reader.onload = () => {
        const uploadedFile: UploadedFile = {
          name: file.name,
          content: reader.result as string 
        };
     
        this.selectedFile1 = uploadedFile;
  
        localStorage.setItem('selectedFile1', JSON.stringify(this.selectedFile1));

      };
      reader.readAsDataURL(file);
    }
  }

  deleteFile1() {
    localStorage.setItem('selectedFile1', null);
    const storedFile1 = localStorage.getItem('selectedFile1');
    if (storedFile1) {
      this.selectedFile1 = JSON.parse(storedFile1);
    }
    this.fileInput1.nativeElement.value = '';

  }



    ////////////// hawiye
    selectedFile2: UploadedFile | undefined;

    @ViewChild('fileInput2') fileInput2!: ElementRef;

  onFileSelected2(event: any) {
    const file: File = event.target.files[0];
    if (file && (file.type === 'application/pdf')) {
      const reader = new FileReader();
      reader.onload = () => {
        const uploadedFile: UploadedFile = {
          name: file.name,
          content: reader.result as string 
        };
        this.selectedFile2 = uploadedFile;
        localStorage.setItem('selectedFile2', JSON.stringify(this.selectedFile2));

      };
      reader.readAsDataURL(file);
    }
  }

  deleteFile2() {
    localStorage.setItem('selectedFile2', null);
    const storedFile2 = localStorage.getItem('selectedFile2');
    if (storedFile2) {
      this.selectedFile2 = JSON.parse(storedFile2);
    }
    this.fileInput2.nativeElement.value = '';

  }



   ////////////// certificate
   selectedFile3: UploadedFile | undefined;

   @ViewChild('fileInput3') fileInput3!: ElementRef;

 onFileSelected3(event: any) {
   const file: File = event.target.files[0];
   if (file && ( file.type === 'application/pdf')) {
     const reader = new FileReader();
     reader.onload = () => {
       const uploadedFile: UploadedFile = {
         name: file.name,
         content: reader.result as string 
       };
       this.selectedFile3 = uploadedFile;
       localStorage.setItem('selectedFile3', JSON.stringify(this.selectedFile3));

     };
     reader.readAsDataURL(file);
   }
 }

 deleteFile3() {
   localStorage.setItem('selectedFile3', null);
   const storedFile3 = localStorage.getItem('selectedFile3');
   if (storedFile3) {
     this.selectedFile3 = JSON.parse(storedFile3);
   }
   this.fileInput3.nativeElement.value = '';

 }



  ////////////// grade12
  selectedFile4: UploadedFile | undefined;

  @ViewChild('fileInput4') fileInput4!: ElementRef;

onFileSelected4(event: any) {
  const file: File = event.target.files[0];
  if (file && (file.type === 'application/pdf')) {
    const reader = new FileReader();
    reader.onload = () => {
      const uploadedFile: UploadedFile = {
        name: file.name,
        content: reader.result as string 
      };
      this.selectedFile4 = uploadedFile;
      localStorage.setItem('selectedFile4', JSON.stringify(this.selectedFile4));

    };
    reader.readAsDataURL(file);
  }
}

deleteFile4() {
  localStorage.setItem('selectedFile4', null);
  const storedFile4 = localStorage.getItem('selectedFile4');
  if (storedFile4) {
    this.selectedFile4 = JSON.parse(storedFile4);
  }
  this.fileInput4.nativeElement.value = '';

}


 ////////////// bayan
 selectedFile5: UploadedFile | undefined;

 @ViewChild('fileInput5') fileInput5!: ElementRef;

onFileSelected5(event: any) {
 const file: File = event.target.files[0];
 if (file && (file.type === 'application/pdf')) {
   const reader = new FileReader();
   reader.onload = () => {
     const uploadedFile: UploadedFile = {
       name: file.name,
       content: reader.result as string 
     };
     this.selectedFile5 = uploadedFile;
     localStorage.setItem('selectedFile5', JSON.stringify(this.selectedFile5));

   };
   reader.readAsDataURL(file);
 }
}

deleteFile5() {
 localStorage.setItem('selectedFile5', null);
 const storedFile5 = localStorage.getItem('selectedFile5');
 if (storedFile5) {
   this.selectedFile5 = JSON.parse(storedFile5);
 }
 this.fileInput5.nativeElement.value = '';

}



 ////////////// ikama
 selectedFile6: UploadedFile | undefined;

 @ViewChild('fileInput6') fileInput6!: ElementRef;

onFileSelected6(event: any) {
 const file: File = event.target.files[0];
 if (file && (file.type === 'application/pdf')) {
   const reader = new FileReader();
   reader.onload = () => {
     const uploadedFile: UploadedFile = {
       name: file.name,
       content: reader.result as string 
     };
     this.selectedFile6 = uploadedFile;
     localStorage.setItem('selectedFile6', JSON.stringify(this.selectedFile6));

   };
   reader.readAsDataURL(file);
 }
}

deleteFile6() {
 localStorage.setItem('selectedFile6', null);
 const storedFile6 = localStorage.getItem('selectedFile6');
 if (storedFile6) {
   this.selectedFile6 = JSON.parse(storedFile6);
 }
 this.fileInput6.nativeElement.value = '';

}









 




ngOnInit() {

  
  this.student = {
    fullName: this.certService.getSavedStudentName(),
    StudentID: this.certService.getSavedStudentID(),
    

  };


 
 // save student response of survey (if changed)
  this.savedOption1 = sessionStorage.getItem('selectedOption1');

  if (this.savedOption1) {
    this.selectedOption1 = this.savedOption1;
    this.saveSelection1(this.selectedOption1);

  }

  this.savedOption2 = sessionStorage.getItem('selectedOption2');

  if (this.savedOption2) {
    this.selectedOption2 = this.savedOption2;
    this.saveSelection2(this.selectedOption2);
    
  }


  this.savedOption3 = sessionStorage.getItem('selectedOption3');

  if (this.savedOption3) {
    this.selectedOption3 = this.savedOption3;
    this.saveSelection3(this.selectedOption3);
  
  }

  this.savedOption4 = sessionStorage.getItem('selectedOption4');

  if (this.savedOption4) {
    this.selectedOption4 = this.savedOption4;
    this.saveSelection4(this.selectedOption4);
   
  }

  this.savedOption5 = sessionStorage.getItem('selectedOption5');

  if (this.savedOption5) {
    this.selectedOption5 = this.savedOption5;
    this.saveSelection5(this.selectedOption5);
   
  }




  const storedFile1 = localStorage.getItem('selectedFile1');
  if (storedFile1) {
    this.selectedFile1 = JSON.parse(storedFile1);
  }

  const storedFile2 = localStorage.getItem('selectedFile2');
  if (storedFile2) {
    this.selectedFile2 = JSON.parse(storedFile2);
  }

  const storedFile3 = localStorage.getItem('selectedFile3');
  if (storedFile3) {
    this.selectedFile3 = JSON.parse(storedFile3);
  }

  const storedFile4 = localStorage.getItem('selectedFile4');
  if (storedFile4) {
    this.selectedFile4 = JSON.parse(storedFile4);
  }

  const storedFile5 = localStorage.getItem('selectedFile5');
  if (storedFile5) {
    this.selectedFile5 = JSON.parse(storedFile5);
  }

  const storedFile6 = localStorage.getItem('selectedFile6');
  if (storedFile6) {
    this.selectedFile6 = JSON.parse(storedFile6);
  }










}





// save student response of survey (if refreshed or traversed from page to page)
saveSelection1(newValue: string) {
  this.selectedOption1 = newValue;
  sessionStorage.setItem('selectedOption1', this.selectedOption1);
}

saveSelection2(newValue: string) {
  this.selectedOption2 = newValue;
  sessionStorage.setItem('selectedOption2', this.selectedOption2);
}

saveSelection3(newValue: string) {
  this.selectedOption3 = newValue;
  sessionStorage.setItem('selectedOption3', this.selectedOption3);
}
saveSelection4(newValue: string) {
  this.selectedOption4 = newValue;
  sessionStorage.setItem('selectedOption4', this.selectedOption4);
}
saveSelection5(newValue: string) {
  this.selectedOption5 = newValue;
  sessionStorage.setItem('selectedOption5', this.selectedOption5);
}








  // submit student response and redirect to iConnect once done
  onSubmit(User: {
     studentName: string,
    radios1: string,
    studentPhoneCode: string,
    studentPhone: string,
    studentEmail: string,
    studentPlaceBirth: string,
    studentDateBirth: string,
    completePhone: string, 
    personalPhoto: string,
    hawiye: string,

  }){
    this.submitted = true;
   
    this.certService.onSubmit(User);


    setTimeout(() => {
      window.location.href = 'https://icas.bau.edu.lb:8443/cas/login?service=https://mis.bau.edu.lb/web/v12/iconnectv12/cas/sso.aspx';
    }, 5000); 

  }






}
