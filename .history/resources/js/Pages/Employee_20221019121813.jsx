import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject } from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from '../data/dymmy1';
import { Header } from '../components';

const Employee = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='Page' title='Employees' />
            <GridComponent
                id='gridcomp'
                dataSource={ordersData}
                allowPaging
                allowSorting
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Search]} />
            </GridComponent>
        </div>
    );
};

export default Employee;

