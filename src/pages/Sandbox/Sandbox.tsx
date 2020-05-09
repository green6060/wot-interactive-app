import React from 'react'
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonList, IonItemDivider, IonItem, IonLabel, IonToggle, IonSegment, IonSegmentButton, IonIcon } from '@ionic/react'
import { call, home, heart, pin, star, globe, basket, camera, bookmark } from 'ionicons/icons';

const Sandbox = () => {
    const [checked, setChecked] = React.useState(false);
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sandbox</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {/************************** Ion Toggle Elements ******************************/}
                <IonList>
                    <IonItemDivider>Default Toggle</IonItemDivider>
                    <IonItem>
                        <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
                        <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
                    </IonItem>

                    <IonItemDivider>Disabled Toggle</IonItemDivider>
                    <IonItem><IonToggle disabled /></IonItem>

                    <IonItemDivider>Checked Toggle</IonItemDivider>
                    <IonItem><IonToggle checked /></IonItem>

                    <IonItemDivider>Toggle Colors</IonItemDivider>
                    <IonItem><IonToggle color="primary" /></IonItem>
                    <IonItem><IonToggle color="secondary" /></IonItem>
                    <IonItem><IonToggle color="danger" /></IonItem>
                    <IonItem><IonToggle color="light" /></IonItem>
                    <IonItem><IonToggle color="dark" /></IonItem>

                    <IonItemDivider>Toggles in a List</IonItemDivider>
                    <IonItem>
                        <IonLabel>Pepperoni</IonLabel>
                        <IonToggle value="pepperoni" />
                    </IonItem>

                    <IonItem>
                        <IonLabel>Sausage</IonLabel>
                        <IonToggle value="sausage" disabled={true} />
                    </IonItem>

                    <IonItem>
                        <IonLabel>Mushrooms</IonLabel>
                        <IonToggle value="mushrooms" />
                    </IonItem>
                </IonList>

                {/************************** Ion Segment Elements ******************************/}

                <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                    <IonSegmentButton value="friends">
                        <IonLabel>Friends</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="enemies">
                        <IonLabel>Enemies</IonLabel>
                    </IonSegmentButton>
                </IonSegment>

                {/*-- Disabled Segment --*/}
                <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} disabled value="sunny">
                    <IonSegmentButton value="sunny">
                        <IonLabel>Sunny</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="rainy">
                        <IonLabel>Rainy</IonLabel>
                    </IonSegmentButton>
                </IonSegment>

                {/*-- Segment with anchors --*/}
                <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                    <IonSegmentButton value="dogs">
                        <IonLabel>Dogs</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="cats">
                        <IonLabel>Cats</IonLabel>
                    </IonSegmentButton>
                </IonSegment>

                {/*-- Scrollable Segment --*/}
                <IonSegment scrollable value="heart">
                    <IonSegmentButton value="home">
                        <IonIcon icon={home} />
                    </IonSegmentButton>
                    <IonSegmentButton value="heart">
                        <IonIcon icon={heart} />
                    </IonSegmentButton>
                    <IonSegmentButton value="pin">
                        <IonIcon icon={pin} />
                    </IonSegmentButton>
                    <IonSegmentButton value="star">
                        <IonIcon icon={star} />
                    </IonSegmentButton>
                    <IonSegmentButton value="call">
                        <IonIcon icon={call} />
                    </IonSegmentButton>
                    <IonSegmentButton value="globe">
                        <IonIcon icon={globe} />
                    </IonSegmentButton>
                    <IonSegmentButton value="basket">
                        <IonIcon icon={basket} />
                    </IonSegmentButton>
                </IonSegment>

                {/*-- Segment with secondary color --*/}
                <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} color="secondary">
                    <IonSegmentButton value="standard">
                        <IonLabel>Standard</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="hybrid">
                        <IonLabel>Hybrid</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="sat">
                        <IonLabel>Satellite</IonLabel>
                    </IonSegmentButton>
                </IonSegment>

                {/*-- Segment in a toolbar --*/}
                <IonToolbar>
                    <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                        <IonSegmentButton value="camera">
                        <IonIcon icon={camera} />
                        </IonSegmentButton>
                        <IonSegmentButton value="bookmark">
                        <IonIcon icon={bookmark} />
                        </IonSegmentButton>
                    </IonSegment>
                </IonToolbar>

                {/*-- Segment with default selection --*/}
                <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} value="javascript">
                    <IonSegmentButton value="python">
                        <IonLabel>Python</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="javascript">
                        <IonLabel>Javascript</IonLabel>
                    </IonSegmentButton>
                </IonSegment>

            </IonContent>
        </IonPage>
    )
}

export default Sandbox
