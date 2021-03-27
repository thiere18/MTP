import {Entity, Column, } from 'typeorm'
import Model from './Model';
@Entity('category')
export class Category extends Model {
    @Column()
    name: string
    
}