import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
export const inValildateDictionary = {
  name: '姓名',
  sex: '性别',
  age: '年龄'
}
@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  validateRequired(data: any, validateKey: Array<string>): object {
    let arr = [];
    let valid = true;
    let inValidObj = {};
    !data.length ? arr.push(data) : arr = data
    
    arr.forEach((c: object, idx: number) => {
      if (valid) {
        for (let i = 0; i < validateKey.length; i++) {
          if (valid) {
            if (c[validateKey[i]] === undefined || c[validateKey[i]] === '' || c[validateKey[i]] === null) {
              inValidObj['key'] = idx;
              inValidObj['value'] = validateKey[i];
              valid = false;
              i = validateKey.length - 1;
            }
          }
        }
      }
    })
    if (!valid) {
      this.message.error(inValildateDictionary[inValidObj['value']] + '字段不能为空');
      console.log(inValidObj)
    } else {
      this.message.success('操作成功');
    }
    return inValidObj;
  }
  constructor(
    private message: NzMessageService
  ) { }
}
