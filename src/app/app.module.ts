import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule, MatCheckboxModule, MatIconModule, MatListModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';
import { StarwarcharactersComponent } from './starwarcharacters/starwarcharacters.component';
import {HttpClientModule} from '@angular/common/http';
import {SwapapiService} from './services/swapapi.service';
import { CharacterdetailsComponent } from './starwarcharacters/characterdetails/characterdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    StarwarcharactersComponent,
    CharacterdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
   ],
  providers: [
    SwapapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
