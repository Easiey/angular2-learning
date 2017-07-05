import {Pipe} from '@angular/core';
import Moment from 'moment';
import 'moment/locale/pl';

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe {
  transform(value) {
    if (value && (value instanceof Date || typeof value === 'number')) {
      return new Moment(value).locale('pl').fromNow();
    }
  }
}
