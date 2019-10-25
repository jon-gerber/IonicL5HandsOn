import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'table-of-contents', loadChildren: './pages/table-of-contents/table-of-contents.module#TableOfContentsPageModule' },
  { path: 'chapter1', loadChildren: './pages/chapter1/chapter1.module#Chapter1PageModule' },
  { path: 'chapter2', loadChildren: './pages/chapter2/chapter2.module#Chapter2PageModule' },
  { path: 'chapter3', loadChildren: './pages/chapter3/chapter3.module#Chapter3PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
