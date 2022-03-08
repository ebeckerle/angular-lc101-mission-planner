import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments: string [] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  
  equipBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  addEquip(equip: string){
    this.equipments.push(equip);
  }

  editEquip(equip: string) {
    this.equipBeingEdited = equip;
  }

  saveEquip(updatedEquip: string, oldEquip: string) {
      let index = this.equipments.indexOf(oldEquip);
      this.equipments[index] = updatedEquip;
      this.equipBeingEdited = null;
  }

  removeEquip(equip: string) {
    let index = this.equipments.indexOf(equip);
    this.equipments.splice(index, 1);
  }

  


}
