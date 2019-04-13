
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { MenuComponent } from './components/menu/menu.component';
import { JudgeComponent } from './components/judge/judge.component';
import { DevelopersComponent } from './components/developers/developers.component';


  const routes: Routes = [
    {path: "menu", component: MenuComponent},{path: "judge", component: JudgeComponent},{path: "developers", component: DevelopersComponent},
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }
