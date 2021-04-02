import {Entity, Column, ManyToOne, OneToMany,  } from 'typeorm'
import Model from './Model';
import { Category} from "./Category"
import { Art_conteneur } from './Art_conteneur';
import { Art_Magasin } from './Art_Magasin';
@Entity('ArticleGenerique')
export class ArticleGenerique extends Model {
    @Column()
    name: string
    // @ManyToOne(() => Category, category => category.articleGenerique)
    // category: Category;
    // @OneToMany(() => Art_conteneur, art_conteneur => art_conteneur.articleGenerique)
    // public art_conteneurs!: Art_conteneur[];
    // @OneToMany(() => Art_Depot, art_depot => art_depot.articleGenerique)
    // public art_depots!: Art_Depot[];
    
    // @OneToMany(() => Art_Magasin, art => art.de)
    // public art_magasins!: Art_Magasin[];
}