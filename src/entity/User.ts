import {Entity, Column, } from 'typeorm'
import Model from './Model';

@Entity("users")
export class User extends Model{

  @Column()
  firstname: string;

  @Column()
  lastname: string;
  
}