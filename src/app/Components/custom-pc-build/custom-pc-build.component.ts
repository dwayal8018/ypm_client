import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomPCBuild } from 'src/app/Models/custom-pc-build.model';
import { User } from 'src/app/Models/user.model';
import { CustomPCBuildService } from 'src/app/Services/custom-pcbuild.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-custom-pc-build',
  templateUrl: './custom-pc-build.component.html',
  styleUrls: ['./custom-pc-build.component.css']
})
export class CustomPcBuildComponent implements OnInit {
  buildList: CustomPCBuild[] = [];
  editPage: boolean = false;
  viewPage: boolean = true;
  currentBuildId: number | null = null;

  customBuild: CustomPCBuild = new CustomPCBuild();
  clientsList: User[] = [];
  techExpertsList: User[] = [];
  adminsList: User[] = [];
  userList: User[] = [];

  selectedClient: User | null = null;
  selectedTechExpert: User | null = null;
  selectedAdmin: User | null = null;

  constructor(
    private buildService: CustomPCBuildService,
    private router: Router,
    private userService: UserService // Inject user service
  ) { }

  ngOnInit(): void {
    this.loadUsers(''); // Load users initially
    this.loadBuilds();
  }


  loadUsers(search: string): void {
    this.userService.getUsers(search).subscribe((data: User[]) => {
      this.userList = data;
      this.getClientList();
      this.getTechExpertList();
      this.getAdminList(); // Load admins
    },
      error => {
        console.error('Error fetching users', error);
      });
  }

  getClientList() {
    this.clientsList = this.userList.filter(user => user.role === 'client');
  }

  getTechExpertList() {
    this.techExpertsList = this.userList.filter(user => user.role === 'techExpert');
  }

  getAdminList() {
    this.adminsList = this.userList.filter(user => user.role === 'admin');
  }

  selectClient(event: User) {
    this.selectedClient = event;
    if (this.customBuild.client != null) {
      this.customBuild.client.userID = this.selectedClient?.userID; // Update customBuild directly
    } else {
      this.customBuild.client = new User();
      this.customBuild.client.userID = this.selectedClient?.userID;
    }
  }

  selectTechExpert(event: User) {
    this.selectedTechExpert = event;
    if (this.customBuild.techExpert !== null) {
      this.customBuild.techExpert.userID = this.selectedClient?.userID; // Update customBuild directly
    } else {
      this.customBuild.techExpert = new User();
      this.customBuild.techExpert.userID = this.selectedTechExpert?.userID; // Update customBuild directly
    }
  }

  selectAdmin(event: User) {
    this.selectedAdmin = event;
    if (this.customBuild.admin !== null) {
      this.customBuild.admin.userID = this.selectedClient?.userID; // Update customBuild directly
    } else {
      this.customBuild.admin = new User();
      this.customBuild.admin.userID = this.selectedAdmin?.userID; // Update customBuild directly
    }
  }
  loadBuilds(): void {
    this.buildService.getBuilds().subscribe(
      (data: CustomPCBuild[]) => {
        this.buildList = data;
      },
      error => {
        console.error('Error fetching builds', error);
      }
    );
  }

  openEditPage(id: number): void {
    // this.loadBuild(id);
    this.customBuild = this.buildList[id - 1];
    this.selectedAdmin = this.buildList[id - 1].admin;
    this.selectedTechExpert = this.buildList[id - 1].techExpert;
    this.selectedClient = this.buildList[id - 1].client;

    this.currentBuildId = id;
    this.editPage = true;
    this.viewPage = false;
  }

  openAddPage(): void {
    this.currentBuildId = null;
    this.editPage = true;
    this.viewPage = false;
    this.customBuild = new CustomPCBuild(); // Reset the customBuild
  }

  loadBuild(id: number): void {
    this.buildService.getBuild(id).subscribe(
      (build: CustomPCBuild) => {
        this.customBuild = { ...build }; // Load the build details
      },
      error => {
        console.error('Error fetching build', error);
      }
    );
  }

  deleteBuild(id: number): void {
    if (confirm('Are you sure you want to delete this build?')) {
      this.buildService.deleteBuild(id).subscribe(
        () => {
          this.loadBuilds();
        },
        error => {
          console.error('Error deleting build', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.validateCustomBuild(this.customBuild)) {
      if (this.currentBuildId) {
        this.buildService.updateBuild(this.currentBuildId, this.customBuild).subscribe(
          () => {
            this.loadBuilds();
            this.viewPage = true;
            this.editPage = false;
          },
          error => {
            console.error('Error updating build', error);
          }
        );
      } else {
        this.buildService.createBuild(this.customBuild).subscribe(
          () => {
            this.loadBuilds();
            this.viewPage = true;
            this.editPage = false;
          },
          error => {
            console.error('Error creating build', error);
          }
        );
      }
    } else {
      alert('Please fill in all required fields.');
    }
  }

  validateCustomBuild(build: CustomPCBuild): boolean {
    return (
      build.buildType !== '' &&
      build.budget !== null &&
      build.budget !== undefined &&
      build.buildStatus !== ''
      // build.clientID !== null &&
      // build.clientID !== undefined &&
      // build.techExpertID !== null &&
      // build.techExpertID !== undefined &&
      // build.adminID !== null &&
      // build.adminID !== undefined
    );
  }


  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed':
      case 'closed':
        return 'green white-text';
      case 'In Progress':
      case 'in-progress':
        return 'orange white-text';
      case 'Pending':
      case 'open':
        return 'grey white-text';
      case 'Cancelled':
        return 'red white-text';
      default:
        return 'blue white-text';
    }
  }

  cancelForm(): void {
    this.currentBuildId = null;
    this.editPage = false;
    this.viewPage = true;
    this.customBuild = new CustomPCBuild(); // Reset the customBuild
  }
}
