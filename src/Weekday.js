import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function Weekday({label, title}) {
    return (
            <Text aria-label={label} style={styles.Weekday}>
                {title}
            </Text>  
    );
}

const styles = StyleSheet.create({
    Weekday: {
        fontSize: 35,
        justifyContent: 'center',
        borderColor: "#000",
        borderWidth: 1,
    },
})

// flex: 1,
//         width: "calc (100%/7)",
//         padding: "0.8px",
//         backgroundColor: "transparent",
//         borderColor: "#dfe3e8",
//         borderWidth: 1,
//         borderRadius: 0,
//         fontSize: 1.2,
//         textAlign: "center"