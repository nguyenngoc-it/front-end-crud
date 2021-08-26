import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../components/product/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: any;

  constructor(private httpClient: HttpClient) {
  }

  // @ts-ignore
  getAll(): Observable<any> {
    return this.httpClient.get(environment.url_api + 'list-product');

  }

  create(data: any): Observable<any> {
    return this.httpClient.post(environment.url_api + 'create-product', data);
    // console.log(data)
  }

  delete(id: any): Observable<any> {
    return this.httpClient.get(environment.url_api + id + '/delete-product');
  }

  update(data: any, id: any): Observable<any> {
    return this.httpClient.post(environment.url_api + id + '/update-product', data);
  }

  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(environment.url_api + id + '/edit-product');
  }



}
