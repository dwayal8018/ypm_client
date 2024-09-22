import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomPCBuild } from 'src/app/Models/custom-pc-build.model';
import { CustomPCBuildService } from 'src/app/Services/custom-pcbuild.service';

@Component({
  selector: 'app-custom-pc-build',
  templateUrl: './custom-pc-build.component.html',
  styleUrls: ['./custom-pc-build.component.css']
})
export class CustomPcBuildComponent implements OnInit {
  buildList: CustomPCBuild[] = [];
  buildForm: FormGroup;
  editPage: boolean = false;
  viewPage: boolean = true;
  currentBuildId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private buildService: CustomPCBuildService,
    private router: Router
  ) {
    this.buildForm = this.fb.group({
      buildType: ['', [Validators.required]],
      budget: ['', [Validators.required]],
      buildStatus: ['', [Validators.required]],
      clientID: ['', [Validators.required]],
      techExpertID: ['', [Validators.required]],
      adminID: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadBuilds();
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
    this.currentBuildId = id;
    this.editPage = true;
    this.viewPage = false;
    this.loadBuild(id);
  }

  openAddPage(): void {
    this.currentBuildId = null;
    this.editPage = true;
    this.viewPage = false;
    this.buildForm.reset();
  }

  loadBuild(id: number): void {
    this.buildService.getBuild(id).subscribe(
      (build: CustomPCBuild) => {
        this.buildForm.patchValue(build);
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
    if (this.buildForm.valid) {
      const build = this.buildForm.value as CustomPCBuild;
      if (this.currentBuildId) {
        this.buildService.updateBuild(this.currentBuildId, build).subscribe(
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
        this.buildService.createBuild(build).subscribe(
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
}
