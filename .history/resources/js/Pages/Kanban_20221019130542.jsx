import React from 'react';
import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanGrid, kanbanGrid } from '../data/dymmy1';
import { Header } from '../components';

const Kanban = () => {
    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p10 bg-white rounded-3xl'>
            <Header category="App" title='Kanban' />

        </div>
    );
};

export default Kanban;
