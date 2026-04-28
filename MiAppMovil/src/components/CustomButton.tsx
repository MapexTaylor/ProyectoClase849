import { StyleSheet,Text, TouchableOpacity, View } from "react-native";

type CustomButtonProps = {
    title: string;
    onPress: () => void;
}

export default function CustomButton({title, onPress}: CustomButtonProps){
    
    
    return(
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}> {title} </Text>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    button:{
        borderColor: '#1ab12c',
        borderWidth:3,
        borderRadius: 6,
        padding: 12,
        backgroundColor: 'red'
    },
    buttonText:{
        color:'#fff'
    }
})