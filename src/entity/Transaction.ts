import {Entity, Column, ManyToOne, } from 'typeorm'
import Model from './Model';
import { TypeTransaction } from './TypeTransaction';

@Entity('transaction')
export class Transaction extends Model {
    @Column()
    montant: number

    // @ManyToOne(() => TypeTransaction, type => type.transaction)
    // type: TypeTransaction
}