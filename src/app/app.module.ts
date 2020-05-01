import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxModalWindowModule } from 'projects/ngx-modal-window/src/public-api';

import { AppComponent } from './app.component';
import { ModalDemoComponent } from './modal-demo.component';
import { NestedModalDemoComponent } from './nested-modal-demo.component';
import { PanelDemoComponent } from './panel-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalDemoComponent,
    NestedModalDemoComponent,
    PanelDemoComponent,
  ],
  imports: [
    BrowserModule,
    NgxModalWindowModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
