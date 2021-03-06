import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';
import { CryptocurrencyInfoComponent } from './cryptocurrency-info/cryptocurrency-info.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptoAnalyticsComponent } from './crypto-analytics/crypto-analytics.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { InfoPageComponent } from './info-page/info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsPageComponent,
    SidebarMenuComponent,
    CryptocurrencyComponent,
    CryptocurrencyInfoComponent,
    AdditionalInfoComponent,
    CryptoAnalyticsComponent,
    InfoPageComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
