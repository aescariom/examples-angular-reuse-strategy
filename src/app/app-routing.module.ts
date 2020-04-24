import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { ResultComponent } from './result/result.component';
import { IntroComponent } from './intro/intro.component';


const routes: Routes = [
  { path: '', component: IntroComponent},
  { path: 'filter', component: FilterComponent},
  { path: 'filter-save', component: FilterComponent},
  { path: 'result/:result', component: ResultComponent},
  { path: 'lazy-module', loadChildren: () => import('./lazy-module/lazy-module.module').then(m => m.LazyModuleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
