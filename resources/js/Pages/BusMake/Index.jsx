import React, {useState, useEffect, useRef} from 'react';
import {Header} from '../../components';
import {FilterMatchMode, FilterOperator} from 'primereact/api';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Splitter from 'm-react-splitters';
import 'm-react-splitters/lib/splitters.css';
import { Link } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'



const Index = ({makes}) => {
    const [allMakes, setAllMakes] = useState([]);
    const [selectedMake, setSelectedMake] = useState(null);
    const [models, setModels] = useState([]);
    const [filters, setFilters] = useState({
        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
        'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [dialog, setDialog] = useState(false);

    let emptyMake = {
        name: "undefined",
        models: undefined,
    };
    const [make, setMake] = useState(emptyMake);
    const [submitted, setSubmitted] = useState(false);
    const toast = useRef(null);



    useEffect(() => {
        setMake(emptyMake)
        setAllMakes(makes)
        setLoading(false)

    }, [])

    const handleSelected = (e) => {
        setSelectedMake(e.value)
        setModels(e.value.models)
        setMake(e.value)
    }


    //  console.log(allMakes)

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = {...filters};
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }
    const renderHeader = () => {
        return (
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    {/*<Link href={route('bus-make.create')}>*/}
                    {/*    <span label="Ajouter" icon="pi pi-plus" className="p-button-succes mr-2 p-button-rounded">Ajouter</span>*/}
                    {/*</Link>*/}
                    <Button label="Ajouter" icon="pi pi-plus" className="p-button-succes mr-2 p-button-rounded" onClick={()=>Inertia.get(route('bus-make.create'))} />
                    <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => Inertia.get(route('bus-make.edit',selectedMake))} disabled={!selectedMake} />
                </div>
                <div className='text-semibold text-lg'>
                    <span className='p-input-icon-left'>
                      <i className='pi pi-search'/>
                      <InputText value={globalFilterValue} onChange={onGlobalFilterChange}
                                 placeholder="Keyword Search"/>
                  </span>
                </div>
            </div>
        )
    }

    const openNew = () => {
        setMake(emptyMake)
        setDialog(true)
        console.log(make)
    }

    const hideDialog = () => {
        setSubmitted(false);
        setDialog(false);
    }

    const onSubmit = e => {

        e.preventDefault();
        console.log(data);
        reset();
    }

    const editMake = () => {
        setDialog(true);
        console.log(make)
    }

    const header = renderHeader();

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
                               selection={selectedMake} onSelectionChange={handleSelected}
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
