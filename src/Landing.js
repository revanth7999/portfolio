import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SocialIcon } from "react-social-icons";
import Lottie from 'lottie-react';
import animationData from '../assets/animation_lmoczclw.json';

export default function Landing() {
  return (
    <View style={styles.parentDiv}>
    
      <View style={styles.childDiv}>
        <View style={styles.nameDiv}>
          <Text style={styles.nameDivText}>👋Hi there! I'm Revanth</Text>
        </View>
        <View>
          <Text style={styles.engineerText}>
            A <Text style={styles.engineerText1}>Frontend Engineer</Text>. I
            help Startups Launch and Grow Their Products
          </Text>
        </View>
        <View>
          <Text style={styles.constentText}>
            over 2yrs* of professional experience working with react tools to
            deliver quality results to clients. I have expert knowledge in
            frontend engineering and web development.
          </Text>
        </View>
        <View>
          <Text style={styles.constentText}>
            If you wish to reach out, find me online.
          </Text>
        </View>
        <View style={styles.iconDiv}>
          <SocialIcon
            url="https://github.com/revanth7999"
            bgColor="#32c0d9"
            style={{ margin: 5 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/revanth-n-a87806141/"
            bgColor="#32c0d9"
            style={{ margin: 5 }}
          />
          <SocialIcon
            url="https://www.instagram.com/revanth_suresh/"
            bgColor="#32c0d9"
            style={{ margin: 5 }}
          />
          <SocialIcon
            url="https://github.com/revanth7999"
            bgColor="#32c0d9"
            style={{ margin: 5 }}
          />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Lottie animationData={animationData} style={{height:300,marginLeft: "5vh"}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentDiv: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "10vh",
  },
  childDiv: {
    flex: 1,
    flexDirection: "column",
  },
  nameDiv: {
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    backgroundColor: "#32c0d9",
    borderRadius: 5,
    width: "40vh",
    opacity: 0.8,
  },
  nameDivText: {
    fontFamily: "Cursive",
    fontWeight: "900",
    fontSize: 20,
  },
  engineerText: {
    color: "#b1b9ba",
    fontFamily: "sans-serif",
    fontWeight: "500",
    fontSize: 30,
    paddingTop: 20
  },
  engineerText1: {
    color: "#b1b9ba",
    fontSize: 40,
  },
  constentText: {
    color: "#b1b9ba",
    fontFamily: "Cursive",
    fontWeight: "900",
    fontSize: 15,
  },
  iconDiv: {
    padding: 5,
    flexDirection: "row",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
