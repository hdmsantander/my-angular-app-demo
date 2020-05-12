import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    InfoComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
