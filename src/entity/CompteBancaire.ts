import {Entity, Column, } from 'typeorm'
import Model from './Model';
@Entity('compteBancaire')
export class CompteBancaire extends Model {
    @Column()
    name: string
    
}