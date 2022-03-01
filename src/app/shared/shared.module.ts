import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { ColorSwitcherComponent } from './color-switcher/color-switcher.component';



@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        HorizontalMenuComponent,
        ColorSwitcherComponent,
        NgbModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        PerfectScrollbarModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        HorizontalMenuComponent,
        ColorSwitcherComponent
    ],
    providers: [ ],
})
export class SharedModule { }
