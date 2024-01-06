import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Dancer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: true})
    name: string;
    @Column({nullable: true, default: 'El Carnaval de Oruro es una festividad religiosa, folclórica y cultural de intangibilidad en la ciudad de Oruro, así como la máxima representación de los carnavales en Bolivia con su danza principal la Diablada desde sus orígenes, que llegó a constituirse en un modelo de capaz de generar manifestaciones culturales parecidas en otros espacios geográficos. Declarado como “Obra Maestra del Patrimonio Oral e Intangible de la Humanidad” (Unesco) el año 2001. A lo largo del carnaval participan más de 48 conjuntos folklóricos que son distribuidos en 18 especialidades de danzas que reúnen de distintas partes de Bolivia y que realizan su peregrinación hacia el Santuario del Socavón cada sábado de carnaval en la tradicional “Entrada”.'})
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
