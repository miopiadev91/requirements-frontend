import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { DropdownComponent } from '../../../elements/dropdown/dropdown.component';
import { AikitHeadComponent } from '../../../elements/short-cods/aikit/aikit-head/aikit-head.component';
import { Select2Component } from '../../../plugins/select2/select2.component';
import { ColorPickerModule } from 'ngx-color-picker';

import { ViewContainerRef } from '@angular/core';

import { ColorPickerService, Cmyk } from 'ngx-color-picker';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [
    FormsModule,
    MatSliderModule,
    MatFormFieldModule,
    BreadcrumbComponent,
    AikitHeadComponent,
    DropdownComponent,
    Select2Component,
    ColorPickerModule
  ],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  value = 20;

  breadcrumbList = {
    breadcrumb_path: 'AIKit',
    currentURL: 'Auto Writer',
  }

  headData = {
    alert_msg: 'This is a demo of AIKit plugin made for you to test the experience of using the plugin.',
    alert_desc: 'AIKit Chatbot allows you to create a chatbot that can be used on your website. You, or your users can use it to answer questions and provide support about your products or services.'
  }

  dropdown_item = {
    select: 'England',
    value: ['England', 'India', 'UAE'],
    image:['assets/images/svg/england.svg', 'assets/images/svg/india.svg', 'assets/images/svg/united-arab-emirates.svg']
  }

  select2_chatbot_model = [
    {
      name: 'gpt-3.5-turbo',
    },
    {
      name: 'gpt-3.6-turbo',
    }
  ];
  select2_chatbot_on = [
    {
      name: 'Frontend Only',
    },
    {
      name: 'Backend Only',
    }
  ];
  select2_chatbot_user = [
    {
      name: 'All',
    },
    {
      name: 'One',
    }
  ];


  public toggle: boolean = false;

  public rgbaText: string = '';

  public colorList = [
    { key: "flame", value: "#8743DF", friendlyName: "Flame" },
    { key: "orange", value: "#2c2c2c", friendlyName: "Orange" },
    { key: "infrared", value: "#495A69", friendlyName: "Infrared" },
    { key: "male", value: "#9084B1", friendlyName: "Male Color" },
    { key: "female", value: "#9084B1", friendlyName: "Female Color" },
    { key: "paleyellow", value: "#0d99ff", friendlyName: "Pale Yellow" },
    { key: "gargoylegas", value: "#fde84e", friendlyName: "Gargoyle Gas" },
    { key: "androidgreen", value: "#9ac53e", friendlyName: "Android Green" },
    { key: "carribeangreen", value: "#05d59e", friendlyName: "Carribean Green" },
    { key: "bluejeans", value: "#5bbfea", friendlyName: "Blue Jeans" },
    { key: "cyancornflower", value: "#1089b1", friendlyName: "Cyan Cornflower" },
    { key: "warmblack", value: "#06394a", friendlyName: "Warm Black" },
  ];

  public presetValues: string[] = [];

  public selectedColor: string = 'color1';

  public cmykColor: Cmyk = new Cmyk(0, 0, 0, 0);

  constructor(public vcRef: ViewContainerRef, private cpService: ColorPickerService) {
    this.presetValues = this.getColorValues();
  }

  getColorValues() {
    return this.colorList.map(c => c.value);
  }


  public onEventLog(event: string, data: any): void {
    console.log(event, data);
  }

  public onChangeColorCmyk(color: string): Cmyk {
    const hsva = this.cpService.stringToHsva(color);

    if (hsva) {
      const rgba = this.cpService.hsvaToRgba(hsva);

      return this.cpService.rgbaToCmyk(rgba);
    }

    return new Cmyk(0, 0, 0, 0);
  }

  public onChangeColorHex8(color: string): string {
    const hsva = this.cpService.stringToHsva(color, true);

    if (hsva) {
      return this.cpService.outputFormat(hsva, 'rgba', null);
    }

    return '';
  }
}
