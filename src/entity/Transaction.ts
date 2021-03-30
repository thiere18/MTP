import {Entity, Column, ManyToOne, } from 'typeorm'
import Model from './Model';
import { TypeTransaction } from './TypeTransaction';
enum flux{
    Entrant = "Entrant",
    Sortant="Sortant"
}
@Entity('transaction')
export class Transaction extends Model {
    @Column()
    montant: number
    @Column()
    flux: flux 
    @ManyToOne(() => TypeTransaction, type => type.transaction)
    type: TypeTransaction
}