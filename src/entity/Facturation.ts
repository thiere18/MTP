import { Column, Entity } from "typeorm";
import Model from "./Model";

@Entity()
export class Facturation extends Model {
    
    @Column()
    is_payed: boolean

}