import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-parent',
  templateUrl: './form-parent.component.html',
  styleUrls: ['./form-parent.component.scss']
})
export class FormParentComponent implements OnInit {
  id: string;
  isVisible: boolean;
  constructor() { }

  ngOnInit() {
  }

  toChildren(): void {
    this.id = "1";
    this.isVisible = true;
  }

  closeModal(flag: boolean): void {

    this.isVisible = false;
  }
}
