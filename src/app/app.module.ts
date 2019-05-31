import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [ //added - matters what order these are in to be viewed - want to mae sure empty then ordered then wildcard path at bottom
  { path: "", redirectTo: "/home", pathMatch: "full" }, //how are url will be parsed
  { path: "profile", component: ProfileComponent },
  { path: "edit", component: EditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), //added
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
