import {Entity, Column, ManyToOne,  } from 'typeorm'
import Model from './Model';
import { Category} from "./Category"
@Entity('ArticleGenerique')
export class ArticleGenerique extends Model {
    @Column()
    name: string
    @ManyToOne(() => Category, category => category.articleGenerique)
    category: Category;
}