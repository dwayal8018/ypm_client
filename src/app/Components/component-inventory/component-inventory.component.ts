import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-component-inventory',
  templateUrl: './component-inventory.component.html',
  styleUrls: ['./component-inventory.component.css']
})
export class ComponentInventoryComponent implements OnInit {
  components = {
    componentInventoryID: 1,
    quantity: 50
  };

  constructor() { }

  ngOnInit(): void {
    // Fetch components from a service or other data source
    // this.componentService.getComponents().subscribe(data => {
    //   this.components = data;
    // });
  }

  ngAfterViewInit(): void {
    // Initialize Materialize components if needed
    M.AutoInit(); // Initialize all Materialize components
  }
}


