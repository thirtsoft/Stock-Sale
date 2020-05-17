import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { CreateCategorieComponent } from './categorie/create-categorie/create-categorie.component';
import { CreateBoutiqueComponent } from './boutique/create-boutique/create-boutique.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { CreateApprovisionnementComponent } from './approvisionnement/create-approvisionnement/create-approvisionnement.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { CreateCommandeClientComponent } from './commande-client/create-commande-client/create-commande-client.component';
import { CreateCommandeFournisseurComponent } from './commande-fournisseur/create-commande-fournisseur/create-commande-fournisseur.component';
import { CreateDepenseComponent } from './depense/create-depense/create-depense.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { CreateFournisseurComponent } from './fournisseur/create-fournisseur/create-fournisseur.component';
import { CreateInventaireComponent } from './inventaire/create-inventaire/create-inventaire.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { CreateUtilisateurComponent } from './utilisateur/create-utilisateur/create-utilisateur.component';
import { CreateVersementComponent } from './versement/create-versement/create-versement.component';
import { RoleComponent } from './role/role.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';
import { VenteComponent } from './vente/vente.component';
import { CreateVenteComponent } from './vente/create-vente/create-vente.component';

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
    InventaireComponent,
    CreateCategorieComponent,
    CreateBoutiqueComponent,
    CreateArticleComponent,
    CreateApprovisionnementComponent,
    CreateClientComponent,
    CreateCommandeClientComponent,
    CreateCommandeFournisseurComponent,
    CreateDepenseComponent,
    CreateEmployeeComponent,
    CreateFournisseurComponent,
    CreateInventaireComponent,
    CreateStockComponent,
    CreateUtilisateurComponent,
    CreateVersementComponent,
    RoleComponent,
    CreateRoleComponent,
    VenteComponent,
    CreateVenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
