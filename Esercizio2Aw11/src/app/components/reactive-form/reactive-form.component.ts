import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup | undefined;

//   constructor(private formB: FormBuilder) {}

  ngOnInit(): void {

//     this.form = this.formB.group({
//       nome: this.formB.control(null, [Validators.required]),
//       alterEgo: this.formB.control(null, [Validators.required]),
//       superPotere: this.formB.array([]),
//       nemico: this.formB.control(null, [Validators.required]),
//     });

//     this.form.valueChanges.subscribe((value) => {
//       console.log(value);
//     });

}

//   // getSportsF() {
//   //   return(this.form.get('powers') as FormArray).controls;
//   // }
//   // addSports(){
//   //   const controll = this.formB.control(null);
//   //   (this.form.get('powers') as FormArray).push(controll);

//   // }

//   submit(){
//     console.log(this.form);
//     console.log('Form correttamente inviato')
//     // this.form.reset()
//   }


}
