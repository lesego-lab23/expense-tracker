import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent {
  @Input() expenses: Expense[] = [];
  @Output() delete = new EventEmitter<number>();

  onDelete(id: number) {
    this.delete.emit(id);
  }

  get incomeExpenses() {
    return this.expenses.filter(e => e.category === 'Income');
  }

  get totalIncome() {
    return this.incomeExpenses.reduce((sum, e) => sum + e.amount, 0);
  }

  get expenseExpenses() {
    return this.expenses.filter(e => e.category === 'Expense');
  }

  get totalExpense() {
    return this.expenseExpenses.reduce((sum, e) => sum + e.amount, 0);
  }
}