import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { CreateUtilisateurComponent } from './utilisateur/create-utilisateur/create-utilisateur.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { CreateInventaireComponent } from './inventaire/create-inventaire/create-inventaire.component';
import { CreateVersementComponent } from './versement/create-versement/create-versement.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { CreateDepenseComponent } from './depense/create-depense/create-depense.component';
import { CreateVenteComponent } from './vente/create-vente/create-vente.component';
import { CreateBoutiqueComponent } from './boutique/create-boutique/create-boutique.component';
import { CreateCommandeFournisseurComponent } from './commande-fournisseur/create-commande-fournisseur/create-commande-fournisseur.component';
import { CommandeFournisseurComponent } from './commande-fournisseur/commande-fournisseur.component';
import { CreateFournisseurComponent } from './fournisseur/create-fournisseur/create-fournisseur.component';
import { CreateCommandeClientComponent } from './commande-client/create-commande-client/create-commande-client.component';
import { CommandeClientComponent } from './commande-client/commande-client.component';
import { StockComponent } from './stock/stock.component';
import { VenteComponent } from './vente/vente.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { CreateApprovisionnementComponent } from './approvisionnement/create-approvisionnement/create-approvisionnement.component';
import { ApprovisionnementComponent } from './approvisionnement/approvisionnement.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { CreateCategorieComponent } from './categorie/create-categorie/create-categorie.component';
import { ArticleComponent } from './article/article.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import { EmployeeComponent } from './employee/employee.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { VersementComponent } from './versement/versement.component';
import { RoleComponent } from './role/role.component';
import { DepenseComponent } from './depense/depense.component';
import { ClientComponent } from './client/client.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { CategorieComponent } from './categorie/categorie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children : [
    {path: 'categorie-list', component: CategorieComponent},
    {path: 'create-categorie', component: CreateCategorieComponent},
    {path: 'edit-categorie/:id', component: CreateCategorieComponent},
    {path: 'article-list', component: ArticleComponent},
    {path: 'create-article', component: CreateArticleComponent},
    {path: 'edit-article/:id', component: CreateArticleComponent},
    {path: 'approvisionnements', component: ApprovisionnementComponent},
    {path: 'approvisionnement/new', component: CreateApprovisionnementComponent},
    {path: 'boutique-list', component: BoutiqueComponent},
    {path: 'create-boutique', component: CreateBoutiqueComponent},
    {path: 'edit-boutique/:id', component: CreateBoutiqueComponent},
    {path: 'client-list', component: ClientComponent},
    {path: 'create-client', component: CreateClientComponent},
    {path: 'edit-client/:id', component: CreateClientComponent},
    {path: 'commandeClient-list', component: CommandeClientComponent},
    {path: 'create-commandeClient', component: CreateCommandeClientComponent},
    {path: 'edit-commandeClient/:id', component: CreateCommandeClientComponent},
    {path: 'fournisseur-list', component: FournisseurComponent},
    {path: 'create-fournisseur', component: CreateFournisseurComponent},
    {path: 'edit-fournisseur/:id', component: CreateFournisseurComponent},
    {path: 'commandeFournisseur-list', component: CommandeFournisseurComponent},
    {path: 'create-commandeFournisseur', component: CreateCommandeFournisseurComponent},
    {path: 'edit-commandeFournisseur/:id', component: CreateCommandeFournisseurComponent},
    {path: 'vente-list', component: VenteComponent},
    {path: 'create-vente', component: CreateVenteComponent},
    {path: 'edit-vente/:id', component: CreateVenteComponent},
    {path: 'depense-list', component: DepenseComponent},
    {path: 'create-depense', component: CreateDepenseComponent},
    {path: 'edit-depense/:id', component: CreateDepenseComponent},
    {path: 'versement-list', component: VersementComponent},
    {path: 'create-versement', component: CreateVersementComponent},
    {path: 'edit-versement/:id', component: CreateVersementComponent},
    {path: 'stock-list', component: StockComponent},
    {path: 'create-stock', component: CreateStockComponent},
    {path: 'edit-stock/:id', component: CreateStockComponent},
    {path: 'inventaire-list', component: InventaireComponent},
    {path: 'create-inventaire', component: CreateInventaireComponent},
    {path: 'edit-inventaire/:id', component: CreateInventaireComponent},

    {path: 'employee-list', component: EmployeeComponent},
    {path: 'create-employee', component: CreateEmployeeComponent},
    {path: 'edit-employee/:id', component: CreateEmployeeComponent},
    {path: 'role-list', component: RoleComponent},
    {path: 'create-role', component: CreateRoleComponent},
    {path: 'edit-role/:id', component: CreateRoleComponent},
    {path: 'utilisateur-list', component: UtilisateurComponent},
    {path: 'create-utilisateur', component: CreateUtilisateurComponent},
    {path: 'edit-utilisateur/:id', component: CreateUtilisateurComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
