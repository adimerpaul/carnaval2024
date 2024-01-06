import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Dancer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: true})
    name: string;
    @Column({nullable: true})
    description: string;
    @Column({nullable: true,default: 'notFound.jpg'})
    image: string;
    @Column({type: 'decimal', precision: 10, scale: 2, nullable: true, default: 0})
    latitud: number;
    @Column({type: 'decimal', precision: 10, scale: 2, nullable: true, default: 0})
    longitud: number;
    @Column({nullable: true})
    positionSaturday: number;
    @Column({nullable: true})
    positionSunday: number;
    @Column({nullable: true})
    video: string;
    @Column({type: 'decimal', precision: 10, scale: 2, nullable: true, default: 1})
    velocity: number;
    @Column({default: 0})
    position: number
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
}
