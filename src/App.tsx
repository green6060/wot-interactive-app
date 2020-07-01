import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs, IonSplitPane, IonMenu, IonContent, IonList, IonItem, IonRouterLink } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { help, filter, map, card} from 'ionicons/icons';
import Map from './pages/Map/Map';
import Donate from './pages/Donate/Donate';
import Sandbox from './pages/Sandbox/Sandbox';

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
import './App.css'
import Filters from './pages/Filters/Filters';

const App: React.FC = () => (
    <>
        <div className="hideWhenSmall">
            <IonApp>
                <IonReactRouter>
                        <IonSplitPane when="lg" contentId="main">
                            {/*--  the side menu  --*/}
                            <IonMenu style={{maxWidth: '5%'}} contentId="main">
                                <IonContent>
                                    <IonList>
                                        <IonItem>
                                            <IonRouterLink style={{width: '100%', display: 'flex', justifyContent: 'center'}} href="/map">
                                                    <IonLabel>Map</IonLabel>
                                            </IonRouterLink>
                                        </IonItem>
                                        <IonItem>
                                            <IonRouterLink style={{width: '100%', display: 'flex', justifyContent: 'center'}} href="/filters">
                                                <IonLabel>Filters</IonLabel>
                                            </IonRouterLink>
                                        </IonItem>
                                        <IonItem>
                                            <IonRouterLink style={{width: '100%', display: 'flex', justifyContent: 'center'}} href="/donate">
                                                <IonLabel>Donate</IonLabel>
                                            </IonRouterLink>
                                        </IonItem>
                                        <IonItem>
                                            <IonRouterLink style={{width: '100%', display: 'flex', justifyContent: 'center'}} href="/sandbox">
                                                <IonLabel>Sandbox</IonLabel>
                                            </IonRouterLink>
                                        </IonItem>
                                    </IonList>
                                </IonContent>
                            </IonMenu>

                            {/*-- the main content --*/}
                            <IonRouterOutlet id="main">
                                <Redirect exact path="/" to="/filters" />
                                <Route exact path="/filters"  render={() => <Filters/>}/>
                                <Route exact path="/map"  render={() => <Map/>}/>
                                <Route exact path="/donate" render={() => <Donate/>}/>
                                <Route exact path="/sandbox"  render={() => <Sandbox/>}/>
                            </IonRouterOutlet>
                        </IonSplitPane>
                </IonReactRouter>
            </IonApp>
        </div>
        <div className="hideWhenBig">
            <IonApp>
                <IonReactRouter>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Redirect exact path="/" to="/filters" />
                            <Route exact path="/filters"  render={() => <Filters/>}/>
                            <Route exact path="/map"  render={() => <Map/>}/>
                            <Route exact path="/donate" render={() => <Donate/>}/>
                            <Route exact path="/sandbox"  render={() => <Sandbox/>}/>
                        </IonRouterOutlet>
                        <IonTabBar slot="bottom">
                            <IonTabButton tab="map" href="/map">
                                <IonIcon icon={map} />
                                <IonLabel>Map</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="filters" href="/filters">
                                <IonIcon icon={filter}/>
                                <IonLabel>Filters</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="donate" href="/donate">
                                <IonIcon icon={card}/>
                                <IonLabel>Donate</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="sandbox" href="/sandbox">
                                <IonIcon icon={help} />
                                <IonLabel>Sandbox</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                </IonReactRouter>
            </IonApp>
        </div>
    </>
);

export default App;
