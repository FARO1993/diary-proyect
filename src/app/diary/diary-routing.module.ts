import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'bienvenida',
                component: BienvenidaComponent
            },
            {
                path: 'bienvenida/history',
                component: HistoryComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild( routes )
      ],
      exports: [
        RouterModule
      ]
})
export class DiaryRoutingModule { }