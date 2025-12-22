import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-panel.component.html',
  styleUrl: './color-panel.component.css'
})
export class ColorPanelComponent {
  @Output() emitColor: EventEmitter<string> = new EventEmitter();

  colorsData = [
    {
      color: '#6e1d96',
      value: 'rgba(237, 223, 255, 0.5)',
    },
    {
      color: '#009886',
      value: 'rgba(208, 251, 225, 0.5)',
    },
    {
      color: '#208eed',
      value: 'rgba(211, 230, 249, 0.5)',
    },

    {
      color: '#b36619',
      value: 'rgba(255, 237, 210, 0.5)',
    },
    {
      color: '#ff5959',
      value: 'rgba(255, 214, 211, 0.5)',
    },
    {
      color: '#ef34ac',
      value: 'rgb(255 201 236 / 51%)',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onColorEmit(color: string) {
    this.emitColor.emit(color);
  }
}
