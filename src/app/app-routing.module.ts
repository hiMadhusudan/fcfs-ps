import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FcfsComponent } from './fcfs/fcfs.component';
import { PpsComponent } from './pps/pps.component';
import { NppsComponent } from './npps/npps.component';

const routes: Routes = [
  { path: 'fcfs', component: FcfsComponent},
  { path: 'pps', component: PpsComponent},
  { path: 'npps', component: NppsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
