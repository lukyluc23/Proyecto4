import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User";
import { Tattoo_artist } from "./TattoArtist";
import { Tattoo } from "./Tatto";

@Entity("appointments")
export class Appointment extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({name: "user_id"})
    userId!: number;
  
    @Column({name: "artist_id"})
    artistId!: number;
  
    @Column({name: "tattoo_id"})
    tattooId!: number;
  
    @Column({name: "date"})
    date!: Date;
  
    @Column({name: "status"})
    status!: boolean;
  
    @Column({name: "created"})
    createdAt!: Date;
  
    @Column({name: "updated"})
    updatedAt!: Date;
  
    @ManyToOne(() => User, user => user.appointments)
    @JoinColumn({ name: "user_id"})
    user!: User;

    @ManyToOne(() => Tattoo_artist, tattoo_artist => tattoo_artist.appointments)
    @JoinColumn({ name: "artist_id"})
    tattoo_artist!: Tattoo_artist;

    @ManyToOne(() => Tattoo, tattoo => tattoo.appointments)
    @JoinColumn({ name: "tattoo_id"})
    tattoo!: Tattoo;
  }
