import {Entity, Column, ManyToOne, OneToMany, } from 'typeorm'
import Model from './Model';
import {ArticleGenerique} from './ArticleGenerique'
import { Conteneur } from './Conteneur';
@Entity()
export class Art_conteneur extends Model {
    @Column()
prix_achat: number
    @Column()
    product: string
    // @ManyToOne(() => Conteneur, conteneur => conteneur.art_conteneurs)
    // public conteneur!: Conteneur;

    // @ManyToOne(() => ArticleGenerique, articleGenerique => articleGenerique.art_conteneurs)
    // public articleGenerique!: ArticleGenerique;
}

