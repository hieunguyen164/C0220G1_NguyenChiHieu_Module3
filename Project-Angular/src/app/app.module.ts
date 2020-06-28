import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {GalleryConfig} from './image-gallery/token';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';
import {PetComponent} from './pet/pet.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarConfigComponent} from './progress-bar-config/progress-bar-config.component';
import {ProgressBarDynamicComponent} from './progress-bar-dynamic/progress-bar-dynamic.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {NameCardParentComponent} from './name-card-parent/name-card-parent.component';
import {ProgressBarParentComponent} from './progress-bar-parent/progress-bar-parent.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {CountdownTimerParentComponent} from './countdown-timer-parent/countdown-timer-parent.component';
import {TodoComponent} from './todo/todo.component';
import {ChildComponent} from './child/child.component';
import {ParentComponent} from './parent/parent.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {DictonaryPageComponent} from './dictonary-page/dictonary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ImageGalleryModule} from './image-gallery/image-gallery.module';
import {BlogModule} from './blog/blog.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    CalculatorComponent,
    ColorPickerComponent,
    NameCardComponent,
    ProgressBarConfigComponent,
    ProgressBarDynamicComponent,
    ProgressBarComponent,
    NameCardParentComponent,
    ProgressBarParentComponent,
    CountdownTimerComponent,
    CountdownTimerParentComponent,
    TodoComponent,
    ChildComponent,
    ParentComponent,
    RegisterFormComponent,
    LoginFormComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictonaryPageComponent,
    DictionaryDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    MatSliderModule,
    MatProgressBarModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ImageGalleryModule,
    AppRoutingModule,
    HttpClientModule,
    BlogModule
  ],
  providers: [{provide: GalleryConfig, useValue: 2}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
