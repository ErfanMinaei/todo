import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateTodoListInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Field(() => Int)
  @IsInt()
  userId: number;
}