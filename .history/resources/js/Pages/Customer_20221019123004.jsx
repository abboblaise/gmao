import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dymmy1';
import { Header } from '../components';

const Customer = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='Page' title='Customers' />
            <GridComponent
                dataSource={customersData}
                allowPaging
                allowSorting
                toolbar={['Search']}
                width='auto'
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar]} />
            </GridComponent>
        </div>
    );
};

export default Customer;
