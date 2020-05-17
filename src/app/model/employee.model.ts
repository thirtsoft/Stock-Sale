import { Boutique } from './boutique.model';

export class Employee {
    public id: number;
	public nomEmp: string;
    public prenomEmp:string;
    public cniEmp: string;
    public dateEmbauche: Date;
    public Salaire: number;
    public adressEmp: string;
	
    public boutique: Boutique;

    constructor() {
        this.boutique = new Boutique();
    }

}