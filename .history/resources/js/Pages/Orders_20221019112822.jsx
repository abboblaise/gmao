import React from 'react';
import { GridComponent, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dymmy1';
import { Header } from '../components';

const Orders = () => {
    return (
        <div>
            <Header category='Page' title='Orders' />
        </div>
    );
};

export default Orders;
