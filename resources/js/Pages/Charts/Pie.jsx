import React from 'react';
import { pieChartData } from '../../data/dymmy1';
import { ChartsHeader, Pie as PieChart } from '../../components';

const Pie = () => {
    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <ChartsHeader category='Pie' title='Project cost Breakdown' />
            <div className='w-full'>
                <PieChart id='chat-pie' data={pieChartData} legendVisibility height='full' />
            </div>
        </div>
    );
};

export default Pie;
