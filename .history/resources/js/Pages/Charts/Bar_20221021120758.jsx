import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, DataLabel, Inject,  Legend, Tooltip, Column, Category } from '@syncfusion/ej2-react-charts';
import { barPrimaryXAxis, barCustomSeries, barPrimaryYAxis } from '../../data/dymmy1';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const Bar = () => {
    const { currentMode } = useStateContext()
    return (
        <div className='m-4 md:m-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <Header category='Bar' title='Olympic Medans Count - RIO' />
            <ChartComponent
                id='line-chart'
                height='420px'
                primaryXAxis={barPrimaryXAxis}
                primaryYAxis={barPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            >
                <Inject services={[Column, Tooltip, Category, DataLabel, Legend]} />
                <SeriesCollectionDirective>
                    {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    );
};

export default Bar;
