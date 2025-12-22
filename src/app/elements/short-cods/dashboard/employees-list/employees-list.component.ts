import { Component, Input, TemplateRef } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from '../../../pagination/pagination.component';

export interface Dessert {
  employee_id: number
  userImage: string,
  userName: string,
  userPosition: string,
  userEmail: string,
  number: string,
  gender: string,
  status: string
  location: string
}
@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [
    NgbModule,
    MatSortModule,
    PaginationComponent
  ],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent {
  offcanvasExample: boolean = false;
  toggleExample() {
    this.offcanvasExample = !this.offcanvasExample;
  }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  @Input() offset_limit: any;
  @Input() checkbox: boolean = false;

  active = 1;
  page: any = 1;
  totalRows: number = 5;
  totalPage: any = 0;
  allData: any = [];
  boxActive: Boolean = false;

  constructor(private modalService: NgbModal) {
    this.orderData = this.desserts.slice();
  }
  ngOnInit(): void {
    this.totalRows = this.offset_limit;
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  desserts: Dessert[] = [
    {
      employee_id: 1001,
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Ricky Antony',
      userPosition: 'Liam Risher',
      userEmail: 'ra@gmail.com',
      number: '+12 123 456 7890',
      gender: 'Male',
      location: 'AZ',
      status: 'Active',
    },
    {
      employee_id: 1018,
      userImage: 'assets/images/contacts/pic2.jpg',
      userName: 'Ricky M',
      userPosition: 'Software Designer',
      userEmail: 'ra@gmail.com',
      number: '+12 123 456 7890',
      gender: 'Male',
      location: 'Delhi',
      status: 'Pending',
    },
    {
      employee_id: 1001,
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Ricky Antony',
      userPosition: 'Liam Risher',
      userEmail: 'ra@gmail.com',
      number: '+12 123 456 7890',
      gender: 'Male',
      location: 'AZ',
      status: 'Active',
    },
    {
      employee_id: 1018,
      userImage: 'assets/images/contacts/pic3.jpg',
      userName: 'Ricky M',
      userPosition: 'Software Designer',
      userEmail: 'ra@gmail.com',
      number: '+12 123 456 7890',
      gender: 'Female',
      location: 'AZ',
      status: 'Active',
    },
    {
      employee_id: 1018,
      userImage: 'assets/images/contacts/pic2.jpg',
      userName: 'Mony Antony',
      userPosition: 'Software Designer',
      userEmail: 'ra@gmail.com',
      number: '+12 123 456 7890',
      gender: 'Male',
      location: 'Delhi',
      status: 'Active',
    },
    {
      employee_id: 1001,
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Ricky Antony',
      userPosition: 'Liam Risher',
      userEmail: 'ra@gmail.com',
      number: '+12 123 456 7890',
      gender: 'Male',
      location: 'AZ',
      status: 'Pending',
    },
    {
      employee_id: 1018,
      userImage: 'assets/images/contacts/pic2.jpg',
      userName: 'Ricky M',
      userPosition: 'Software Designer',
      userEmail: 'ra@gmail.com',
      number: '+12 123 456 7890',
      gender: 'Male',
      location: 'Delhi',
      status: 'Pending',
    },
    {
      employee_id: 1001,
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Ricky Antony',
      userPosition: 'Liam Risher',
      userEmail: 'ra@gmail.com',
      number: '+12 123 456 7890',
      gender: 'Male',
      location: 'AZ',
      status: 'Active',
    },
    {
      employee_id: 1018,
      userImage: 'assets/images/contacts/pic3.jpg',
      userName: 'Ankites Risher',
      userPosition: 'Software Designer',
      userEmail: 'ra@gmail.com',
      number: '+12 123 456 7890',
      gender: 'Female',
      location: 'AZ',
      status: 'Active',
    },
    {
      employee_id: 1018,
      userImage: 'assets/images/contacts/pic3.jpg',
      userName: 'Ricky M',
      userPosition: 'Software Designer',
      userEmail: 'ra@gmail.com',
      number: '+12 123 456 7890',
      gender: 'Female',
      location: 'AZ',
      status: 'Active',
    },
    {
      employee_id: 1018,
      userImage: 'assets/images/contacts/pic2.jpg',
      userName: 'Mony Antony',
      userPosition: 'Software Designer',
      userEmail: 'ra@gmail.com',
      number: '+12 123 456 7890',
      gender: 'Male',
      location: 'Delhi',
      status: 'Active',
    },
    {
      employee_id: 1001,
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Ricky Antony',
      userPosition: 'Liam Risher',
      userEmail: 'ra@gmail.com',
      number: '+12 123 456 7890',
      gender: 'Male',
      location: 'AZ',
      status: 'Pending',
    },
    {
      employee_id: 1018,
      userImage: 'assets/images/contacts/pic2.jpg',
      userName: 'Ricky M',
      userPosition: 'Software Designer',
      userEmail: 'ra@gmail.com',
      number: '+12 123 456 7890',
      gender: 'Male',
      location: 'Delhi',
      status: 'Pending',
    },
    {
      employee_id: 1001,
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Ricky Antony',
      userPosition: 'Liam Risher',
      userEmail: 'ra@gmail.com',
      number: '+12 123 456 7890',
      gender: 'Male',
      location: 'AZ',
      status: 'Active',
    },
  ];

  orderData: Dessert[];

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.orderData = data;
      return;
    }

    this.orderData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'employee_id': return compare(a.employee_id, b.employee_id, isAsc);
        case 'userName': return compare(a.userName, b.userName, isAsc);
        case 'userEmail': return compare(a.userEmail, b.userEmail, isAsc);
        case 'number': return compare(a.number, b.number, isAsc);
        case 'gender': return compare(a.gender, b.gender, isAsc);
        case 'location': return compare(a.location, b.location, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
  }

  pageChange(e: any) {    //  Page Change funcation   ---------
    this.page = e;
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  paginator(items: any, current_page: any, per_page_items: any) {
    let page = current_page || 1,
      per_page = per_page_items || 10,
      offset = (page - 1) * per_page,

      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page);

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (total_pages > page) ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems
    };
  }

  checkUncheckAll() {
    if (this.boxActive) {
      this.boxActive = false;
    } else {
      this.boxActive = true;
    }
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}