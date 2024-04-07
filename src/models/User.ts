import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Appointment } from "./Appointment";

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!:number

    @Column({ name: "username"})
    userName!: string
    @Column({ name: "email"})
    email!: string;
    @Column({ name: "password"})
    password!: string

    @Column({ name: "phone_number"})
    phoneNumber!: number

    @Column({name: "role"})
    role!: string;


    @Column({ name: "is_active"})
    isActive!: boolean

    @Column({name: "created_at"})
    createdAt!: Date;
  
    @Column({name: "updated_at"})
    updatedAt!: Date;

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments!: Appointment[];

}
