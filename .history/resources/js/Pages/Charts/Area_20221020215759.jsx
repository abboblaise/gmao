import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries, Inject, DateTime, Legend, } from '@syncfusion/ej2-react-charts';
import { areaPrimaryXAxis, areaCustomSeries, areaPrimaryYAxis } from '../../data/dymmy1';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const Area = () => {
    const { currentMode } = useStateContext()
    return (
        <ChartComponent
            id='line-chart'
            height='420px'
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
            <Inject services={[SplineAreaSeries, DateTime, Legend]} />
            <SeriesCollectionDirective>
                {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default Area;
