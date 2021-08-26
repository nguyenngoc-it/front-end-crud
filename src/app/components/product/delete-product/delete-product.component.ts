import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private productService: ProductService,
              private active: ActivatedRoute) { }
 // @ts-ignore
  id= +this.active.snapshot.paramMap.get('id');
  ngOnInit(): void {

  }
delete(){
    this.productService.delete(this.id).subscribe(res=>{
      console.log(res)
    })
}
}
