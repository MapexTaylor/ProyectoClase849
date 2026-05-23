import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";
import { useAuth } from "../contexts/AuthContext";
import { i18n, useLanguage } from "../contexts/LanguageContext";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({route, navigation}: Props){
    //recepcion de email por medio de parametro de ruta
    // const { email } = route.params;

    //extraccion de usuario para email desde contexto
    const {user} = useAuth();
    const {changeLanguage, clearLanguage, language}= useLanguage();

    const handleLoadSettings = () => {
        navigation.navigate('UserTabs');
    }
    return(
        <View>
            <StatusBar style="auto" />
          <Text> Hola {user?.email}, {i18n.t('welcome')} </Text> 
          <CustomButton title={i18n.t('goToSettings')} onPress={handleLoadSettings}/>
          <CustomButton title={'Limpiar idioma'} onPress={clearLanguage}/>
          <Text> Current Language: {language} </Text>
          <CustomButton title={'EN'} onPress={()=> changeLanguage("en")}/>
          <CustomButton title={'ES'} onPress={()=> changeLanguage("es")}/>
        
        </View>
    )
}