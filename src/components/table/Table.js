import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from '@/components/table/table.template';

export class Table extends ExcelComponent {
    static className = 'exel__table'
    
    toHTML() {
        return createTable(30)
    }
}
