import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Servicio } from 'src/servicios/entities/servicio.entity';

@Entity('matriz_atributo')
export class MatrizAtributo {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ length: 255, nullable: false })
  tipo: string;

  @Column({ length: 255, nullable:false })
  servicio: string;

  @Column({ name: 'cliente_id', type: 'int', nullable: false })
  cliente_id: number;

  @ManyToOne(() => Servicio, (servicio) => servicio.matricesAtributo, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cliente_id', referencedColumnName: 'ID' }) // ✅ Aquí especificamos la PK correcta
  cliente: Servicio;

  @Column({ length: 255 })
  atributo: string;

  @Column({ length: 255 })
  factor_causal: string;

  @Column({ length: 255 })
  referencia: string;

  @Column({ length: 255 })
  origen: string;

  @CreateDateColumn({ type: 'date', default: () => 'GETDATE()' })
  fecha_creacion: Date;
}
