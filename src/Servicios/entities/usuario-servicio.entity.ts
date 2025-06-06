import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Servicio } from './servicio.entity';

@Entity('UsuarioServicio') // Nombre de tu tabla intermedia
export class UsuarioServicio {
  @PrimaryColumn({ name: 'usuario_id' })
  usuario_id: number;

  @PrimaryColumn({ name: 'servicio_id' })
  servicio_id: number;

  @ManyToOne(() => User, (usuario) => usuario.usuarioServicios, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id', referencedColumnName: 'id' }) // Ajusta 'id' si la PK de Usuarios es diferente
  usuario: User;

  // Modificado: Ahora apunta a la nueva propiedad 'usuarioServicios' en la entidad Servicio
  @ManyToOne(() => Servicio, (servicio) => servicio.usuarioServicios, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'servicio_id', referencedColumnName: 'ID' }) // Asegúrate de que 'id' es el nombre exacto de la PK en Servicio
  servicio: Servicio;
}