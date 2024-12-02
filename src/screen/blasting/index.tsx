import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MainLayout from '../../infrastructure/common/layouts/layout'
import { Color, FontSize } from '../../core/constants/StyleCommon'
import { List } from 'react-native-paper';
const data = [
    {
        id: 1,
        date: "20/11/2024",
        location: 6
    },
    {
        id: 2,
        date: "20/11/2024",
        location: 6
    },
    {
        id: 3,
        date: "20/11/2024",
        location: 6
    },
    {
        id: 4,
        date: "20/11/2024",
        location: 6
    },
    {
        id: 5,
        date: "20/11/2024",
        location: 6
    },
    {
        id: 6,
        date: "20/11/2024",
        location: 6
    },
]
const BlastingScreen = () => {
    const [expanded, setExpanded] = useState<boolean>(true);
    const handlePress = () => setExpanded(!expanded);
    return (
        <MainLayout title={"Tin tức"}>
            <ScrollView>
                <View style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                key={index} style={styles.box}
                            >
                                <Text style={styles.date}>{item.date}</Text>
                                <Text style={styles.location} numberOfLines={1}>{item.location}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => String(item.id)}
                    />

                    <List.Section title="Accordions">
                        <List.Accordion
                            title="Uncontrolled Accordion"
                            left={props => <List.Icon {...props} icon="folder" />}>
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                        </List.Accordion>

                        <List.Accordion
                            title="Controlled Accordion"
                            left={props => <List.Icon {...props} icon="folder" />}
                            expanded={expanded}
                            onPress={handlePress}>
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                        </List.Accordion>
                    </List.Section>
                </View>
            </ScrollView>
        </MainLayout>
    )
}

export default BlastingScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 20,
        paddingHorizontal: 12,
    },
    box: {
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        borderBottomWidth: 1,
        borderBottomColor: Color.darkSubBackground,
        padding: 6,
    },
    date: {
        color: Color.darkText,
        fontSize: FontSize.fontXSmall,
        fontWeight: "bold"
    },
    location: {
        color: Color.darkSubBackground,
        fontSize: FontSize.fontXSmall,
        fontWeight: "light"
    },
})