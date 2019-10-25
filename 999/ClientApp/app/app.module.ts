import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
	{ path: '', component: HomePageComponent },
	
];
@NgModule({
	imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
	declarations: [AppComponent, HomePageComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }