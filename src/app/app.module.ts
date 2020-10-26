import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputTextComponent } from './mat-input-text/mat-input-text.component';
import { BootstrapTestComponent } from './bootstrap-test/bootstrap-test.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MaterialModule} from './material-module';
import { MatButtonToggleComponent } from './mat-button-toggle/mat-button-toggle.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';
import { AlertComponent } from './alert/alert.component';
import { MatCardComponent } from './mat-card/mat-card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatCheckboxComponent } from './mat-checkbox/mat-checkbox.component';
import { NavBar1Component } from './nav-bar1/nav-bar1.component';
import { BootInputComponent } from './boot-input/boot-input.component';
import { BootModalComponent } from './boot-modal/boot-modal.component';
import { NavigationTopComponent } from './navigation-top/navigation-top.component';


@NgModule({
  declarations: [
    AppComponent,
    MatInputTextComponent,
    BootstrapTestComponent,
    MatButtonToggleComponent,
    NavTabComponent,
    AlertComponent,
    MatCardComponent,
    MatCheckboxComponent,
    NavBar1Component,
    BootInputComponent,
    BootModalComponent,
    NavigationTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	NgbModule,
    BrowserAnimationsModule,
	MaterialModule,
	FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
