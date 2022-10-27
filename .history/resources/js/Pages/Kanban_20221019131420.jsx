import React from 'react';
import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanGrid, kanbanData } from '../data/dymmy1';
import { Header } from '../components';

const Kanban = () => {
    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p10 bg-white rounded-3xl'>
            <Header category="App" title='Kanban' />
            <KanbanComponent
                id='kanban'
                dataSource={kanbanData}
                cardSettings={{ contentField: 'Summary', headerField: 'id' }}
                keyField="Status"
            >
                <ColumnsDirective>
                    {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                </ColumnsDirective>
            </KanbanComponent>
        </div>
    );
};

export default Kanban;
