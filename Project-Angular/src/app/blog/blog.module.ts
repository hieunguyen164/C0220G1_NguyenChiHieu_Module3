import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  declarations: [BlogComponent, BlogEditComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class BlogModule { }
