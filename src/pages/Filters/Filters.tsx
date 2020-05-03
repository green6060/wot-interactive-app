/* eslint-disable no-lone-blocks */
import React from 'react'
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItemDivider, IonItem, IonLabel, IonToggle, IonSegment, IonSegmentButton } from '@ionic/react';

const Filters: React.FC = () => {
    const [filterSpoilers, setFilterSpoilers] = React.useState(true)
    const [seriesMedium, setSeriesMedium] = React.useState('')

    const toggleSpoilerStatus = (e:CustomEvent) =>{
        // Eventually, we will swap this out for useContext
        setFilterSpoilers(e.detail.event)
        if (e.detail.event === false) {
            setSeriesMedium('')
        }
    }

    const toggleSeriesMedium = (e:CustomEvent) =>{
        // Eventually, we will swap this out for useContext
        setSeriesMedium(e.detail.event)
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
                        <IonToggle checked={filterSpoilers} onIonChange={e => toggleSpoilerStatus(e)} />
                    </IonItem>
                    
                    {/* Are Spoilers to be filtered? If so, display ion-segment book / season filter */}
                    { filterSpoilers === true && 
                    <IonSegment onIonChange={e => toggleSeriesMedium(e)}>
                        <IonSegmentButton value="book">
                            <IonLabel>Book</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="tvSeries">
                            <IonLabel>Amazon Series</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>}
                    {/* Are Book / Season segments toggled? If so, display ion-select book / season filter */}

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
