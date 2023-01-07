import React from 'react';
import {Header} from '../../components'
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {classNames} from "primereact/utils";
import {useForm, Controller} from 'react-hook-form';
import {Inertia} from '@inertiajs/inertia'
import {InputNumber} from "primereact/inputnumber";
import {TabView, TabPanel} from 'primereact/tabview';
import { Dropdown } from 'primereact/dropdown';

function BusForm({pageParams, errors}) {
    const [bus, openMethod] = pageParams
    const defaultValues = {...bus}
    const {register, control, handleSubmit} = useForm({defaultValues});
    const engineType = [
        {name: 'Diesel', code: 'DIESEL'},
        {name: 'Essence', code: 'ESSENCE'},
        {name: 'Hybride', code: 'HYBRIDE'},
        {name: 'Electrique', code: 'ELECTRIQUE'}
    ];
    const onSubmit = async (data) => {
        if (openMethod === 'create') {
            Inertia.post(route('vehicule.store'), data)
        } else {
            Inertia.put(route('vehicule.update', bus.id), data)
        }

    };
    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name]}</small>
    };
    return (

        <div className="bg-white rounded-lg w-4/6 m-auto pb-4 mt-10">
            <Header category="Paramétrage" title="Fiche de bus"/>
            <div className="w-11/12 m-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="field mt-8">
                            <span className="p-float-label">
                                <Controller name="numChassis"
                                            control={control}
                                            render={({field}) => (
                                                <InputText id={field.name} {...field} autoFocus
                                                           className={classNames({'p-invalid': errors.numChassis})}/>
                                            )}
                                />
                                <label htmlFor="numChassis" className={classNames({'p-error': errors.name})}>N° de chassis*</label>
                            </span>
                            {getFormErrorMessage('numChassis')}
                        </div>
                        <div className="field mt-8">
                            <span className="p-float-label">
                                <Controller name="immatriculation"
                                            control={control}
                                            render={({field}) => (
                                                <InputText id={field.name} {...field}
                                                           className={classNames({'p-invalid': errors.immatriculation})}/>
                                            )}
                                />
                                <label htmlFor="immatriculation" className={classNames({'p-error': errors.name})}>N° immatriculation*</label>
                            </span>
                            {getFormErrorMessage('immatriculation')}
                        </div>
                        <div className="field mt-8">
                            <span className="p-float-label">
                                <Controller name="capaciteRadiateur"
                                            control={control}
                                            render={({field}) => (
                                                <InputNumber id={field.name} value={field.value}
                                                             onChange={(e) => field.onChange(e.value)}
                                                             className={classNames({'p-invalid': errors.capaciteRadiateur})}/>
                                            )}
                                />
                                <label htmlFor="capaciteRadiateur" className={classNames({'p-error': errors.name})}>Capacité du radiateur</label>
                            </span>
                            {getFormErrorMessage('capaciteRadiateur')}
                        </div>
                        <div className="field mt-8">
                            <span className="p-float-label">
                                <Controller name="nombrePlaces"
                                            control={control}
                                            render={({field}) => (
                                                <InputNumber id={field.name} value={field.value}
                                                             onChange={(e) => field.onChange(e.value)}
                                                             className={classNames({'p-invalid': errors.nombrePlaces})}/>
                                            )}
                                />
                                <label htmlFor="nombrePlaces" className={classNames({'p-error': errors.name})}>Nombre de places</label>
                            </span>
                            {getFormErrorMessage('nombrePlaces')}
                        </div>
                    </div>
                    <div className="mt-4">
                        <TabView>
                            <TabPanel header="Moteur">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="moteur.numSerie"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputText id={field.name} {...field} autoFocus
                                                                       className={classNames({'p-invalid': errors['moteur.numSerie']})}/>
                                                        )}
                                            />
                                            <label htmlFor="moteur.numSerie" className={classNames({'p-error': errors['moteur.numSerie']})}>Numéro de série</label>
                                        </span>
                                        {getFormErrorMessage('moteur.numSerie')}
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="moteur.marque"
                                                        control={control}
                                                        render={({field}) => (<InputText id={field.name} {...field}/>)}
                                            />
                                            <label htmlFor="moteur.marque">Marque du moteur</label>
                                        </span>
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="moteur.modele"
                                                        control={control}
                                                        render={({field}) => (<InputText id={field.name} {...field}/>)}
                                            />
                                            <label htmlFor="moteur.modele">Modèle du moteur</label>
                                        </span>
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="moteur.type"
                                                        control={control}
                                                        render={({field}) => (
                                                            <Dropdown id={field.name} optionValue="code" value={field.value.code} onChange={(e) => field.onChange(e.value)} options={engineType} optionLabel="name" />
                                                        )}
                                            />
                                            <label htmlFor="moteur.type">Type du moteur</label>
                                        </span>
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="moteur.puissance"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputNumber id={field.name} value={field.value}
                                                                         onChange={(e) => field.onChange(e.value)}/>
                                                        )}
                                            />
                                            <label htmlFor="moteur.puissance">Puissance du moteur</label>
                                        </span>
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="moteur.couple"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputNumber id={field.name} value={field.value}
                                                                         onChange={(e) => field.onChange(e.value)}/>
                                                        )}
                                            />
                                            <label htmlFor="moteur.couple">Couple du moteur</label>
                                        </span>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel header="Batterie">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="batterie.numSerie"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputText id={field.name} {...field} autoFocus
                                                                       className={classNames({'p-invalid': errors['batterie.numSerie']})}/>
                                                        )}
                                            />
                                            <label htmlFor="batterie.numSerie" className={classNames({'p-error': errors['batterie.numSerie']})}>Numéro de série</label>
                                        </span>
                                        {getFormErrorMessage('batterie.numSerie')}
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="batterie.description"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputText id={field.name} {...field} className={classNames({'p-invalid': errors["batterie.description"]})}/>
                                                        )}
                                            />
                                            <label htmlFor="batterie.description" className={classNames({'p-error': errors["batterie.description"]})}>Description</label>
                                        </span>
                                        {getFormErrorMessage("batterie.description")}
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="batterie.tension"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputNumber id={field.name} value={field.value}
                                                                         onChange={(e) => field.onChange(e.value)}/>
                                                        )}
                                            />
                                            <label htmlFor="batterie.tension">Tension</label>
                                        </span>
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="batterie.intensite"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputNumber id={field.name} value={field.value} mode="decimal"
                                                                         onChange={(e) => field.onChange(e.value)}/>
                                                        )}
                                            />
                                            <label htmlFor="batterie.intensite">Intensité</label>
                                        </span>
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="batterie.puissance"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputNumber id={field.name} value={field.value} mode="decimal"
                                                                         onChange={(e) => field.onChange(e.value)}/>
                                                        )}
                                            />
                                            <label htmlFor="batterie.puissance" className={classNames({'p-error': errors.batterie})}>Puissance</label>
                                        </span>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel header="Démarreur">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="demarreur.numSerie"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputText id={field.name} {...field} autoFocus
                                                                       className={classNames({'p-invalid': errors["demarreur.numSerie"]})}/>
                                                        )}
                                            />
                                            <label htmlFor="demarreur.numSerie" className={classNames({'p-error': errors["demarreur.numSerie"]})}>Numéro de série</label>
                                        </span>
                                        {getFormErrorMessage('demarreur.numSerie')}
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="demarreur.nom"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputText id={field.name} {...field} className={classNames({'p-invalid': errors["demarreur.nom"]})}/>
                                                        )}
                                            />
                                            <label htmlFor="demarreur.nom" className={classNames({'p-error': errors["demarreur.nom"]})}>Description</label>
                                        </span>
                                        {getFormErrorMessage('demarreur.nom')}
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="demarreur.type"
                                                        control={control}
                                                        render={({field}) => (<InputText id={field.name} {...field}/>)}
                                            />
                                            <label htmlFor="demarreur.type">type</label>
                                        </span>
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="demarreur.voltage"
                                                        control={control}
                                                        render={({field}) => (<InputText id={field.name} {...field}/>)}
                                            />
                                            <label htmlFor="demarreur.voltage">Voltage</label>
                                        </span>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel header="Alternateur">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="alternateur.numSerie"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputText id={field.name} {...field} autoFocus
                                                                       className={classNames({'p-invalid': errors["alternateur.numSerie"]})}/>
                                                        )}
                                            />
                                            <label htmlFor="alternateur.numSerie" className={classNames({'p-error': errors["alternateur.numSerie"]})}>Numéro de série</label>
                                        </span>
                                        {getFormErrorMessage('alternateur.numSerie')}
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="alternateur.nom"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputText id={field.name} {...field} className={classNames({'p-invalid': errors["alternateur.nom"]})}/>
                                                        )}
                                            />
                                            <label htmlFor="alternateur.nom" className={classNames({'p-error': errors["alternateur.nom"]})}>Description</label>
                                        </span>
                                        {getFormErrorMessage('alternateur.nom')}
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="alternateur.type"
                                                        control={control}
                                                        render={({field}) => (<InputText id={field.name} {...field}/>)}
                                            />
                                            <label htmlFor="alternateur.type">type</label>
                                        </span>
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="alternateur.voltage"
                                                        control={control}
                                                        render={({field}) => (<InputText id={field.name} {...field}/>)}
                                            />
                                            <label htmlFor="alternateur.voltage">Voltage</label>
                                        </span>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel header="Injecteur">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="injecteur.numSerie"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputText id={field.name} {...field} autoFocus
                                                                       className={classNames({'p-invalid': errors["injecteur.numSerie"]})}/>
                                                        )}
                                            />
                                            <label htmlFor="injecteur.numSerie" className={classNames({'p-error': errors["injecteur.numSerie"]})}>Numéro de série</label>
                                        </span>
                                        {getFormErrorMessage('injecteur.numSerie')}
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="injecteur.description"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputText id={field.name} {...field} className={classNames({'p-invalid': errors["injecteur.description"]})}/>
                                                        )}
                                            />
                                            <label htmlFor="injecteur.description" className={classNames({'p-error': errors["injecteur.description"]})}>Description</label>
                                        </span>
                                        {getFormErrorMessage('injecteur.description')}
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="injecteur.type"
                                                        control={control}
                                                        render={({field}) => (<InputText id={field.name} {...field}/>)}
                                            />
                                            <label htmlFor="injecteur.type">type</label>
                                        </span>
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="injecteur.tarage"
                                                        control={control}
                                                        render={({field}) => (<InputText id={field.name} {...field}/>)}
                                            />
                                            <label htmlFor="injecteur.tarage">Tarage</label>
                                        </span>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel header="Pompe à injection">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="pompeInjection.numSerie"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputText id={field.name} {...field} autoFocus
                                                                       className={classNames({'p-invalid': errors['pompeInjection.numSerie']})}/>
                                                        )}
                                            />
                                            <label htmlFor="pompeInjection.numSerie" className={classNames({'p-error': errors['pompeInjection.numSerie']})}>Numéro de série</label>
                                        </span>
                                        {getFormErrorMessage('pompeInjection.numSerie')}
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="pompeInjection.nom"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputText id={field.name} {...field} className={classNames({'p-invalid': errors["pompeInjection.nom"]})}/>
                                                        )}
                                            />
                                            <label htmlFor="pompeInjection.nom" className={classNames({'p-error': errors["pompeInjection.nom"]})}>Description</label>
                                        </span>
                                        {getFormErrorMessage('pompeInjection.nom')}
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="pompeInjection.type"
                                                        control={control}
                                                        render={({field}) => (<InputText id={field.name} {...field}/>)}
                                            />
                                            <label htmlFor="pompeInjection.type">type</label>
                                        </span>
                                    </div>
                                    <div className="field mt-8">
                                        <span className="p-float-label">
                                            <Controller name="pompeInjection.debit"
                                                        control={control}
                                                        render={({field}) => (
                                                            <InputNumber id={field.name} value={field.value}
                                                                         onChange={(e) => field.onChange(e.value)}/>
                                                        )}
                                            />
                                            <label htmlFor="pompeInjection.debit">Débit</label>
                                        </span>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabView>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <div></div>
                        <div className="flex items-end gap-4">
                            <Button type="submit" label="Valider" className=" p-button-primary" icon="pi pi-check"
                                    iconPos="right"/>
                            <Button type="button" onClick={() => Inertia.get(route("vehicule.index"))} label="Annuler"
                                    className=" p-button-warning" icon="pi pi-times" iconPos="right"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BusForm;
