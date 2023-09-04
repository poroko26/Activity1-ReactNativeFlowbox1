import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground } from 'react-native-web';
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler';
const profileImage = require("./assets/profile.png");



const App = () => {

  const Header = () => {
    return(
      <View style = {styles.header}>
        <View style = {styles.profile}>
          <Image source={profileImage} style={styles.image}/>
          <Text style={styles.name}>Arnold James Felisilda</Text>
          <Text style={styles.course}>Information Technology 3</Text>
        </View>
      </View>
    )
  }

  const MySub = () => {
    return(
      <View style = {styles.subj}>
        <Text> My Subjects</Text>
      </View>
    )
  }

  const SubOffer = () => {
    return(
      <View>
        <View style = {styles.subContainer}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> ELEC 2 </Text>
          </View>
          <View style = {styles.codeMean}>
            <Text style = {styles.subtxt}> Web Development/Web Enterprise </Text>
            <Text style = {styles.subtxt}> Units: 3 </Text>
          </View>
        </View>

        <View style = {styles.subContainer}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> ELEC 3 </Text>
          </View>
          <View style = {styles.codeMean}>
            <Text style = {styles.subtxt}> Mobile Application </Text>
            <Text style = {styles.subtxt}> Units: 3 </Text>
          </View>
        </View>

        <View style = {styles.subContainer}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> IT 311 </Text>
          </View>
          <View style = {styles.codeMean}>
            <Text style = {styles.subtxt}> Sotware Engineering </Text>
            <Text style = {styles.subtxt}> Units: 3 </Text>
          </View>
        </View>

        <View style = {styles.subContainer}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> IT 312 </Text>
          </View>
          <View style = {styles.codeMean}>
            <Text style = {styles.subtxt}> Information Assurance and Security 2 </Text>
            <Text style = {styles.subtxt}> Units: 3 </Text>
          </View>
        </View>

        <View style = {styles.subContainer}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> IT 313 </Text>
          </View>
          <View style = {styles.codeMean}>
            <Text style = {styles.subtxt}> Quantitative </Text>
            <Text style = {styles.subtxt}> Units: 3 </Text>
          </View>
        </View>

      </View>
    )
  }

  const Footer = () => {
    return(
      <View style={styles.footer}>
        <Text style={styles.footerTxt}>Click here to see more</Text>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <Header/>
      <MySub/>     
      <SubOffer/>     
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'F8F272',
    //alignItems: 'center',
    //justifyContent: 'center', 
    margin: '25px',
  },

  header: {
    height: '25%',
    backgroundColor: '#75DDDD',
    marginBottom: '10px',
    borderBottomRightRadius: '50px',
    borderTopRightRadius: '50px',
  },

  profile: {
    margin: '25px'
  },

  name: {
    fontSize: '1.4rem'
  },

  image: {
    width: '80px', 
    height: '80px', 
    borderRadius: '50px',
  },

  subj: {
    height: '50px',
    justifyContent: 'center',
    marginBottom: '10px',
  },

  subContainer: {
    backgroundColor: '#c8c8c8',
    padding: '10px',
    marginBottom: '10px',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderRadius: '10px',
  },

  subCode: {
    padding: '10px',
    width: '70px'
    
  },

  txt: {
    fontWeight: 'bold',
  },

  codeMean: {
    width: '77%',
    padding: '10px'
    
  },

  subtxt: {
    fontSize: '8px',
  },

  footer: { 
    alignItems: 'flex-end',  
    marginTop: '30px',
  },

  footerTxt: {
    color: '#ef233c'
  }

});

export default App;

