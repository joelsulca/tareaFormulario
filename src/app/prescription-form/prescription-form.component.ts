import {Component, OnInit} from '@angular/core';
import {PrescriptionService} from '../services/prescription.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.css']
})
export class PrescriptionFormComponent implements OnInit {
  prescriptionForm: FormGroup;
  constructor(private fb: FormBuilder, private prescriptionService: PrescriptionService) {
    this.prescriptionForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit() {
  }

  addItem() {
    this.prescriptionService.addItem(this.prescriptionForm.getRawValue());
    this.prescriptionForm.reset();
  }
}
