import { BaseEntity, BeforeInsert, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";
export default abstract class Model extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'uuid', })
    uuid: string
    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date
    @Column({ type: 'boolean', default: false})
    isDeleted: boolean

    @BeforeInsert()
    createUuid() {
        this.uuid =uuid()
    }
    toJSON() {
        return {...this,id:undefined}
    }
}