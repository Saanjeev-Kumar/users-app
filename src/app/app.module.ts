
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';
import {StoreModule} from '@ngrx/store'
import {counterReducer} from './store/reducers/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';
import { NewFormComponent } from './components/new-form/new-form.component'



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CounterComponent,
    NewFormComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ ctr: counterReducer})

    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
