import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderEntity } from '../order';
import { ShippingDetailsEntity } from './shippingDetails.entity';
@Entity('shippingInformations')
export class ShippingInformationEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public type: string;

  @Column({
    type: 'float',
  })
  public cost: number;

  @OneToOne(() => OrderEntity, (order) => order.shippingInformation)
  public order: OrderEntity;

  @OneToOne(
    () => ShippingDetailsEntity,
    (shipping) => shipping.shippingInformation,
  )
  public shippingDetails: ShippingDetailsEntity;
}
