import {Entity, Column, } from 'typeorm'
import Model from './Model';
@Entity('depot')
export class Magasin extends Model {
    @Column()
    name: string
    
}