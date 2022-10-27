import React from 'react';
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { scheduleData } from '../data/dymmy1';
import { Header } from '../components';

const Calendar = () => {
    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p10 bg-white rounded-3xl'>
            <Header category="App" title='Calendar' />
            <ScheduleComponent>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
            </ScheduleComponent>
        </div>
    );
};

export default Calendar;
