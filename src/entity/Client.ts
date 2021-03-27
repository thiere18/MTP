import {Entity, Column, } from 'typeorm'
import Model from './Model';
@Entity('client')
export class Client extends Model {
    @Column()
    name: string
    @Column()
    phone: string
    
}