import {Entity, Column, } from 'typeorm'
import Model from './Model';
@Entity('dette')
export class Dette extends Model {
    @Column()
    montant: string
    @Column()
    status: boolean
    @Column()
    avance: number
    @Column()
    fin: Date
        
}