import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  selectedProduct: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  selectProduct(product: any): void {
    this.selectedProduct = product;
  }

}
