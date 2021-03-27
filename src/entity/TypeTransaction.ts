import {Entity, Column, } from 'typeorm'
import Model from './Model';
enum flux{
    Entrant = "Entrant",
    Sortant="Sortant"
}
@Entity('type_transaction')

export class TypeTransaction extends Model {
    @Column()
    name: string
    @Column()
    flux: flux 
}