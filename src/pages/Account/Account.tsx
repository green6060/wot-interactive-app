import React from 'react'
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

const Account: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Account Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                This component should be accessible only to authenticated users.
                <br/>
                In this component, a user should be able to:
                <ol>
                    <li>Specify whether site info should be sorted by Book / Chapter, or Season / Episode</li>
                    <li>Change account related info, like password</li>
                </ol>
                <br/>
                Options for styling this include:
                <ul>
                    <li>
                        ion-picker (https://ionicframework.com/docs/api/picker) for selecting book / chapter or episode / season
                    </li>
                    <li>
                        ion-input (https://ionicframework.com/docs/api/input) for inputting a variety of information
                    </li>
                </ul>
            </IonContent>
        </IonPage>
    )
};

export default Account;
