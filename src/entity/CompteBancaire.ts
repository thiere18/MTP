import {Entity, Column, } from 'typeorm'
import Model from './Model';
@Entity('compte')
export class CompteBancaire extends Model {
    @Column()
    name: string
    
}