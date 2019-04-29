import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'podcast', pathMatch: 'full' },
  { path: 'podcast', loadChildren: './pages/podcast/podcast.module#PodcastPageModule' },
  { path: 'podcast/:id', loadChildren: './pages/podcast-player/podcast-player.module#PodcastPlayerPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
