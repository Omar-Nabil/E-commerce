import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() getcategories:string[] = [];
  @Output() alertCategory = new EventEmitter<string>();

  changeHappend(event:any) {
    this.alertCategory.emit(event);
  }
}
