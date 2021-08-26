import {Component, OnInit, Output} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Product} from "../product";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  product: any;
  products: any;
  formSearch: FormGroup | undefined;
  constructor(private productService: ProductService,
              private active: ActivatedRoute,
              private form: FormBuilder) {
  }

  ngOnInit(): void {
    this.showProduct();
  }

  showProduct() {
    this.productService.getAll().subscribe(res => {
      this.products = res

    });

  }

  delete(id: any) {

    this.productService.delete(id).subscribe(res => {
      this.showProduct();
    })
  }

  search(){
  let keyword= this.formSearch?.value;
    console.log(keyword)
  }


}
