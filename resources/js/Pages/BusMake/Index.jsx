import React, {useState, useEffect} from 'react';
import {Header} from '../../components';
import {FilterMatchMode, FilterOperator} from 'primereact/api';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import Splitter from 'm-react-splitters';
import 'm-react-splitters/lib/splitters.css';
import {useStateContext} from "../../contexts/ContextProvider";
import TableHeader from "../../components/TableHeader";

const Index = ({makes}) => {
    const [allMakes, setAllMakes] = useState([]);
    const [models, setModels] = useState([]);
    const [filters, setFilters] = useState({
        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
        'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);
    const {selectedItem, setSelectedItem} = useStateContext()

    useEffect(() => {
        setAllMakes(makes)
        setLoading(false)

    }, [])

    const handleSelected = (e) => {
        setSelectedItem(e.value)
        setModels(e.value.models)
    }

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = {...filters};
        _filters['global'].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    const header = <TableHeader baseRoute="bus-make" globalFilterValue={globalFilterValue} onChangeFunction={onGlobalFilterChange}/>

    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p10 bg-white rounded-3xl'>
            <Header category='Paramétrage' title='Marques de bus'/>
            <Splitter
                position="vertical"
                primaryPaneMinWidth={100}
                primaryPaneMinHeight={80}
                dispatchResize={true}
                postPoned={false}
            >
                <div>
                    <DataTable className='p-datatable w-full' value={allMakes} paginator header={header} stripedRows
                               rows={10}
                               paginatorTemplate='FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowPerPageDropdown'
                               rowsPerPageOptions={[5, 10, 25, 50]} dataKey='id' rowHover selectionMode="single"
                               selection={selectedItem} onSelectionChange={handleSelected}
                               filters={filters} filterDelay='menu' loading={loading} responsiveLayout='scroll'
                               globalFilterFields={['name']} emptyMessage="Aucune donnée à afficher"
                               currentPageReportTemplate="{first} à {last} sur {totalRecords}">
                        <Column header="Intitulé" field='name' sortable filter filterPlaceholder='Rechercher un intitulé'/>
                        {/*<Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>*/}
                    </DataTable>
                </div>
                <div>
                    <DataTable className='p-datatable w-full' value={models} paginator  stripedRows rows={10}
                               paginatorTemplate='FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowPerPageDropdown'
                               rowsPerPageOptions={[5, 10, 25, 50]} dataKey='id' emptyMessage="Aucune donnée à afficher"
                               currentPageReportTemplate="{first} à {last} sur {totalRecords}">
                        <Column header="Modèle" field='name' sortable filter/>
                    </DataTable>
                </div>
            </Splitter>
        </div>
    );
};

export default Index;
