import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)},
  { path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule) },
  { path: 'process', loadChildren: () => import('./process-page/process-page.module').then(m => m.ProcessPageModule) },
  { path: 'contact', loadChildren: () => import('./contact-page/contact-page.module').then(m => m.ContactPageModule) },
  { path: 'work', loadChildren: () => import('./work-page/work-page.module').then(m => m.WorkPageModule) },
  { path: 'project', loadChildren: () => import('./project-page/project-page.module').then(m => m.ProjectPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled',
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'top'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
