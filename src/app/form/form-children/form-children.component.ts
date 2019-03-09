import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { ValidatorService } from 'src/app/validator.service';
@Component({
  selector: 'app-form-children',
  templateUrl: './form-children.component.html',
  styleUrls: ['./form-children.component.scss'],
  providers: [ValidatorService]
})
export class FormChildrenComponent implements OnInit {
  @Input() isVisible: boolean;
  @Input() id: string;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter;

  controlArray: any = [];
  inValidObj: object;
  inValidTips: object = {
    name: '姓名',
    sex: '性别',
    age: '年龄'
  }
  constructor(
    private message: NzMessageService,
    private validtorService: ValidatorService
  ) {
    this.inValidObj = {};
  }

  ngOnInit() {
    this.onAdd();
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['id']) {
      if (changes['id'].currentValue) {
        console.log('get' + this.id)
      }
    }
  }
  handleCancel(flag: boolean): void {
    if (flag) {
      this.inValidObj = this.validtorService.validateRequired(this.controlArray, [
        "name",
        "sex",
        "age"
      ])
    } else {
      this.closeModal.emit(flag);
    }
  }
  onAdd(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    this.controlArray.push({
      name: '',
      sex: '',
      age: '',
    })
  }

  onKeyUp(key: number, value: string) {
    if (this.inValidObj['key'] === key && this.inValidObj['value'] === value) {
      this.inValidObj = {};
    }
  }

  removeField(i: { id: number, controlInstance: string }, e: MouseEvent): void {

  }


  submitForm(): void {
  }
}
