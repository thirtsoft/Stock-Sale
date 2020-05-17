import { Article } from './article.model';
export class Stock {
    public idStock: number;
	public refStock: string;
	public dateStock: Date;

	public article: Article;

	constructor() {
        this.article = new Article();
    }
}