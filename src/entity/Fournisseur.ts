import { Column, Entity } from "typeorm";
import Model from "./Model";
enum type_four {
    Locale = "locale",
    Etranger="etranger",
    }
@Entity('Fournisseur')

export class Fournisseur extends Model{
    @Column()
    name: string
    @Column()
    type_fournisseur: type_four
}