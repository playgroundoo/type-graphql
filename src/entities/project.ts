import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Project {

  @PrimaryColumn()
  public id: number;

  @Column({ comment: '프로젝트명' })
  public name: string;

  @CreateDateColumn()
  public reg_date: Date;

  @UpdateDateColumn()
  public update_date: Date;
}