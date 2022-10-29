import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MainComponent } from './main/main.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PortalComponent } from './portal/portal.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TableauComponent } from './tableau/tableau.component';

const routes: Routes = [
{
  path: 'Nosotros', component: NosotrosComponent
},
{
  path: 'Servicios', component: ServiciosComponent
},
{
  path: 'Tableau', component: TableauComponent
},
{
  path: 'Portal', component: PortalComponent
},
{
  path: 'Blog', component: BlogComponent
},
{
  path: 'Contacto', component: ContactoComponent
},
{
   path: '', component: MainComponent
},
{
  path:'**', redirectTo:'/', pathMatch:'full'
},
// {
//   path: 'Nosotros', component: NosotrosComponent
// },
// {
//   path: 'Nosotros', component: NosotrosComponent
// },
// {
//   path: 'Nosotros', component: NosotrosComponent
// },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
