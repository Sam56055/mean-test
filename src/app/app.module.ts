import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { WarningMessageComponent} from './warning-message/warning-message.component';
import { SuccessMessageComponent  } from './success-message/success-message.component';
import { SelectorComponent } from './selector/selector.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent, 
    WarningMessageComponent,
    NameEditorComponent, 
    SuccessMessageComponent, 
    SelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
