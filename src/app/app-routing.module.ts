import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BootstrapTestComponent} from './bootstrap-test/bootstrap-test.component'
import {MatInputTextComponent} from './mat-input-text/mat-input-text.component'
import {MatButtonToggleComponent} from './mat-button-toggle/mat-button-toggle.component'
import {NavTabComponent} from './nav-tab/nav-tab.component';
import {AlertComponent} from './alert/alert.component';
import {MatCardComponent} from './mat-card/mat-card.component';
import {MatCheckboxComponent} from './mat-checkbox/mat-checkbox.component'
import {NavBar1Component} from './nav-bar1/nav-bar1.component';
import { BootInputComponent } from './boot-input/boot-input.component';
import {BootModalComponent} from './boot-modal/boot-modal.component';
import {NavigationTopComponent} from './navigation-top/navigation-top.component';

const routes: Routes = [
	 { path: 'bootstrap', component: BootstrapTestComponent },
  	 { path: 'material' , component: MatInputTextComponent},
	 { path: 'button-toggle' , component: MatButtonToggleComponent},
     { path: 'nav-tab' , component: NavTabComponent},
  	 { path: 'alert' , component: AlertComponent},
	 { path: 'card' , component:MatCardComponent},
	 { path: 'mat-checkbox' , component: MatCheckboxComponent},
	 { path: 'nav-bar1' , component: NavBar1Component}, 
 	 {path: 'boot-input' , component:BootInputComponent},
	 {path: 'boot-modal' , component:BootModalComponent}, 
	 {path: 'nav-top' , component:NavigationTopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
