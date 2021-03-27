import {Entity, Column, } from 'typeorm'
import Model from './Model';
@Entity('magasin')
export class Magasin extends Model {
    @Column()
    name: string
    
}