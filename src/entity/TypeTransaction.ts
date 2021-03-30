import {Entity, Column, OneToMany, } from 'typeorm'
import Model from './Model';
import { Transaction } from './Transaction';

@Entity('type_transaction')

export class TypeTransaction extends Model {
    @Column()
    name: string
    @OneToMany(() => Transaction, transaction => transaction.type)
    transaction: Transaction[];
}