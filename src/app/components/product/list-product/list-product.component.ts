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
  productFind:any;
  product: any;
  products: any;
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
      this.productFind=this.products;
      // console.log(this.productFind)
    });
  }

  delete(id: any) {
    this.productService.delete(id).subscribe(res => {
      this.showProduct();
    })
  }

  findProduct(keywork:any){
    // @ts-ignore
    return this.products.filter(pro => {
      // @ts-ignore
      return pro.name.toLowerCase().indexOf(keywork) !=-1;
    });
  }
  search(event: any){
  let keyword= event.toLowerCase();
    return this.productFind= (keyword) ? this.findProduct(keyword) : this.products;


  }



}
