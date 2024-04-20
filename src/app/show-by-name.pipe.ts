import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showByName',
})
export class ShowByNamePipe implements PipeTransform {
  transform(value: unknown): unknown {
    return String(value).toLowerCase();
  }
}
