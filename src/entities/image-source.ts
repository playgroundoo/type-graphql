import { Entity, PrimaryColumn, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Image } from './image';

@Entity()
@ObjectType()
export class ImageSource {
  
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  public id: number;

  @Column({ comment: '출처' })
  @Field()
  public source: string;

  @ManyToOne(type => Image, image => image.imageSources)
  @Field((type) => Image)
  public image: Image;
}