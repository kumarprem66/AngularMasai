import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent {

  searchText: string = '';

  @ViewChild('searchInput') searchInputEl: ElementRef;


  @Output()
  searchTextChange:EventEmitter<string> = new EventEmitter<string>();

  updateSearchText(ele: HTMLInputElement) {
     
    this.searchText = ele.value;

    this.searchTextChange.emit(this.searchText);

    
  }
}
