import React from 'react'
import { PickerColumn } from "@ionic/core";
import { IonPicker } from "@ionic/react";
import { IonPickProps } from '../../helper/interfaces'

const IonBookColumn = {
    name: "Book",
    options: [
      { text: "The Eye of the World", value: "The Eye of the World" },
      { text: "The Great Hunt", value: "The Great Hunt" },
      { text: "The Dragon Reborn", value: "The Dragon Reborn" },
      { text: "The Shadow Rising", value: "The Shadow Rising" },
      { text: "The Fires of Heaven", value: "The Fires of Heaven" },
      { text: "Lord of Chaos", value: "Lord of Chaos" },
      { text: "A Crown of Swords", value: "A Crown of Swords" },
      { text: "The Path of Daggers", value: "The Path of Daggers" },
      { text: "Winter's Heart", value: "Winter's Heart" },
      { text: "Crossroads of Twilight", value: "Crossroads of Twilight" },
      { text: "Knife of Dreams", value: "Knife of Dreams" },
      { text: "The Gathering Storm", value: "The Gathering Storm" },
      { text: "Towers of Midnight", value: "Towers of Midnight" },
      { text: "Memory of Light", value: "Memory of Light" },
    ]
} as PickerColumn;

const IonEpisodeColumn = {
    name: "Season",
    options: [
        { text: "Coming Soon!", value: "Coming Soon!" }
    ]
} as PickerColumn;

export const IonPick: React.FC<IonPickProps> = ({onSave, onCancel, isOpen, medium}) => {
    const [columns, setColumns] = React.useState<PickerColumn>(IonBookColumn)

    React.useEffect(() => {
        medium === 'book' ? setColumns(IonBookColumn) : setColumns(IonEpisodeColumn)
    }, [medium])

    return (
        <IonPicker
            isOpen={isOpen}
            columns={[IonBookColumn]}
            buttons={[
                {
                text: "Cancel",
                role: "cancel",
                handler: value => {
                    onCancel()
                }
                },
                {
                text: "Confirm",
                handler: value => {
                    onSave(value.Book.text)
                }
                }
            ]}
        ></IonPicker>
    )
}
