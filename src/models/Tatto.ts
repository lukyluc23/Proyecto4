import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Appointment } from "./Appointment";

@Entity("tattoos")
export class Tattoo extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({name: "work_type"})
    workType!: string;
  
    @Column({name: "name"})
    name!: string;
  
    @Column({name: "description"})
    description!: string;
  
    @Column({name: "photo"})
    photo!: string;
  
    @Column({name: "price"})
    price!: number;
  
    @Column({name: "created_at"})
    createdAtt!: Date;
  
    @Column({name: "updated_at"})
    updatedAt!: Date;
  
    @OneToMany(() => Appointment, appointment => appointment.tattoo)
    appointments!: Appointment[];
  }
  