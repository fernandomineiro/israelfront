import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder,
    public apiService: ApiService,
    public router: Router) { }
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.apiService.login(this.registerForm.value).subscribe((response)=>{
        sessionStorage.setItem("usuario", this.registerForm.value.username);
        sessionStorage.setItem("tokenn", response.accessToken);
       // console.log(response);
       this.router.navigate(['/inicial']);
       console.log(response);
      })
      //console.log(this.registerForm.value);
     
  }
  

}
