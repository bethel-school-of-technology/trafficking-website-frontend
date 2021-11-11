import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  /* example to go with html in this component from https://angular.io/guide/reactive-forms
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required~for the fields we want to be required),
    lastName: new FormControl(''),
  });
   */

  constructor() { }

  /* example from https://angular.io/guide/reactive-forms 
  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}*/

  ngOnInit(): void {
  }

}
