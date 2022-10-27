import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Inject, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { LinePrimaryXAxis, lineCustomSeries, LinePrimaryYAxis } from '../../data/dymmy1';

const LineChart = () => {
    return (
        <ChartComponent>
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
            <SeriesCollectionDirective>
                {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default LineChart;
