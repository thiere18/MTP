import {Entity, Column, } from 'typeorm'
import Model from './Model';
    enum type_client {
    gerant = "gerant",
    acheteur="acheteur",
    }
    @Entity('client')
export class Client extends Model {
    @Column()
    name: string
    @Column()
    type_client: type_client
    @Column()
    phone: string
        
    
}