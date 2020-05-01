import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
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

export default Home;
