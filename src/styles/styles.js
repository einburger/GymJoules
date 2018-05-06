import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    home_page_view: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c1c4bc'
    },

    button: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#74999e'
    },
    button_text: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: '#fff'
    },

    exercise_container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    exercise_gif: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    exercise_label_text: {
        fontSize: 40,
        fontFamily: 'Roboto',
        letterSpacing: 3
    },

    search_bar: {
        flex: 1,
        textAlign: 'center',
        height: 40,
    },
    search_bar_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        borderRadius: 5,
        margin: 10
    },
    search_icon: {
        padding: 10,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    }
});

export default styles;