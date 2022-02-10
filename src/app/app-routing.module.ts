import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferteComponent } from './Table/offerte/offerte.component';
import { UserComponent } from './Table/user/user.component';



const routes: Routes = [
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "offerte",
    component: OfferteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule { }
