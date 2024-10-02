import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { ComponentInventory } from 'src/app/Models/component-inventory.model';
import { ComponentService } from 'src/app/Services/component.service';

@Component({
  selector: 'app-component-inventory',
  templateUrl: './component-inventory.component.html',
  styleUrls: ['./component-inventory.component.css']
})
export class ComponentInventoryComponent implements OnInit {
  // components = {
  //   componentInventoryID: 1,
  //   quantity: 50
  // };

  components:ComponentInventory[]=[];

  constructor(private componentService:ComponentService) { }

  ngOnInit(): void {
    // Fetch components from a service or other data source
    this.componentService.getComponents().subscribe(data => {
      this.components = data;
    });
  }

  ngAfterViewInit(): void {
    // Initialize Materialize components if needed
    M.AutoInit(); // Initialize all Materialize components
  }
}


