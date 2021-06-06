import {Entity, Column, OneToMany, } from 'typeorm'
import { Dette } from './Dette';
import Model from './Model';
  
    @Entity('client')
export class Client extends Model {
    @Column()
    name: string
    
        
    @OneToMany(() => Dette, dette => dette.client)
    dette: Dette[];
}