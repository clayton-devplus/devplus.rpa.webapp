import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'CPFCNPJ' })
export class CPFCNPJPipe implements PipeTransform {

    transform(value: string) {
        if (value.toString().length === 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '\$1.\$2.\$3\-\$4');
        }
        if (value.toString().length === 14) {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");
        }
        else
            return value
    }
}