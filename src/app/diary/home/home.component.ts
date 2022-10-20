import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  in: boolean = false;
  isBuscar: boolean = false;
  isVer: boolean = false;
  viewHeart: boolean = false;
  viewP: boolean = false;
  viewContent: boolean = false;
  viewImage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  entrar(){
    this.in = true;
  }

  buscar(){
    this.isBuscar = true;
    setTimeout(() => {
      this.isVer = true;
    }, 5000);
  }

  ver(){
    this.viewHeart = true;
    setTimeout(() => {
      this.viewP = true;
    }, 2000);
    setTimeout(() => {
      this.viewContent = true;
    }, 5000);
    setTimeout(() => {
      this.viewImage = true;
    }, 8000);

  }



  

}
