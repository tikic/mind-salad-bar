import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
    transform(value: string, size: number, trail = '...'): string {
        if (!value) {
            return '';
        }
        if (size === undefined) {
            return value;
        }

        if (value.length > size) {
            return value.substring(0, size - 3) + trail;
        }

        return value;
    }
}
