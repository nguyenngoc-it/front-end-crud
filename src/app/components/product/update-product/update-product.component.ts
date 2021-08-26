import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Product} from "../product";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  formEdit?: FormGroup;
  product?: any;

  constructor(private productService: ProductService,
              private form: FormBuilder,
              private active: ActivatedRoute,
              private route: Router) {
  }


  // @ts-ignore
  id = +this.active.snapshot.paramMap.get('i');
  ngOnInit(): void {
   this.productService.getProductById(this.id).subscribe(res=>{
      this.product=res;
     // console.log(this.product.name)
     this.formEdit= this.form.group({
       name:[this.product.name],
       price:[this.product.price],
       description:[this.product.description]
     })
   })

  }

  submit(){
    let data= this.formEdit?.value;
    console.log(data)
    this.productService.update(data, this.id).subscribe(res=>{
      this.route.navigate(['/list']);
    });
  }

}
