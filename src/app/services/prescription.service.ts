import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  prescriptions = [];

  constructor() {
  }

  addItem(data: { title: string, description: string }) {
    this.prescriptions.push(data);
    console.log(this.prescriptions);
  }
}
