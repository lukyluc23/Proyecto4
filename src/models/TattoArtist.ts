import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Appointment } from "./Appointment"

@Entity("tattoo_artists")
export class Tattoo_artist extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
  
    @Column({name: "name"})
    name!: string
  
    @Column({name: "password"})
    password!: string
  
    @Column({name: "description"})
    description!: string
  
    @Column({name: "photography"})
    photography!: string
  
    @Column({name: "role"})
    role!: string;
    
    @Column({name: "create_at"})
    createdAt!: Date
    
    @Column({name: "updated_at"})
    updatedAt!: Date
    
    @OneToMany(() => Appointment, appointment => appointment.tattoo_artist)
    appointments!: Appointment[];
  }