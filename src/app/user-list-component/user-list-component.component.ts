import {
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { UserService } from '../user.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from '../models/Users.model'; // Stelle sicher, dass der Pfad korrekt ist
import { DataSource } from '@angular/cdk/collections';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrl: './user-list-component.component.css',
})
export class UserListComponentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'email'];

  dataSource = new MatTableDataSource<Users>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.data = this.userService.getData();
  }
  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  handlePageEvent(event: PageEvent) {
    this.currentPage = event.pageIndex;
  }
  currentPage = 0;

  openDialog(row: Users) {
    this.dialog.open(this.dialogTemplate, { data: row });
    console.log('selected row', row, this.dataSource.data);
  }
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
}
