import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Project } from './project';
import { ImageSource } from './image-source';

@Entity()
@ObjectType()
export class Image {
  
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  public id: number;

  @Column({ comment: '이미지 url' })
  @Field()
  public url: string;

  @ManyToOne(type => Project, project => project.images)
  @Field((type) => Project)
  public project: Project;

  @OneToMany(type => ImageSource, imageSource => imageSource.image)
  @Field((type) => [ ImageSource ])
  public imageSources: ImageSource[];

}