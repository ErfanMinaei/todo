import { ObjectType, Field, Int, HideField } from '@nestjs/graphql';
import { TodoList } from '../../todo-lists/models/todo-list.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  first_name: string;

  @Field({ nullable: true })
  last_name?: string;

  @Field()
  username: string;

  @HideField() // Hide password from GraphQL responses
  password: string;

  @Field(() => [TodoList], { nullable: true })
  todoLists?: TodoList[];
}