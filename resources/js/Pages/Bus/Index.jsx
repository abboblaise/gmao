import React, {useEffect, useState} from 'react';
import {Header} from '../../components'
import {FilterMatchMode, FilterOperator} from "primereact/api";
import {Button} from "primereact/button";
import {Inertia} from "@inertiajs/inertia";
import {InputText} from "primereact/inputtext";
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import TableHeader from "../../components/TableHeader";
import {useStateContext} from "../../contexts/ContextProvider";

function Index({vehicules}) {
    const [buses, setBuses] = useState([]);
    const [filters, setFilters] = useState({
        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
        'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);
    const {selectedItem, setSelectedItem} = useStateContext()

    useEffect(() => {
        setBuses(vehicules)
        setLoading(false)
    }, []);

    const handleSelected = (e) => {
        setSelectedItem(e.value)
    }

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = {...filters};
        _filters['global'].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    }
    const header = <TableHeader baseRoute="vehicule" globalFilterValue={globalFilterValue} onChangeFunction={onGlobalFilterChange}/>

    return (
        <div className="bg-white rounded-lg w-9/12 m-auto mt-4 pb-4 ">
            <Header category="Paramétrage" title="Liste des bus"/>
            <div className="w-11/12 m-auto">
                <DataTable className='p-datatable w-full' value={buses} paginator header={header} stripedRows
                           rows={10}
                           paginatorTemplate='FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowPerPageDropdown'
                           rowsPerPageOptions={[5, 10, 25, 50]} dataKey='id' rowHover selectionMode="single"
                           selection={selectedItem} onSelectionChange={handleSelected}
                           filters={filters} filterDelay='menu' loading={loading} responsiveLayout='scroll'
                           globalFilterFields={['numChassis', 'immatriculation' ]} emptyMessage="Aucune donnée à afficher"
                           currentPageReportTemplate="{first} à {last} sur {totalRecords}">
                    <Column header="N° de chassis" field='numChassis' sortable filter filterPlaceholder='Rechercher'/>
                    <Column header="Immatriculation" field='immatriculation' sortable filter filterPlaceholder='Rechercher'/>
                    <Column header="Capacité radiateur" field='capaciteRadiateur' sortable filter filterPlaceholder='Rechercher'/>
                    <Column header="Nombre de places" field='nombrePlaces' sortable filter filterPlaceholder='Rechercher'/>
                    {/*<Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>*/}
                </DataTable>
            </div>
        </div>
    );
}

export default Index;
