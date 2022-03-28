import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks=["blh"];
    readAllTasks(){
return this.tasks;
    }
}
