import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('Matriz_BI') // Nombre de tu tabla en la base de datos
export class MatrizBI {
  @PrimaryGeneratedColumn() // Para SQL Server, esto se mapea a IDENTITY(1,1)
  ID: number;

  @Column({ length: 255, nullable: false })
  tipo: string;

  @Column({ length: 255, nullable: false })
  atributo: string;

  @Column({ length: 255, nullable: false })
  factor_causal: string;

  @Column({ length: 255, nullable: false })
  referencia: string;

  @Column({ length: 255, nullable: false }) // Asegúrate de que esta columna exista en tu BD y sea NOT NULL
  cliente: string;

  @CreateDateColumn({ type: 'date', default: () => 'GETDATE()', nullable: false })
  fecha_creacion: Date;
}