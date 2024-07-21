import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TachesComponent } from './taches/taches.component';
import { AddtacheComponent } from './addtache/addtache.component';

const routes: Routes = [
  { path: '', redirectTo: 'tache', pathMatch: 'full' },
  { path: 'add', component: AddtacheComponent },
  { path: 'taches', component: TachesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
