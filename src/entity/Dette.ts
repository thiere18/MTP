import {Entity, Column, } from 'typeorm'
import Model from './Model';
@Entity('dette')
export class Dette extends Model {
    @Column()
    product: string
    prix_achat:number
    
}