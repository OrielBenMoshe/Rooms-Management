export default class mainapp extends Component {
 
    dialCall = () => {
   
      let phoneNumber = '';
   
      if (Platform.OS === 'android') {
        phoneNumber = 'tel:${1234567890}';
      }
      else {
        phoneNumber = 'telprompt:${1234567890}';
      }
   
      Linking.openURL(phoneNumber);
    };
   
    render() {
      return (
        <View style={styles.MainContainer}>
   
          <TouchableOpacity onPress={this.dialCall} activeOpacity={0.7} style={styles.button} >
   
            <Text style={styles.TextStyle}>OPEN PHONE NUMBER IN DIAL SCREEN</Text>
   
          </TouchableOpacity>
   
        </View>
   
      );
    }
  }