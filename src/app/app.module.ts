import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToogleBarComponent } from './components/toogle-bar/toogle-bar.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { KeysComponent } from './components/keys/keys.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    ToogleBarComponent,
    MainScreenComponent,
    KeysComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
