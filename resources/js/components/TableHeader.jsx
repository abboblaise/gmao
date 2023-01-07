import React from "react";
import {Button} from "primereact/button";
import {Inertia} from "@inertiajs/inertia";
import {InputText} from "primereact/inputtext";
import {useStateContext} from "../contexts/ContextProvider";
import {Toolbar} from "primereact/toolbar";

const TableHeader = ({baseRoute, globalFilterValue, onChangeFunction}) => {
    const {selectedItem} = useStateContext()
    const  leftContent = () => (
        <div className='flex gap-2'>
            <Button label="Ajouter" icon="pi pi-plus" className="p-button-succes mr-2 p-button-rounded" onClick={()=>Inertia.get(route(`${baseRoute}.create`))} />
            <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => Inertia.get(route(`${baseRoute}.edit`,selectedItem))} disabled={!selectedItem} />
        </div>
    )
    const rightContent = () => (
        <div className='text-semibold text-xl'>
                    <span className='p-input-icon-left'>
                      <i className='pi pi-search'/>
                      <InputText value={globalFilterValue} onChange={onChangeFunction}
                                 placeholder="Saisissez votre recherche"/>
                  </span>
        </div>
    )
    return (
        <Toolbar left={leftContent} right={rightContent} />
    )
}
export default TableHeader
