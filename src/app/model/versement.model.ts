import { Boutique } from './boutique.model';
import { Employee } from './employee.model';

export class Versement {
    public idVersement: number;
    public codeVersement: string;
    public montantVersement: number;
    public factureVersment: string;
    public dateVersement: Date;

	public boutique: Boutique;
	
	public employee: Employee;
    
}