import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from './../../environments/environment';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  url: string = environment.apiBaseUrl + '/PaymentDetail';
  pdlist: PaymentDetail[] = [];
  formData: PaymentDetail = new PaymentDetail();
  isFormSubmitted: boolean = false;
  constructor(private http: HttpClient) {}

  refreshList() {
    this.http.get(this.url).subscribe({
      next: (res) => {
        this.pdlist = res as PaymentDetail[];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  postPaymentDetail() {
    return this.http.post(this.url, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(
      this.url + '/' + this.formData.paymentDetailId,
      this.formData
    );
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new PaymentDetail();
    this.isFormSubmitted = false;
  }
}
