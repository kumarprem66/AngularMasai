import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleHighlightDirective } from './ToggleHighlightDirective';
import { ConditionalDisplayDirective } from './ConditionalDisplayDirective';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { ConditionalDisplayComponent } from './conditional-display/conditional-display.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routung.module';

@NgModule({
  declarations: [
    AppComponent,
    ToggleHighlightDirective,
    ConditionalDisplayDirective,
    ProductListComponent,
    HeaderComponent,
    ConditionalDisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
     AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
