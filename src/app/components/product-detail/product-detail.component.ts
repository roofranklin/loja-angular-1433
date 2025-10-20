import { Component, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [ CommonModule ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnChanges, OnDestroy {
  @Input() product: any;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['product']) {
      console.log("Produto mudou!", changes['product']);
    }
  }

  ngOnDestroy(): void {
    console.log('Componente de detalhe destruído! Limpando...');
  }

}
