
import React from 'react'
import { Dimensions, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Color, FontSize } from '../../../core/constants/StyleCommon';
import { Icon, MD3Colors } from 'react-native-paper';

const MainLayout = ({
    onGoBack,
    isBackButton = false,
    title,
    bgImg,
    headerSearch = false,
    searchIcon = false,
    onRedicrect = () => { },
    ...props }: any) => {

    // const [, setDataProfile] = useRecoilState(ProfileState);
    // const [token, setToken] = useState<string>("");

    // const getTokenStoraged = async () => {
    //     const token = await AsyncStorage.getItem("token").then(result => {
    //         if (result) {
    //             setToken(result)
    //         }
    //     });
    //     return token;
    // };
    // useEffect(() => {
    //     getTokenStoraged().then(() => { })
    // }, [])

    // const getProfileUser = async () => {
    //     if (token) {
    //         try {
    //             await authService.profile(
    //                 () => { }
    //             ).then((response: any) => {
    //                 if (response) {
    //                     setDataProfile({
    //                         data: response
    //                     })
    //                 }
    //             })
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // }

    // useEffect(() => {
    //     if (token) {
    //         getProfileUser().then(() => { })
    //     }
    // }, [token])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {isBackButton &&
                    <TouchableOpacity
                        onPress={onGoBack}
                        style={styles.flex1}
                    >

                        <View  >
                            <Icon
                                source="camera"
                                color={"red"}
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                }
                <View style={styles.flex6}>
                    {
                        headerSearch
                            ?
                            headerSearch
                            :
                            <Text style={styles.textTitle} numberOfLines={1}>{title}</Text>
                    }
                </View>
                {
                    searchIcon &&
                    <Pressable
                        onPress={onRedicrect}
                        style={styles.icon}
                    >
                        <Icon
                            source="search"
                            color={"red"}
                            size={20}
                        />
                    </Pressable>
                }
            </View>
            {props.children}
        </View >
    )
}

export default MainLayout

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.lightBackground,
        paddingVertical: 12,
        flex: 1,
    },
    content: {
        flex: 1
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        paddingHorizontal: 12,
    },
    flex1: {
        flex: 1
    },
    flex6: {
        flex: 6
    },
    flexRow: {
        display: "flex",
        flexDirection: "row",
    },
    flexCol: {
        display: "flex",
        flexDirection: "column",
    },
    textTitle: {
        color: Color.darkText,
        textAlign: "center",
        fontWeight: "600",
        fontSize: FontSize.fontSmall,
    },
    icon: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
    }
})