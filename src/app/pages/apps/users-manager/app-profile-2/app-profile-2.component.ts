import { Component, VERSION  } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { LightgalleryModule } from 'lightgallery/angular';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
@Component({
  selector: 'app-app-profile-2',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    LightgalleryModule, 
    RouterLink
  ],
  templateUrl: './app-profile-2.component.html',
  styleUrl: './app-profile-2.component.css'
})
export class AppProfile2Component {
  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom, lgThumbnail]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
  };
  breadcrumbList = {
    breadcrumb_path: 'Apps',
    currentURL: 'Profile 2',
  }
}
