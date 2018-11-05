import { Pipe, PipeTransform } from '@angular/core';
import { pantherUtils } from '../utils/panther-utils';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(mainArr: any[], searchText: string, property: string): any {
        return pantherUtils.filterArrayByString(mainArr, searchText);
    }
}
