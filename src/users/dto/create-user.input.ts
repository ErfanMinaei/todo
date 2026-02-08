import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  last_name?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  username: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}