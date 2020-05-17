import { Client } from './client.model';

export class CommandeClient {
    public idCmdClient: number;
	public codeCmdClient: string;
	public dateCmdClient: Date;
	public etatCmdClient: string;
	
	public client: Client;

	constructor() {
        this.client = new Client();
    }
    
}