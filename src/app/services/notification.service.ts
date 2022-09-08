import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly defaultTime: number;
  private easeTime: number;

  constructor(private matSnackBar: MatSnackBar) {
    this.defaultTime = 3500;
    this.easeTime = 100;
  }

  success(message: string): void {
    this.matSnackBar.open(message, 'Éxito', {
      duration: this.defaultTime,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  error(message: string): void {
    this.matSnackBar.open(message, 'Error', {
      duration: this.defaultTime,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  warning(message: string): void {
    this.matSnackBar.open(message, 'Advertencia', {
      duration: this.defaultTime,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

}
