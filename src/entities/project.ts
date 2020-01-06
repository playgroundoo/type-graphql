import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Image } from './image';

@Entity()
@ObjectType()
export class Project {

  @PrimaryColumn()
  @Field(type => ID)
  public id: number;

  @Column({ comment: '프로젝트명' })
  @Field()
  public name: string;

  @Column({ comment: '썸네일'})
  @Field()
  public thumbnail: string;

  @OneToMany(type => Image, image => image.project)
  @Field((type) => [ Image ])
  public images: Image[];

}