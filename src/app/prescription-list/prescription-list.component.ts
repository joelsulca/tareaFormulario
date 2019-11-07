import { Component, OnInit } from '@angular/core';
import {PrescriptionService} from '../services/prescription.service';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {

  constructor(private prescriptionService: PrescriptionService) { }

  ngOnInit() {
  }

}
