import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "diary",
    loadChildren: () => import('./diary/diary.module').then(m => m.DiaryModule)
  },
  {
    path: '**',
    redirectTo: 'diary'  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
