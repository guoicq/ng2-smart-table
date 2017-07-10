import { Component, Input, OnInit } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({
  selector: 'lookup-viewer',
  template: `
    {{renderValue}}
  `,
})
export class LookupViewerComponent implements OnInit {
    @Input() cell: Cell;

    renderValue: string;

    ngOnInit() {
        let displayValue = '';
        let list = this.getList();
        if (list) {
            let value = this.cell.getValue();
            let selectItem = list.find(item => item.value == value);
            if (selectItem)
                displayValue = selectItem.title;
        }

        this.renderValue = displayValue;
    }

    getList() {
        let config = this.cell.getColumn().getConfig();
        if (config && config.list)
            return config.list;

        if (this.cell.getColumn().editor
            && this.cell.getColumn().editor.type == "list"
            && this.cell.getColumn().editor.config
            && this.cell.getColumn().editor.config.list)
            return this.cell.getColumn().editor.config.list;

        return null;
    }
}
