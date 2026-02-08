import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional, IsString, IsBoolean, IsDateString } from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  is_done?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  deadline?: string;
}