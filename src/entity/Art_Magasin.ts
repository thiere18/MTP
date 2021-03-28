import { Column, Entity, ManyToOne } from "typeorm";
import { ArticleGenerique } from "./ArticleGenerique";
import { Depot } from "./Depot";
import { Magasin } from "./Magasin";

import Model from "./Model";
@Entity()
export class Art_Magasin extends Model {

    @Column('int')
    quantity: number

    @ManyToOne(() => Magasin, d => d.art_magasins)
    public d!: Magasin;

    @ManyToOne(() => ArticleGenerique, de => de.art_magasins)
    public de!: ArticleGenerique;

}