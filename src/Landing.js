import React from 'react';
import { Image, Text, View } from 'react-native';
import { SocialIcon } from 'react-social-icons';
// 6fc4fc

export default function Landing() {
  return (
<View style={{flexDirection:'row', marginLeft:50}}>

    <View style={{flex:1, flexDirection:'column', width:'50%'}}>
      <View style={{borderStyle:'solid', borderWidth:1, padding:5,backgroundColor:'#32c0d9', borderRadius:5, width:"35%",opacity:0.8 }}>
          <Text style={{fontFamily:'Cursive', fontWeight:'900', fontSize:20}}>👋Hi there! I'm Revanth</Text>
      </View>
      <View style={{padding:5}}>
          <Text style={{color:'#b1b9ba', fontFamily:'sans-serif', fontWeight:'500', fontSize:30}}>A <Text style={{color:"#b1b9ba", fontSize:40}}>Frontend Engineer</Text>
          . I help Startups Launch and Grow Their Products</Text>
      </View>
      <View style={{padding:5}}>
          <Text style={{color:'#b1b9ba', fontFamily:'Cursive', fontWeight:'900', fontSize:15}}>over 2yrs* of professional experience working with react tools to deliver quality
            results to clients. I have expert knowledge in frontend engineering and web development.
          </Text>
      </View>
      <View style={{padding:5}}>
        <Text  style={{color:'#b1b9ba', fontFamily:'Cursive', fontWeight:'900', fontSize:15}}>If you wish to reach out, find me online.</Text>
      </View>
      <View  style={{padding:5, flexDirection:'row'}}>
        <SocialIcon url='https://github.com/revanth7999' bgColor='#32c0d9' style={{margin:5}}/>
        <SocialIcon url='https://www.linkedin.com/in/revanth-n-a87806141/' bgColor='#32c0d9'  style={{margin:5}}/>
        <SocialIcon url='https://www.instagram.com/revanth_suresh/' bgColor='#32c0d9'  style={{margin:5}}/>
        <SocialIcon url='https://github.com/revanth7999' bgColor='#32c0d9'  style={{margin:5}}/>
      </View>
    </View>

    <View style={{flex:1}}>
      <Image source={require('../assets/c1.png')} style={{width:500, height:300, marginLeft:150}}/>
    </View>
    
    </View>  
  )
}
