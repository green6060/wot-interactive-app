import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react'

export default function Donate() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Donate</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="QVAQS8PXAGGHU" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </IonContent>
        </IonPage>
    )
}
