import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { analyzeFileForInjectables } from '@angular/compiler';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})

export class ProfileEditorComponent {

  profileForm = this.fb.group({
    organizationName: ['', Validators.required],
      contactName: [''],
        contact: this.fb.group({
          email: [''],
          username: [''],
          password: [''],
          businessUrl: ['']
        }),
        aliases: this.fb.array([
          this.fb.control('')
        ])
  });
  

    get aliases() {
      return this.profileForm.get('aliases') as FormArray;
    }

    constructor(private fb: FormBuilder) { }


  UpdateProfile() {
    this.profileForm.patchValue({
    });
}

  onSubmit() {
    
  }

}


