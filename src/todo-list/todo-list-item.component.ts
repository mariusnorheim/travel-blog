import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrl: './todo-list-item.component.css',
})
export class TodoListItem {
    taskTitle = '';
    isComplete = false;

    completeTask() {
        this.isComplete = true;
    }
    updateTitle(newTitle: string) {
        this.taskTitle = newTitle;
    }
}
