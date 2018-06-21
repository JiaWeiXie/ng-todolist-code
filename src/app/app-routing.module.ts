import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  {path: 'account', component: AccountComponent},
  {path: ':username/boards', component: BoardComponent},
  { path: '',
    redirectTo: '/account',
    pathMatch: 'full'
  },
  { path: '**', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
