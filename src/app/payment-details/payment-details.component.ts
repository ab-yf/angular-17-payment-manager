import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PaymentDetailFormComponent } from '../payment-detail-form/payment-detail-form.component';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from './../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  templateUrl: './payment-details.component.html',
  styles: ``,
  imports: [PaymentDetailFormComponent, CommonModule, ToastrModule],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(
    public pdservice: PaymentDetailService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.pdservice.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.pdservice.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?'))
      this.pdservice.deletePaymentDetail(id).subscribe({
        next: (res) => {
          this.pdservice.pdlist = res as PaymentDetail[];
          this.toastr.error('Payment Details Deleted Successfully', 'Success');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
