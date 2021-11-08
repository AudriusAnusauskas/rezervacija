import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.css']
})
export class RezervacijaComponent implements OnInit {
  rezForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.rezForm=new FormGroup({
      'name':new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'age':new FormControl(null, [Validators.required]),
      'type':new FormControl("admin", [this.userTypeValidation.bind(this)])
    });
  }
  userTypeValidation(control:FormControl){
const types=['admin', 'reader', 'writer'];

if(types.indexOf(control.value)==-1){
  return{
    'typeNotExist':true
  }

}
return null

  }

ageValidatorAsync(control:FormControl){
  const promise = new Promise<any>((resolve,reject)=>{
    setTimeout(()=>{
      if(+control.value>18 && +control.value<30){
        resolve(null);
      }else{
        resolve({'ageInvalid':true});
      }
    }, 2000)
  });
  return promise
}



  onSubmit(){
    console.log(this.rezForm);
    
  }


}
