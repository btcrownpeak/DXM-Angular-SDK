import {Component, Input} from '@angular/core';
import { CmsComponent, CmsField, CmsFieldTypes } from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=ComponentWithDisableDragDropFalse]',
    template: `
        <div>
            <h1>{{ field1 }}</h1>
        </div>
    `
})
export class ComponentWithDisableDragDropFalse extends CmsComponent {
    @Input() data:any;
    field1: CmsField = new CmsField("Field1", CmsFieldTypes.TEXT);
    cmsDisableDragDrop: boolean = false;
}

