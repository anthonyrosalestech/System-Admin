import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Mail } from ".";
import { Type } from "./Type";

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @ManyToOne(() => Mail, (mail) => mail.accounts)
  @JoinColumn({ name: "mailId" })
  mail: Mail;

  @ManyToOne(() => Type, (type) => type.id)
  @JoinColumn({ name: "typeId" })
  type: Type;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
