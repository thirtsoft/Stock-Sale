import { Categorie } from './categorie.model';

export class Article {
    public idArticle: number;
	public codeArticle: string;
	public articleName: string;
	public quantite: number;
	public prixUnitaire: number;
    public photoArticle: string;
    
	public categorie: Categorie;
	
	constructor() {
        this.categorie = new Categorie();
    }

}