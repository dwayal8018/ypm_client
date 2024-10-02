export class PCComponent {
  pcComponentID: number;
    componentName:string;
    componentModel: string;
    componentType: string;
    price: number;
    imageUrl:string;
    constructor(){
      this.pcComponentID=0;
      this.componentName="";
      this.componentModel="";
      this.componentType="";
      this.price=0;
      this.imageUrl="";
    }
  }