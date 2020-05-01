import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { help, settings, map } from 'ionicons/icons';
import Home from './pages/Home/Home';
import Sandbox from './pages/Sandbox/Sandbox'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Account from './pages/Account/Account';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
          <IonRouterOutlet>
              <Redirect exact path="/" to="/account" />
              <Route exact path="/account"  render={() => <Account/>}/>
              <Route exact path="/home"  render={() => <Home/>}/>
              <Route exact path="/sandbox"  render={() => <Sandbox/>}/>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                  <IonIcon icon={map} />
                  <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="account" href="/account">
                  <IonIcon icon={settings}/>
                  <IonLabel>Account</IonLabel>
              </IonTabButton>
              <IonTabButton tab="sandbox" href="/sandbox">
                  <IonIcon icon={help} />
                  <IonLabel>Sandbox</IonLabel>
              </IonTabButton>
          </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
