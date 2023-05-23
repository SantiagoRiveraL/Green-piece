import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderEntity } from './order.entity';
@Entity('orderDetails')
export class OrderDetailsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  /*@Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public productID: string;*/

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public productName: string;

  @Column({
    type: 'integer',
  })
  public quantity: number;

  @Column({
    type: 'float',
  })
  public unitCost: number;

  @Column({
    type: 'float',
  })
  public subtotal: number;

  @OneToMany(() => OrderEntity, (order) => order.orderDetail)
  @JoinColumn({
    name: 'orderId',
  })
  public order: OrderEntity;
}
