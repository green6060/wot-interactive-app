/* eslint-disable no-lone-blocks */
import React, { SetStateAction } from 'react'
import { 
    IonPage, 
    IonContent, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonList, 
    IonItemDivider, 
    IonItem, 
    IonLabel, 
    IonToggle, 
    IonSegment, 
    IonSegmentButton, 
    IonButton 
} from '@ionic/react';
import { IonPick } from '../../components/IonPick/IonPick';

const Filters: React.FC = () => {
    const [filterSpoilers, setFilterSpoilers] = React.useState(true)
    const [seriesMedium, setSeriesMedium] = React.useState('')
    const [pickerResult, setPickerResult] = React.useState('')
    const [isPickerOpen, setIsPickerOpen] = React.useState(false)

    const toggleSpoilerStatus = (checked: SetStateAction<boolean>) =>{
        // Eventually, we will swap this out for useContext
        setFilterSpoilers(checked)
        if (checked === false) {
            setSeriesMedium('')
            setPickerResult('')
        }
    }

    const toggleSeriesMedium = (medium: SetStateAction<string>) =>{
        // Eventually, we will swap this out for useContext
        setSeriesMedium(medium)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Filters</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItemDivider> Spoiler Settings </IonItemDivider>
                    <IonItem>
                        <IonLabel>Remove Spoilers</IonLabel>
                        <IonToggle checked={filterSpoilers} onIonChange={e => toggleSpoilerStatus(e.detail.checked)} />
                    </IonItem>
                    
                    {/* Are Spoilers to be filtered? If so, display ion-segment book / season filter */}
                    { filterSpoilers === true && 
                        <IonSegment onIonChange={e => toggleSeriesMedium(e.detail.value!)}>
                            <IonSegmentButton value="book">
                                <IonLabel>Book</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="tvSeries">
                                <IonLabel>Amazon Series</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    }

                    {/* Are Book / Season segments toggled? If so, display ion-select book / season filter */}
                    { seriesMedium !== '' &&
                        <>
                            <IonItem>
                                <IonButton
                                    style={{width: '100%'}}
                                    onClick={() => {
                                        setIsPickerOpen(true);
                                    }}
                                >
                                    Select Book or Season
                                </IonButton>
                            </IonItem>
                                <IonItem
                                    onClick={() => {
                                        setIsPickerOpen(true);
                                    }}
                                >
                                {pickerResult !== '' && (
                                    <IonLabel  style={{textAlign: "center"}}>
                                        {pickerResult}
                                    </IonLabel>
                                )}
                            </IonItem>

                            <IonPick
                                isOpen={isPickerOpen}
                                onSave={(value:any) => {setPickerResult(value); setIsPickerOpen(false)}} 
                                onCancel={() => {setIsPickerOpen(false)}} 
                                medium={seriesMedium}
                            ></IonPick>
                        </>
                    }
                </IonList>
            </IonContent>
        </IonPage>
    )
};

export default Filters;

{/* Options for styling this include:
<ul>
    <li>
        ion-picker (https://ionicframework.com/docs/api/picker) for selecting book / chapter or episode / season
    </li>
    <li>
        ion-input (https://ionicframework.com/docs/api/input) for inputting a variety of information
    </li>
    <li>
        ion-toggle (https://ionicframework.com/docs/api/toggle) for toggeling various map filters
    </li>
    <li>
        ion-chip (https://ionicframework.com/docs/api/chip) for toggeling various map filters
    </li>
    <li>
        ion-checkbox (https://ionicframework.com/docs/api/checkbox) for toggeling various map filters
    </li>
    <li>
        ion-radio (https://ionicframework.com/docs/api/radio) for toggeling various map filters
    </li>
    <li>
        ion-fab (https://ionicframework.com/docs/api/fab) as a button, to pop out a menu housing filters
    </li>
</ul> */}
