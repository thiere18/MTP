import {Entity, Column, ManyToOne, } from 'typeorm'
import { Magasin } from './Magasin';
import Model from './Model';
@Entity('capital')
export class Capital extends Model {
    @Column()
    montant: number

}