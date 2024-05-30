import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  standalone: true,
  imports: [FormsModule, ToastrModule],
  templateUrl: './payment-detail-form.component.html',
  styles: ``,
})
export class PaymentDetailFormComponent {
  constructor(
    public pdservice: PaymentDetailService,
    private toastr: ToastrService
  ) {}

  onSubmit(form: NgForm) {
    this.pdservice.isFormSubmitted = true;
    if (form.valid) {
      if (this.pdservice.formData.paymentDetailId == 0) this.insertRecord(form);
      else this.updateRecord(form);
    }
  }
  insertRecord(form: NgForm) {
    this.pdservice.postPaymentDetail().subscribe({
      next: (res) => {
        this.pdservice.pdlist = res as PaymentDetail[];
        this.pdservice.resetForm(form);
        this.toastr.success('Payment Details Added Successfully', 'Success');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  updateRecord(form: NgForm) {
    this.pdservice.putPaymentDetail().subscribe({
      next: (res) => {
        this.pdservice.pdlist = res as PaymentDetail[];
        this.pdservice.resetForm(form);
        this.toastr.info('Payment Details Updated Successfully', 'Success');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
