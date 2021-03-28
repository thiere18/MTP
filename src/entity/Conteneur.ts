import {Entity, Column, OneToMany, } from 'typeorm'
import { Art_conteneur } from './Art_conteneur';
import Model from './Model';
@Entity('conteneur')
export class Conteneur extends Model {
    @Column()
    product: string
    prix_achat:number
    
    @OneToMany(() => Art_conteneur, art_conteneur => art_conteneur.conteneur)
public art_conteneurs!: Art_conteneur[];

}