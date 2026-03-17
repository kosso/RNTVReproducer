import { View, Text, FlatList, TVFocusGuideView } from 'react-native';
import { useState, useRef, memo, useEffect } from 'react';
import { styles, scaleModifier } from '../Styles';
import { ShelfItem } from './ShelfItem';

interface ShelfProps {
    index: number
}

export const Shelf = memo((props: ShelfProps) => {

    const flatListRef = useRef(null)
    const testData = dummyData(10)


    return (
        <TVFocusGuideView style={[{ borderColor: 'lime', borderWidth: 1, marginBottom: 20 * scaleModifier }]}>
            <Text style={styles.gridItemText}>Shelf { props.index }</Text>
            <FlatList
                horizontal
                data={testData}
                scrollEnabled
                getItemLayout={(data, index) => (
                    { length: 346 * scaleModifier, offset: 346 * scaleModifier * index, index }
                )}
                renderItem={({ item, index }) => {
                    return (<ShelfItem shelfIndex={props.index} index={index}></ShelfItem>)
                }}
            />

        </TVFocusGuideView>
    )
})

const dummyData = (length: number) => {
    return Array.from({ length }, (_, i) => ({
        id: i + 1,
        title: `item ${i + 1}`
    }));
}