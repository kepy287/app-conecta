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
  @PrimaryGeneratedColumn('identity')
  ID: number;

  @Column({ length: 255 })
  tipo: string;

  @Column({ length: 255 })
  servicio: string;

  @ManyToOne(() => Servicio, (servicio) => servicio.usuarioServicios, { onDelete: 'CASCADE' })
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
