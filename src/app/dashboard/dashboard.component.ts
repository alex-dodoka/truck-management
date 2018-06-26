import {Component, OnInit} from '@angular/core';
import Shipment from '../model/Shipment';
import Truck from '../model/Truck';
import {AppFirestoreService} from '../service/app.firestore.service';
import {FIREBASE_SHIPMENT_TABLE, FIREBASE_TRUCK_TABLE} from '../util/routes';
import {DragulaService} from 'ng2-dragula';

@Component({
  selector: 'app-dashboard',
  providers: [DragulaService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  protected truckList: Truck[];
  protected unassignedShipmentList: Shipment[];

  constructor(private firestoreService: AppFirestoreService) {
  }

  ngOnInit() {
    this.getTruckList();
    this.getUnassignedShipments();
  }

  private getTruckList() {
    this.firestoreService
      .getList(FIREBASE_TRUCK_TABLE)
      .subscribe((data: any) => {
          this.truckList = [];
          return data.map((it) => this.truckList.push(this.getTruck(it)));
        }
      );
  }

  private getUnassignedShipments() {
    this.firestoreService
      .getList(FIREBASE_SHIPMENT_TABLE)
      .subscribe((data: any) => {
          this.unassignedShipmentList = [];
          return data.map((it) => !it.is_assign && this.unassignedShipmentList.push(this.getShipment(it)));
        }
      );
  }

  private getTruck(it) {
    const shipments = it.shipments && it.shipments
      .map(((el: any) => new Shipment(el.id, el.is_assign, el.title, el.address)));

    return new Truck(it.email, it.first_name, it.last_name, it.licence_plate, it.phone, shipments);
  }

  // noinspection JSMethodCanBeStatic
  private getShipment(it) {
    console.log(it);
    return new Shipment(it.id, it.is_assign, it.title, it.address);
  }
}
