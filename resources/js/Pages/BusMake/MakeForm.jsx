import React, {useEffect} from 'react';
import {Header} from '../../components'
import { InputText } from 'primereact/inputtext';
import { Chips } from 'primereact/chips';
import { Button } from 'primereact/button';
import {classNames} from "primereact/utils";
import { useForm, Controller } from 'react-hook-form';
import { Inertia } from '@inertiajs/inertia'

function MakeForm({pageParams, errors}) {
    const [make, openMethod] = pageParams
    const defaultValues = {...make}
    const { control, handleSubmit, reset } = useForm({defaultValues});
    // const { control, formState: { errors }, handleSubmit, reset } = useForm({defaultValues});

    const onSubmit = async (data) => {
        if (openMethod === 'create'){
            Inertia.post(route('bus-make.store'), data)
        } else {
            Inertia.put(route('bus-make.update',make.id), data)
        }

    };
    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name]}</small>
    };
    return (
        <div className="bg-white rounded-lg w-2/5 m-auto mt-4 pb-4 relative">
            <Header category="Paramétrage" title="Fiche de marque"/>
            <div className="w-11/12 m-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                    <div className="field">
                            <span className="p-float-label">
                                <Controller name="name"
                                            control={control}
                                            render={({ field }) => (
                                                <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': errors.name })}/>
                                            )}
                                />
                                <label htmlFor="name" className={classNames({ 'p-error': errors.name })}>Nom de le marque*</label>
                            </span>
                        {getFormErrorMessage('name')}
                    </div>
                    <div className="field mt-5">
                            <span className="p-float-label">
                                <Controller name="models"
                                            control={control}
                                            rules={{ minLength: 1}}
                                            render={({ field}) => (
                                                <Chips id={field.name} {...field} className={classNames({ 'p-invalid': errors.models })}/>
                                            )}
                                />
                                <label htmlFor="models" className={classNames({ 'p-error': errors.models })}>Modèles*</label>
                            </span>
                        {getFormErrorMessage('models')}
                    </div>
                    <div className="flex justify-end items-end mb-4 mt-4 w-1/2 absolute right-0 gap-2">
                        <Button type="submit" label="Valider" className=" p-button-primary" icon="pi pi-check" iconPos="right" />
                        <Button type="button" label="Annuler" className=" p-button-warning" icon="pi pi-times" iconPos="right" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MakeForm;
