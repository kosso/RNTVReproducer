import { View, Text, Pressable } from 'react-native';
import { useRef, useEffect } from 'react';
import { styles, isTVOS, scaleModifier } from '../Styles';

interface Props {
    index: number
    shelfIndex: number
}

export const ShelfItem = (props: Props) => {

    const itemRef = useRef(null)

    return (
        <Pressable
            ref={itemRef}
            focusable
            accessible
            tvParallaxProperties={{ tiltAngle: 0, magnification: 1.0, pressMagnification: 0.95 }} // AppleTV only
            key={props.index}
            onPress={() => {
                console.log('Pressed shelf index:', props.shelfIndex, props.index)
            }}>
            {
                ({ pressed, focused }) => {
                    return (
                        <View style={[styles.gridItem, { marginRight: 20 * scaleModifier}, focused && styles.gridItemFocus, pressed && styles.gridItemPress]}>
                            <Text style={[styles.gridItemText]}>{props.shelfIndex} : {props.index}</Text>
                        </View>
                    )
                }
            }
        </Pressable>
    )
}