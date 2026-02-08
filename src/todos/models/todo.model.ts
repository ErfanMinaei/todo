import { ObjectType, Field, Int } from '@nestjs/graphql';
import { TodoList } from '../../todo-lists/models/todo-list.model';

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  is_done: boolean;

  @Field()
  deadline: Date;

  @Field(() => Int)
  todoListId: number;

  @Field(() => TodoList, { nullable: true })
  todoList?: TodoList;
}