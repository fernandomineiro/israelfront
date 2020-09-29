import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkdiario',
  templateUrl: './checkdiario.component.html',
  styleUrls: ['./checkdiario.component.css']
})
export class CheckdiarioComponent implements OnInit {

  constructor(
    public apiService: ApiService,
    public router: Router
  ) { }
  

  ngOnInit(): void {
  }

  submitForm() {
    let nome = 'fernando';
    this.apiService.chekin(nome).subscribe((response) => {
      console.log(response);
    });
  }
}
