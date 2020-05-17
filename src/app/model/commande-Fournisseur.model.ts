import { Fournisseur } from './fournisseur.model';

export class CommandeFournisseur {
    public idCmdFournisseur: number;
	public dateCmdFournisseur: Date;
	public etatCmdFournisseur: string;
	
	public fournisseur: Fournisseur;

	constructor() {
        this.fournisseur = new Fournisseur();
    }
    
}