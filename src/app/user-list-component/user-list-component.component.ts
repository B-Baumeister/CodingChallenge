import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UserService } from '../user.service';
import { users } from '../users';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from '../models/Users.model'; // Stelle sicher, dass der Pfad korrekt ist

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
  constructor(private userService: UserService) {}


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  handlePageEvent(event: PageEvent) {
    pageEvent: PageEvent;
    this.currentPage = event.pageIndex;
  }
  currentPage = 0;

  readonly dialog = inject(MatDialog);

  onRowClicked(id: number) {
    this.dialog.open(FullDetailsInDialog);
    console.log('Row clicked: ', id);
  }
}

export class FullDetailsInDialog {
  constructor(private userService: UserService) {}
  get openDetailsOfUser() {
    console.log('hi');
    return this.userService.getData();
  }
}
export { Users };
