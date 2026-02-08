import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoListInput } from './dto/create-todo-list.input';

@Injectable()
export class TodoListsService {
  constructor(private prisma: PrismaService) {}

  async create(createTodoListInput: CreateTodoListInput) {
    return this.prisma.todoLists.create({
      data: createTodoListInput,
    });
  }

  async findAll() {
    return this.prisma.todoLists.findMany({
      include: {
        user: true,
        todos: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.todoLists.findUnique({
      where: { id },
      include: {
        user: true,
        todos: true,
      },
    });
  }

  async findByUser(userId: number) {
    return this.prisma.todoLists.findMany({
      where: { userId },
      include: {
        todos: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.todoLists.delete({
      where: { id },
    });
  }
}