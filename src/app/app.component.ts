import { Component } from '@angular/core';
import { Expense } from './models/expense.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expenses: Expense[] = [];

  addExpense(expense: Omit<Expense, 'id'>) {
    this.expenses.push({ ...expense, id: Date.now() });
  }

  deleteExpense(id: number) {
    this.expenses = this.expenses.filter(e => e.id !== id);
  }
}