import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FreeresourcesComponent } from './freeresources/freeresources.component';
import { HomeComponent } from './home/home.component';
import { CoursespageComponent } from './coursespage/coursespage.component';

const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'free-resources', component: FreeresourcesComponent},
  { path: 'courses', component: CoursespageComponent}
//  { path: 'courses', component: CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
