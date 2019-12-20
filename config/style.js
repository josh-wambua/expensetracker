import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    },
    titleText: {
        fontSize: 48,
        textAlign: 'center'
    },
    subtitleText: {
        fontSize: 32,
        textAlign: 'center'
    },
    errorText: {
        color: 'red',
        fontWeight: 'bold'
    },
});

export default function appStyle() {
    return styles;
}