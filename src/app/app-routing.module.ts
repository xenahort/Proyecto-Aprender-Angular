import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { UserDetailComponentComponent } from './user-detail-component/user-detail-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { ServicesListComponentComponent } from './services-list-component/services-list-component.component';

const appRoutes: Routes = [
  { path: 'users-list',
    component: UserListComponentComponent
  },
  { path: 'user/:id',
    component: UserDetailComponentComponent
  },
  { path: 'services-list',
    component: ServicesListComponentComponent
  },
  { path: '',
    component: WelcomeComponentComponent
  },
  { path: '**',
    component: PageNotFoundComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
