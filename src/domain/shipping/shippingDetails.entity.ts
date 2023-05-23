import {
  BaseEntity,
  Column,
  Entity, JoinColumn,
  OneToMany, OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { ShippingInformationEntity } from "./shippingInformation.entity";
@Entity('shippingDetails')
export class ShippingDetailsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public address: string;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public department: string;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public city: string;

  @Column({
    type: 'integer',
  })
  public zipeCode: number;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public phoneNumber: string;

  @Column({})
  public hasAddressDetail: boolean;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public addressDetail: string;

  @OneToOne(
    () => ShippingInformationEntity,
    (shippingInformation) => shippingInformation.shippingDetails,
  )
  @JoinColumn({
    name: 'shippingId',
  })
  public shippingInformation: ShippingInformationEntity;
}
