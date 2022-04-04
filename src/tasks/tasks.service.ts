import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  readAllTasks(): Task[] {
    return this.tasks;
  }
  addTask(title: string, description: string): Task {
    const task: Task = {
      id: 'UniqueId',
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
