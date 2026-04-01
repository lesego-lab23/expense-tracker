import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  title: string = '';
  amount: number | null = null;
  date: string = '';
  category: 'Income' | 'Expense' = 'Expense';

  @Output() add = new EventEmitter<Omit<Expense, 'id'>>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.title || !this.amount || !this.date || !this.category) return;

    this.add.emit({
      title: this.title,
      amount: this.amount,
      date: this.date,
      category: this.category
    });

    // Reset form
    this.title = '';
    this.amount = null;
    this.date = '';
    this.category = 'Expense';
  }
}