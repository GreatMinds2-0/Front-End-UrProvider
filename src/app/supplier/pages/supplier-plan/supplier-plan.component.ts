import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {

}

@Component({
  selector: 'app-supplier-plan',
  templateUrl: './supplier-plan.component.html',
  styleUrls: ['./supplier-plan.component.css']
})


export class SupplierPlanComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PaymentMethodDialog, {
      data: {

      },
    });
  }
}

@Component({
  selector: 'payment-method',
  templateUrl: 'payment-method.html',
  styleUrls: ['./supplier-plan.component.css']
})

export class PaymentMethodDialog{

  constructor(public dialogRef: MatDialogRef<PaymentMethodDialog>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick() {
    this.dialogRef.close();
  }
  visa(){

  }
  mastercard(){

  }

}
