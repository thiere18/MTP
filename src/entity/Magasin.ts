import {Entity, Column, OneToMany, } from 'typeorm'
import Model from './Model';
import {Caisse} from './Caisse'
@Entity('magasin')
export class Magasin extends Model {
    @Column()
    name: string
 
    @OneToMany(() => Caisse, caisse => caisse.magasin)
    caisse: Caisse[];
}