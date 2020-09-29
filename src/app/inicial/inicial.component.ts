import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  resposta:any;
  constructor(
    public apiService: ApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.resposta = "";
  }

  submitForm() {
    let nome = sessionStorage.getItem("usuario");
    this.apiService.chekin(nome).subscribe((response) => {
      if(response.resposta == "Já possui"){
        this.resposta = "sim";
      }else{
        this.resposta = "nao";
      }
      console.log(response.resposta);
    });
  }

}
