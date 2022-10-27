import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';

const Doughnut = (id, data, legendVisibility, height) => {
    const {currentMode} = useStateContext()
    return (
        <AccumulationChartComponent
            id={id}
            legendSettings={{ visible: legendVisibility, background: 'white' }}
            height={height}
            background={currentMode === 'Dark' ? "#33373E" : "#fff"}
            tooltip={{enable: true}}
        >
            <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective
                    
                />
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    );
};

export default Doughnut;
