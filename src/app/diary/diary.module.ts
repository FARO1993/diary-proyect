import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { HomeComponent } from './home/home.component';
import { DiaryRoutingModule } from './diary-routing.module';
import { HistoryComponent } from './history/history.component';



@NgModule({
  declarations: [
    BienvenidaComponent,
    HomeComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    DiaryRoutingModule
  ]
})
export class DiaryModule { }
