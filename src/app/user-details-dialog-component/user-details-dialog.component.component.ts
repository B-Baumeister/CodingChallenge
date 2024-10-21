import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from '../models/Users.model';

@Component({
  selector: 'app-user-details-dialog-component',
  templateUrl: './user-details-dialog.component.component.html',
})
export class UserDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Users) {}
}
