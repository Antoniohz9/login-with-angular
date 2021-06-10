import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guard/auth.guard";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./home/admin/admin.component";
import { ClientComponent } from "./home/client/client.component";
import { WelcomeComponent } from "./home/welcome/welcome.component";
const appRoutes: Routes = [
  // canActivate is for set permission of access to all children url
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'cliente', component: ClientComponent , canActivate: [AuthGuard], children: [
          //         { path: 'new', component: NewComponent },
        ] },
        { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
            //         { path: 'nuevas', component: NuevasComponent },
      ] },
    ]
  },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'home/welcome' }
];

export const routing = RouterModule.forRoot(appRoutes);
