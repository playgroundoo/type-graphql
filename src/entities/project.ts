import { Entity, PrimaryColumn, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Image } from './image';

@Entity()
@ObjectType()
export class Project {

  @PrimaryGeneratedColumn()
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