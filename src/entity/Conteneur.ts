import {Entity, Column, } from 'typeorm'
import Model from './Model';
@Entity('conteneur')
export class Conteneur extends Model {
    @Column()
    product: string
    prix_achat:number
    
}