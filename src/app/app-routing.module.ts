import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./hompage/hompage.module').then(m => m.HompageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
