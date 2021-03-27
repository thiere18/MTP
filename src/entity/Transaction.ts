import {Entity, Column, } from 'typeorm'
import Model from './Model';
@Entity('transaction')
export class Transaction extends Model {
    @Column()
    montant: number
    
}