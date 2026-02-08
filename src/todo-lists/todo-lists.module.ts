import { Module } from '@nestjs/common';
import { TodoListsService } from './todo-lists.service';
import { TodoListsResolver } from './todo-lists.resolver';

@Module({
  providers: [TodoListsService, TodoListsResolver]
})
export class TodoListsModule {}
