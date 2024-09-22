import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceRequest } from 'src/app/Models/service-request.model';
import { User } from 'src/app/Models/user.model';
import { ServiceRequestService } from 'src/app/Services/service-request.service';
import { UserService } from 'src/app/Services/user.service';

declare var M: any;
@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.css']
})
export class ServiceRequestComponent implements OnInit {
  serviceRequest: ServiceRequest = new ServiceRequest();
  serviceRequests: ServiceRequest[] = [];
  // serviceRequests =
  //   [
  //     {
  //       serviceID: 1,
  //       serviceReqDate: new Date(),
  //       serviceReqStatus: 'Pending',
  //       priority: "Medium",
  //       type: "A",
  //       clientID: "3",
  //       techExpertID: 2
  //     },
  //     {
  //       serviceID: 2,
  //       serviceReqDate: new Date(),
  //       serviceReqStatus: 'Pending',
  //       priority: "High",
  //       type: "B",
  //       clientID: "1",
  //       techExpertID: 2
  //     }
  //   ];
  editPage: boolean = false;
  viewPage: boolean = false;
  title: string = "Add";
  userList: User[] = [];
  techExpertsList: User[] = [];
  clientsList: User[] = [];

  
  constructor(
    private serviceRequestService: ServiceRequestService,
    private userService: UserService,
    private cdr: ChangeDetectorRef
    // private router: Router
  ) { }

  ngOnInit(): void {
    this.viewPage = true;
    this.loadServiceRequests();
    this.loadUsers("");
  }

  ngAfterViewInit() {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);  // Initialize MaterializeCSS select
    // if (this.serviceRequest.clientID) {
    //   document.querySelector('label[for="clientID"]')?.classList.add('active');
    // }
  
    // if (this.serviceRequest.techExpertID) {
    //   document.querySelector('label[for="techExpertID"]')?.classList.add('active');
    // }
  }
  loadServiceRequests(): void {
    this.serviceRequestService.getAllServiceRequests().subscribe(data => {
      this.serviceRequests = data;
    });
  }
  // get techExpertList(): User[] {
  //   return this.userList.filter(user => user.role === 'Tech Expert');
  // }

  getClientList() {
    this.clientsList = this.userList.filter(user => user.role === 'client');
  }
  getTechExpertList() {
    this.techExpertsList = this.userList.filter(user => user.role === 'techExpert');
  }
  selectClient(event:any){
    this.serviceRequest.techExpertID=event.target.value;
  }
  selectTechExpert(event:any){
    this.serviceRequest.techExpertID=event.target.value;
  }
  loadUsers(search: string): void {
    this.userService.getUsers(search).subscribe((data: User[]) => {
      this.userList = data;
      this.cdr.detectChanges();
      this.getClientList();
      this.getTechExpertList();

    },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }
  openEditPage(id: number): void {
    debugger;
    // this.router.navigate(['/service-request-edit', id]);
    // this.serviceRequest=this.serviceRequests.find(res=> res.serviceID==id);
    this.serviceRequest = this.serviceRequests.filter(res => res.serviceID == id)[0];
    this.editPage = true;
    this.viewPage = false;
    this.title = "Edit";

  }

  openAddPage(): void {
    this.editPage = true;
    this.viewPage = false;
    this.title = "Add";

    // this.router.navigate(['/service-request-add']);
  }

  deleteRequest(id: number): void {
    if (confirm('Are you sure you want to delete this request?')) {
      // this.serviceRequestService.deleteServiceRequest(id).subscribe(() => {
      //   this.loadServiceRequests();
      // });
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      // closed,	in-progress,open
      case 'Completed': return 'green white-text';
      case 'In Progress': return 'orange white-text';
      case 'Pending': return 'grey white-text';
      case 'Cancelled': return 'red white-text';
      case 'closed': return 'green white-text';
      case 'in-progress': return 'orange white-text';
      case 'open': return 'grey white-text';
      default: return 'blue white-text';
    }
  }

  saveRequest() {
    this.serviceRequestService.createServiceRequest(this.serviceRequest).subscribe(response => {
      if (!this.serviceRequests.find(res => res.serviceID == response[0].serviceID))
        this.serviceRequests.push(response[0]);
      alert("Service requested Successfully!");
    });
    this.viewPage = true;
    this.editPage = false;
  }
}
