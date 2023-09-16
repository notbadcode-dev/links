import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoModule } from './components/logo/logo.module';
import { SessionInformationModule } from './components/session-information/session-information.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, SessionInformationModule, LogoModule],
    exports: [NavbarComponent],
})
export class NavbarModule {}
