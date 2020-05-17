import { Role } from './role.model';

export class Utilisateur {
    public idUtilisateur: number;
    public lastname: string;
    public firstname: string;
    public username: string;
    public password: string;
    public actived: string;
    public photoUtilisateur: string;

    public role: Role;

    constructor() {
        this.role = new Role();
    }
    
}