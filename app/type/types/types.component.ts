import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Types, typeActiveItem, setActiveType} from 'src/app/models/types';


@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
types: Types[] = [];
selectedTypes!: Types;
typeActiveList: typeActiveItem[] = [];
showCards: boolean = false


  constructor() {} 

  ngOnInit():void {
    this.getTypes();
  }
getTypes() {
  const item1:Types={id:1, name:'Home', description: 'Home!', isActive:true}
  this.types.push(item1);
  const item2:Types={id:2, name:'About Us', description: 'Read About Us!', isActive:true}
  this.types.push(item2);
  const item3:Types={id:3, name:'Services', description: 'Our services!', isActive:true}
  this.types.push(item3);
  const item4:Types={id:4, name:'Types', description: 'Car types!', isActive:true}
  this.types.push(item4);

  this.types.forEach((element) => {
    const typeItemToAdd: typeActiveItem= {
      id: `type- ${element.id}`,
      isActive: false,
    };
  this.typeActiveList.push(typeItemToAdd);
   });
   this.typeActiveList[1].isActive = true;
   this.setActiveType(this.types[1]);
}
 
setActiveType(types : Types): void {
  const typeId = `type- ${types.id}`;
 this.typeActiveList.forEach((element) => {
   element.isActive = element.id === typeId ? true : false ;
   if (element.id === typeId) {
     this.selectedTypes = types;
   }
});

}
getTypeClass(types : Types ): Boolean {
  const typeId = `type- ${types.id}`; 
  const cssClass = this.typeActiveList.find((f) => f.id === typeId)?.isActive;
  return cssClass || false;
}

showCardsToggle(item: any) {
  item.name === "Types" ? this.showCards = true : this.showCards = false
}
}