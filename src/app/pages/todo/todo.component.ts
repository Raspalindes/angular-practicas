import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  public task: string = '';
  public tasks: string[] = [];

  public addTask(): void {
    const trimmedTask = this.task.trim();
    if (trimmedTask.length > 0) {
      this.tasks.push(trimmedTask);
      this.task = '';
    }
  }

  public removeTask(index: number): void {
    this.tasks = this.tasks.filter((_, i) => i !== index);
  }
}
