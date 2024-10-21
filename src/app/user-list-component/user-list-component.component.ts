import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from '../models/Users.model';
import { UserDetailsDialogComponent } from '../user-details-dialog-component/user-details-dialog.component.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrl: './user-list-component.component.css',
})
export class UserListComponentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'email'];

  dataSource = new MatTableDataSource<Users>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.data = this.userService.getData();
  }
  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handlePageEvent(event: PageEvent) {
    this.currentPage = event.pageIndex;
  }
  currentPage = 0;

  openDialog(row: Users) {
    this.dialog.open(UserDetailsDialogComponent, { data: row });
  }
}
