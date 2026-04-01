import { Component, Input } from '@angular/core';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() expenses: Expense[] = [];

  get totalIncome() {
    return this.expenses
      .filter(e => e.category === 'Income')
      .reduce((sum, e) => sum + e.amount, 0);
  }

  get totalExpense() {
    return this.expenses
      .filter(e => e.category === 'Expense')
      .reduce((sum, e) => sum + e.amount, 0);
  }

  get netBalance() {
    return this.totalIncome - this.totalExpense;
  }
}