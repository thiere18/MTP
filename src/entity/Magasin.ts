import {Entity, Column, OneToMany, } from 'typeorm'
import Model from './Model';
import {Caisse} from './Caisse'
import { Art_Depot } from './Art_depot';
import { Art_Magasin } from './Art_Magasin';
@Entity('magasin')
export class Magasin extends Model {
    @Column()
    name: string
 
    @OneToMany(() => Caisse, caisse => caisse.magasin)
    caisse: Caisse[];
        
    @OneToMany(() => Art_Magasin, art_magasin => art_magasin.d)
public art_magasins!: Art_Magasin[];

    
}