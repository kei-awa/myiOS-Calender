import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
export default function Day({fullDate, onClick, selected}) {

    if (fullDate == null) {
        return <Text style={styles.EmptyDay}> </Text>
    }

    const date = fullDate.getDate();

    let className = styles.Day;

    if (selected) {
        className = styles.Day ;
    }
    return (
    <Text style={styles.Day} onPress={onClick.bind(this, date)}>{date}</Text>
            // <Button style={className}
            // title="{date}"
            // onPress={onClick.bind(this, date)}/> 
    );
}

const styles = StyleSheet.create({
    Day: {
        width: "100/7%",
        flexDirection: 'column',
        fontSize: 30,
    },
    pre:{
        height: 50,
        backgroundColor: "#4f4f4f"
    }
})