import { Column, Entity, ManyToOne } from "typeorm";
import { ArticleGenerique } from "./ArticleGenerique";
import {Depot} from './Depot'
import Model from "./Model";
@Entity()
export class Art_Depot extends Model {

    @Column('int')
    quantity: number

    @ManyToOne(() => ArticleGenerique, articleGenerique => articleGenerique.art_depots)
    public articleGenerique!: ArticleGenerique;
    @ManyToOne(() => ArticleGenerique, art => art.art_depots)
    public art!: ArticleGenerique;
  
    @ManyToOne(() => Depot, depot => depot.art_depots)
    public depot!: Depot;
    
}