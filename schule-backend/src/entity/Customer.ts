import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    kdnr: number;

    @Column()
    benutzerName: string;

    @Column()
    tarifModell: string;
}