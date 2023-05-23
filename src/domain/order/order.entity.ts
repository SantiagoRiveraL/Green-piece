import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClientEntity } from '../user';
import { ShippingInformationEntity } from '../shipping';
import { OrderDetailsEntity } from './orderDetails.entity';
@Entity('users')
export class OrderEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn({ type: 'timestamp' })
  public createdDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  public shippingDate: Date;

  @Column({ type: 'varchar', nullable: true })
  public status: string;

  @ManyToOne(() => ClientEntity, (client) => client.order)
  @JoinColumn({
    name: 'clientId',
  })
  public client: ClientEntity;

  @OneToOne(
    () => ShippingInformationEntity,
    (shippingInformation) => shippingInformation.order,
  )
  @JoinColumn({
    name: 'shippingId',
  })
  public shippingInformation: ShippingInformationEntity;

  @ManyToOne(
    () => OrderDetailsEntity,
    (orderDetails) => orderDetails.order,
  )
  public orderDetail: OrderDetailsEntity;
}
