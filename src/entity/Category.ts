import {Entity, Column, ManyToOne, OneToMany, } from 'typeorm'
import Model from './Model';
import {ArticleGenerique} from './ArticleGenerique'
@Entity('category')
export class Category extends Model {
    @Column()
    name: string
  
    // @OneToMany(() => ArticleGenerique, articleGenerique => articleGenerique.category)
    // articleGenerique: ArticleGenerique[];

}