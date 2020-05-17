import { Boutique } from './boutique.model';

export class Inventaire {
    public idInventaire: number;
	public codeInventaire: string;
    public dateInventaire: Date;
    public chiffre_Depart: number;
    public chiffre_Affaire: number;
	
    public boutique: Boutique;

    constructor() {
        this.boutique = new Boutique();
    }

}