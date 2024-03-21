import { Component, ElementRef, EventEmitter, Input,Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/entity/Product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText: string = '';

  @ViewChild('searchInput') searchInputEl: ElementRef;

  @Input()
  productsinSearch:Product[];



  @Output()
  searchTextChange:EventEmitter<string> = new EventEmitter<string>();

  updateSearchText(ele: HTMLInputElement) {
     
    this.searchText = ele.value;

    this.searchTextChange.emit(this.searchText);

    
  }


}
