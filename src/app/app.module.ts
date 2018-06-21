import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AccountComponent } from './account/account.component';


import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { BoardComponent } from './board/board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import { BoardListComponent } from './board-list/board-list.component';
import {DragDropModule} from 'primeng/dragdrop';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import { CardItemService } from './card-item.service';
import {DialogModule} from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    BoardComponent,
    NavbarComponent,
    BoardListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    DragDropModule,
    PanelModule,
    CardModule,
    DialogModule,
    InputTextareaModule,
  ],
  providers: [
    CardItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
