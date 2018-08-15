import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {RatingComponent} from './rating/rating.component';
import {PreviewComponent} from './preview/preview.component';
import {PreresultComponent} from './preresult/preresult.component';
import {LogincompanyComponent} from './logincompany/logincompany.component';
import {RaterComponent} from './rater/rater.component';
import {MoreComponent} from './more/more.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
	{
		path: '',
		component: AppComponent,
    children:[
      {
        path: '',
        component: MainComponent
      },
      {
        path:'for-company',
        component:LogincompanyComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path:'rating',
        component:RatingComponent
      },
      {
        path:'preview',
        component:PreviewComponent
      },
      {
        path:'preresult',
        component:PreresultComponent
      },
      {
        path:"rater",
        component:RaterComponent
      },
      {
        path:"more",
        component:MoreComponent
      },
      {
        path:'property',
        loadChildren:'./property/property.module#PropertyModule'
      },
      {
        path:"**",
        redirectTo:'/property'
      },
      {
        path:"bank",
        redirectTo:'/property'
      }
    ],
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
