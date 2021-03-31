import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ArchwizardModule } from 'angular-archwizard';
import { HttpClientModule } from '@angular/common/http';
//RUTAS
import { app_routing } from "./app.routes";       
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
//SERVICES
import {TixsService} from './services/tixs.service';
import {ProductInfoService} from './services/product-info.service';
import {CarService} from './services/car.service';
import {DataApiService} from './services/data-api.service';
import {ScrollTopService} from './services/scroll-top.service';
import {UserWService} from './services/user-w.service';
import {IpbucketService} from './services/ipbucket.service';
//ANIMATIONS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//MATERIAL
//import { MaterialModule } from './material';
import {MatButtonModule, MatCheckboxModule,MatTabsModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';


import { FilePickerModule } from  '../assets/file-picker/src/public_api';
//COMPONENTS
import { TestappComponent } from './components/testapp/testapp.component';
import { FruitfooterComponent } from './components/fruitfooter/fruitfooter.component';
import { FruitcestaComponent } from './components/fruitcesta/fruitcesta.component';
import { FruitbannerComponent } from './components/fruitbanner/fruitbanner.component';
import { FruitbannerboxComponent } from './components/fruitbannerbox/fruitbannerbox.component';
import { FruitproductsComponent } from './components/fruitproducts/fruitproducts.component';
import { FruittopbarComponent } from './components/fruittopbar/fruittopbar.component';
import { Component, Inject} from '@angular/core';
import { FruitcartComponent } from './components/fruitcart/fruitcart.component';
import { PagoComponent } from './components/pago/pago.component';
import { techosytabiquestopComponent } from './components/techosytabiquestop/techosytabiquestop.component';
import { techosytabiquessliderComponent } from './components/techosytabiquesslider/techosytabiquesslider.component';
import { techosytabiquesmostwantedComponent } from './components/techosytabiquesmostwanted/techosytabiquesmostwanted.component';
import { techosytabiquesbannerComponent } from './components/techosytabiquesbanner/techosytabiquesbanner.component';
import { techosytabiquesbestsellerComponent } from './components/techosytabiquesbestseller/techosytabiquesbestseller.component';
import { techosytabiquesdiscountComponent } from './components/techosytabiquesdiscount/techosytabiquesdiscount.component';
import { techosytabiquesfooterComponent } from './components/techosytabiquesfooter/techosytabiquesfooter.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ShopComponent } from './components/shop/shop.component';
import { ModalComponent } from './components/modal/modal.component';
import { techosytabiquesstaticComponent } from './components/techosytabiquesstatic/techosytabiquesstatic.component';
import { techosytabiquescartComponent } from './components/techosytabiquescart/techosytabiquescart.component';
import { techosytabiquesshopComponent } from './components/techosytabiquesshop/techosytabiquesshop.component';

@NgModule({
  declarations: [
    AppComponent,
    TestappComponent,
    FruitfooterComponent,
    FruitcestaComponent,
    FruitbannerComponent,
    FruitbannerboxComponent,
    FruitproductsComponent,
    FruittopbarComponent,
    FruitcartComponent,
    PagoComponent,
    techosytabiquestopComponent,
    techosytabiquessliderComponent,
    techosytabiquesmostwantedComponent,
    techosytabiquesbannerComponent,
    techosytabiquesbestsellerComponent,
    techosytabiquesdiscountComponent,
    techosytabiquesfooterComponent,
    PrincipalComponent,
    ShopComponent,
    ModalComponent,
    techosytabiquesstaticComponent,
    techosytabiquescartComponent,
    techosytabiquesshopComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    app_routing,
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule,
    ArchwizardModule,
    CarouselModule,
    FilePickerModule,
    MatRadioModule,
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule
  ],
  entryComponents:[ ],
  providers: [
    TixsService,
    DataApiService,
    ScrollTopService,
    UserWService,
    IpbucketService,
      ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
