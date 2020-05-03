import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Map.css';

const Map: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Map Container</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        Map of Current Events in the series goes here.
        <br/>
        Options for styling this include:
        <ul>
            <li>
              ion-slides (https://ionicframework.com/docs/api/slides) for educating user on first load
            </li>
            <li>
              ion-loading (https://ionicframework.com/docs/api/loading) for loading map
            </li>
            <li>
              ion-badge (https://ionicframework.com/docs/api/badge) for informational purposes, regarding the interactive map
            </li>
            <li>
              ion-popover (https://ionicframework.com/docs/api/popover) for learning more details about specific parts of the map
            </li>
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default Map;
