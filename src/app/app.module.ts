import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** 基础模块 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/** 本土化 */
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormParentComponent } from './form/form-parent/form-parent.component';
import { FormChildrenComponent } from './form/form-children/form-children.component';
import { ValidatorService } from './validator.service';

@NgModule({
  declarations: [
    AppComponent,
    FormParentComponent,
    FormChildrenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
