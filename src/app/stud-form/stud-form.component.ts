import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stud-form',
  templateUrl: './stud-form.component.html',
  styleUrls: ['./stud-form.component.css']
})
export class StudFormComponent implements OnInit {
studForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.studForm=new FormGroup({
      'name':new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'surname':new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'code':new FormControl(null, [this.codeValid.bind(this)])
    });
  }

  onSubmit(){
    console.log(this.studForm);
    
  }

  codeValid(control:FormControl){
    console.log(control);
    if(control.value%2 !=0){
      return{
        noSuchCode: true,
        message: `Kodas "${control.value}" yra neteisingas`
      };

    }
    return null
  }

}
