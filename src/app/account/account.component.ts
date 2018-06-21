import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountForm;

  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.accountForm = formbuilder.group({
      usernameForm: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(1)]]
    });
  }

  ngOnInit() {
    if (localStorage.getItem('isReload')) {
      localStorage.removeItem('isReload');
      location.reload();
    }
  }

  createToDoLisit(form: NgForm) {
    const username: string = form.controls['usernameForm'].value;
    localStorage.setItem('username', username);
    this.router.navigate([username + '/boards']);
  }

}
