import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {
  nome: string;

  constructor() { }

  ngOnInit() {
    /*toda vez que carregar o componente sera colocado oq esta entre ''*/
    this.nome = 'Camila Andrade'
  }

}
