import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Injectable()
export class TodosService {
    constructor(private prisma: PrismaService) { }

    async create(createTodoInput: CreateTodoInput) {
        return this.prisma.todos.create({
            data: {
                ...createTodoInput,
                deadline: new Date(createTodoInput.deadline),
            },
        });
    }

    async findAll() {
        return this.prisma.todos.findMany({
            include: {
                todoList: true,
            },
        });
    }

    async findOne(id: number) {
        return this.prisma.todos.findUnique({
            where: { id },
            include: {
                todoList: true,
            },
        });
    }

    async update(updateTodoInput: UpdateTodoInput) {
        const { id, deadline, ...data } = updateTodoInput;

        return this.prisma.todos.update({
            where: { id },
            data: {
                ...data,
                ...(deadline && { deadline: new Date(deadline) }),
            },
        });
    }

    async remove(id: number) {
        return this.prisma.todos.delete({
            where: { id },
        });
    }

    async toggleDone(id: number) {
        const todo = await this.prisma.todos.findUnique({ where: { id } });
        if (todo)
            return this.prisma.todos.update({
                where: { id },
                data: { is_done: !todo.is_done },
            });
    }
}