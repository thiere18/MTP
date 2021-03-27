import {Entity, Column, } from 'typeorm'
import Model from './Model';
@Entity('ArticleGenerique')
export class ArticleGenerique extends Model {
    @Column()
    name: string
    
}