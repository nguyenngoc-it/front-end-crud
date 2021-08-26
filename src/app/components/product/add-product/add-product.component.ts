import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formAdd?: FormGroup;

  constructor(private productService: ProductService,
              private form: FormBuilder,
              private route: Router) {
  }

  ngOnInit(): void {
    this.formAdd = this.form.group({
      name: [''],
      price: [''],
      description: ['']

    })
  }

  addProduct() {
    let value = this.formAdd?.value;
    // console.log(value)
    this.productService.create(value).subscribe(res => {
      this.route.navigate(['list']).then(res => {

      })
    })
  }
}
