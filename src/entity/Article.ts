import {Entity, Column, } from 'typeorm'
import { ArticleGenerique } from './ArticleGenerique';
@Entity('article')
export class Article extends ArticleGenerique{
    @Column()
    name: string
    @Column()
    prix_achat: number
    @Column()
    frais: number
    @Column()
    prix_revient: number
    @Column()
    prix_magasin: number
    @Column()
    prix_gros: number
    @Column()
    prix_client: number

    
}