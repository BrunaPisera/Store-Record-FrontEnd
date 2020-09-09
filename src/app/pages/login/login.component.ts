import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.scss']
})

export class LoginComponent implements OnInit {
   
    loginForm : FormGroup;

    constructor(private formBuilder : FormBuilder) {}


    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username : ['matheus', Validators.required],
            password: ['', Validators.required]
        })
    }


}