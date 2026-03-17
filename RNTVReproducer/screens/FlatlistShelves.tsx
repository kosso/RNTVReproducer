import { View, ScrollView, Text, FlatList, Pressable, TVFocusGuideView } from 'react-native';
import { scaleModifier, styles } from '../Styles';
import { Shelf } from '../components/Shelf';


export const FlatListShelves = ({ route, navigation }) => {

    const shelvesData: any[] = dummyData(8)
    const menuData = dummyData(6)

    return (
        <View style={[styles.container]}>
            <Text style={[styles.h1]}>FlatList Shelves Demo : Android issue</Text>
            <TVFocusGuideView trapFocusDown trapFocusUp trapFocusLeft style={{ position: 'absolute', top: 160 * scaleModifier, bottom: 10 * scaleModifier, left: 10 * scaleModifier, width: 360 * scaleModifier, borderWidth: 2 * scaleModifier, borderColor: '#555' }}>
                {
                    menuData.map((data: any, i: number) => {
                        return (
                            <MenuButton key={'menu' + i} index={i}></MenuButton>
                        )
                    })
                }
            </TVFocusGuideView>
            <TVFocusGuideView trapFocusUp trapFocusDown trapFocusRight style={{ overflow:'hidden', position: 'absolute', top: 160 * scaleModifier, bottom: 10 * scaleModifier, left: 400 * scaleModifier, right: 20 * scaleModifier, borderWidth: 2 * scaleModifier, borderColor: 'yellow' }}>
            <ScrollView style={{ overflow: 'scroll', flex: 1 }}>
                {
                    shelvesData.map((data: any, i: number) => {
                        return (
                            <Shelf key={'shelf' + i} index={i}></Shelf>
                        )
                    })
                }
            </ScrollView>
            </TVFocusGuideView>

        </View>
    )
}

const MenuButton = (props: any) => {

    return (
        <Pressable
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
                        <View style={[styles.menuItem, focused && styles.menuItemFocus, pressed && styles.menuItemPress]}>
                            <Text style={[styles.gridItemText]}>{props.index}</Text>
                        </View>
                    )
                }
            }
        </Pressable>
    )
}

const dummyData = (length: number) => {
    return Array.from({ length }, (_, i) => ({
        id: i + 1,
        index: i,
        title: `index ${i}`
    }));
}