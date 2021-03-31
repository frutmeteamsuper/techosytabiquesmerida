import {RouterModule,Routes} from '@angular/router';
import {
	TestappComponent,
	FruitproductsComponent,
	FruitbannerComponent,
	FruitbannerboxComponent,
	FruitcestaComponent,
	FruitfooterComponent,
	FruittopbarComponent,
	FruitcartComponent,
	PagoComponent,
	PrincipalComponent,
	techosytabiquesbannerComponent,
	techosytabiquesbestsellerComponent,
	techosytabiquesdiscountComponent,
	techosytabiquesfooterComponent,
	techosytabiquesmostwantedComponent,
	techosytabiquessliderComponent,
	techosytabiquestopComponent,
	techosytabiquesshopComponent

	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:PrincipalComponent},
	{path:'techosytabiquesbanner',component:techosytabiquesbannerComponent},
	{path:'techosytabiquesbestseller',component:techosytabiquesbestsellerComponent},
	{path:'techosytabiquesdiscount',component:techosytabiquesdiscountComponent},
	{path:'techosytabiquesfooter',component:techosytabiquesfooterComponent},
	{path:'techosytabiquesmostwanted',component:techosytabiquesmostwantedComponent},
	{path:'techosytabiquesslider',component:techosytabiquessliderComponent},
	{path:'techosytabiquestop',component:techosytabiquestopComponent},
	{path:'techosytabiquesshop',component:techosytabiquesshopComponent},
	{path:'fruittopbar',component:FruittopbarComponent},
	{path:'fruitproducts',component:FruitproductsComponent},
	{path:'fruitbanner',component:FruitbannerComponent},
	{path:'fruitbannerbox',component:FruitbannerboxComponent},
	{path:'fruitcesta',component:FruitcestaComponent},
	{path:'fruitfooter',component:FruitfooterComponent},
	{path:'fruitcart',component:FruitcartComponent},
	{path:'pago',component:PagoComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

