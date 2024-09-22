import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PCComponent } from 'src/app/Models/pc-component.model';
import { PCComponentService } from 'src/app/Services/pc-component.service';

@Component({
  selector: 'app-pc-component',
  templateUrl: './pc-component.component.html',
  styleUrls: ['./pc-component.component.css']
})
export class PcComponentComponent implements OnInit {
  componentList: PCComponent[] = [];
  componentForm: FormGroup;
  editPage: boolean = false;
  viewPage: boolean = true;
  currentComponentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private componentService: PCComponentService,
    private router: Router
  ) {
    this.componentForm = this.fb.group({
      componentName: ['', [Validators.required]],
      componentModel: ['', [Validators.required]],
      componentType: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadComponents();
  }

  loadComponents(): void {
    // this.componentService.getComponents().subscribe(data => {
    //   this.pcComponents = data;
    // });
    this.componentService.getComponents().subscribe(
      (data: PCComponent[]) => {
        this.componentList = data;
      },
      error => {
        console.error('Error fetching components', error);
      }
    );
  }

  openEditPage(id: number): void {
    this.currentComponentId = id;
    this.editPage = true;
    this.viewPage = false;
    this.loadComponent(id);
  }

  openAddPage(): void {
    this.currentComponentId = null;
    this.editPage = true;
    this.viewPage = false;
    this.componentForm.reset();
  }

  loadComponent(id: number): void {
    this.componentService.getComponent(id).subscribe(
      (component: PCComponent) => {
        this.componentForm.patchValue(component);
      },
      error => {
        console.error('Error fetching component', error);
      }
    );
  }

  deleteComponent(id: number): void {
    if (confirm('Are you sure you want to delete this component?')) {
      this.componentService.deleteComponent(id).subscribe(
        () => {
          this.loadComponents();
        },
        error => {
          console.error('Error deleting component', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.componentForm.valid) {
      const component = this.componentForm.value as PCComponent;
      if (this.currentComponentId) {
        this.componentService.updateComponent(this.currentComponentId, component).subscribe(
          () => {
            this.loadComponents();
            this.viewPage = true;
            this.editPage = false;
          },
          error => {
            console.error('Error updating component', error);
          }
        );
      } else {
        this.componentService.createComponent(component).subscribe(
          () => {
            this.loadComponents();
            this.viewPage = true;
            this.editPage = false;
          },
          error => {
            console.error('Error creating component', error);
          }
        );
      }
    }
  }
}