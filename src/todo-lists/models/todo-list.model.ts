import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../users/models/user.model';
import { Todo } from '../../todos/models/todo.model';

@ObjectType()
export class TodoList {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  created_at: Date;

  @Field(() => Int)
  userId: number;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [Todo], { nullable: true })
  todos?: Todo[];
}
