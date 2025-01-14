import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'news', component: NewsComponent},
  {path:'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
