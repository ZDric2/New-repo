import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'i',
    loadChildren: () => import('./i/i.module').then( m => m.IPageModule)
  },
  {
    path: 'am',
    loadChildren: () => import('./am/am.module').then( m => m.AmPageModule)
  },
  {
    path: 'zed',
    loadChildren: () => import('./zed/zed.module').then( m => m.ZedPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'h',
    loadChildren: () => import('./h/h.module').then( m => m.HPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
