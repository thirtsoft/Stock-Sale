import { Article } from './article.model';
export class Approvisionnement {
    public idApprovisionnement: number;
	public codeApp: string;
	
	public article: Article;

	constructor() {
        this.article = new Article();
    }
	
}