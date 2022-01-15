import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';
import { Customer } from './customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];


  customersForm: FormGroup = this.fb.group({
    kdnr: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
    benutzerName: ['', [Validators.required]],
    tarifModell: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private customersService: CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
  }


  addCustomer() {
    if (this.customersForm.valid) {
      const customer = this.customersForm.value;
      this.customers.push(customer);
    }
  }

  getCustomers() {
    this.customersService.getCustomers().subscribe(cs => console.log(cs));
  }
}
