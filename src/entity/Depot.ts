import {Entity, Column, OneToMany, } from 'typeorm'
import { Art_Depot } from './Art_depot';
import Model from './Model';
@Entity('depot')
export class Depot extends Model {
    @Column()
    name: string
    @OneToMany(() => Art_Depot, art_depot => art_depot.depot)
    public art_depots!: Art_Depot[];
    
}
