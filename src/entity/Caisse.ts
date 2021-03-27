import {Entity, Column, } from 'typeorm'
import Model from './Model';
@Entity('caisse')
export class Magasin extends Model {
    @Column()
    name: string
    
}