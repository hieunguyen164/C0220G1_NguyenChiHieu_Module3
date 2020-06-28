import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CalculatorComponent} from './calculator/calculator.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';
import {NameCardParentComponent} from './name-card-parent/name-card-parent.component';
import {PetComponent} from './pet/pet.component';
import {ProgressBarParentComponent} from './progress-bar-parent/progress-bar-parent.component';
import {ProgressBarDynamicComponent} from './progress-bar-dynamic/progress-bar-dynamic.component';
import {ProgressBarConfigComponent} from './progress-bar-config/progress-bar-config.component';
import {CountdownTimerParentComponent} from './countdown-timer-parent/countdown-timer-parent.component';
import {TodoComponent} from './todo/todo.component';
import {ParentComponent} from './parent/parent.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {DictonaryPageComponent} from './dictonary-page/dictonary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog/blog-detail/blog-detail.component';
import {BlogEditComponent} from './blog/blog-edit/blog-edit.component';

const routes: Routes = [
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'color-picker',
    component: ColorPickerComponent
  },
  {
    path: 'font-size-editor',
    component: FontSizeEditorComponent
  },
  {
    path: 'name-card-parent',
    component: NameCardParentComponent
  },
  {
    path: 'pet',
    component: PetComponent
  },
  {
    path: 'progress-bar-parent',
    component: ProgressBarParentComponent
  },
  {
    path: 'progress-bar-dynamic',
    component: ProgressBarDynamicComponent
  },
  {
    path: 'progress-bar-config',
    component: ProgressBarConfigComponent
  },
  {
    path: 'countdown-timer-parent',
    component: CountdownTimerParentComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'register-form',
    component: RegisterFormComponent
  },
  {
    path: 'login-form',
    component: LoginFormComponent
  },
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'dictionary',
    component: DictonaryPageComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetailComponent,
      }
    ]
  },
  {
    path: 'image-gallery',
    component: ImageGalleryComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }, {
    path: 'blog/:id',
    component: BlogDetailComponent
  }, {
    path: 'blog/:id/edit',
    component: BlogEditComponent
  }
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
