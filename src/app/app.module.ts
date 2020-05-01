import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CategorieComponent } from './categorie/categorie.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ApprovisionnementComponent } from './approvisionnement/approvisionnement.component';
import { EmployeeComponent } from './employee/employee.component';
import { VersementComponent } from './versement/versement.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { StockComponent } from './stock/stock.component';
import { ClientComponent } from './client/client.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { CommandeClientComponent } from './commande-client/commande-client.component';
import { CommandeFournisseurComponent } from './commande-fournisseur/commande-fournisseur.component';
import { DepenseComponent } from './depense/depense.component';
import { InventaireComponent } from './inventaire/inventaire.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CategorieComponent,
    BoutiqueComponent,
    ApprovisionnementComponent,
    EmployeeComponent,
    VersementComponent,
    UtilisateurComponent,
    StockComponent,
    ClientComponent,
    FournisseurComponent,
    CommandeClientComponent,
    CommandeFournisseurComponent,
    DepenseComponent,
    InventaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
