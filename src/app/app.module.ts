// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BaseRequestOptions } from '@angular/http';
import { 
  RouterModule, 
  Routes, 
  CanActivate 
} from '@angular/router';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PreviewComponent } from './preview/preview.component';
import { PartnersComponent } from './partners/partners.component';
import { ConfirmWindow } from './shared/modalWindows/confirm/ConfirmWindow';

export class DemoMaterialModule {}

enableProdMode();
// Ui components
import {
  MatDialogModule,
  MatDividerModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule,
  MatProgressBarModule,
} from '@angular/material';

import { PrivacyComponent } from './privacy/privacy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { FAQsComponent } from './faqs/faqs.component';
import { CopyrightComponent } from './copyright/copyright.component';


const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'Privacy', component: PrivacyComponent },
  { path: 'TermsOfUse', component: TermsOfUseComponent },
  { path: 'Copyright', component: CopyrightComponent },
  { path: 'FAQs', component: FAQsComponent },
  { path: '', redirectTo: '/preview', pathMatch: 'full' },
  { path: '**', redirectTo: '/preview', }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AboutComponent,
    ContactComponent,
    PreviewComponent,
    PartnersComponent,
    PrivacyComponent,
    TermsOfUseComponent,
    FAQsComponent,
    CopyrightComponent,
    ConfirmWindow
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatDividerModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  entryComponents: [ 
    ConfirmWindow
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

