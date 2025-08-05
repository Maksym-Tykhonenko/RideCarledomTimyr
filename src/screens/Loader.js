import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Image,
  Animated,
} from 'react-native';
import WebView from 'react-native-webview';

const Loader = () => {
  const HtmlLouder = `<div style="display:flex;align-items:center;justify-content:center;width:100%;max-width:6rem;margin:3rem auto;">
  <span style="position:relative;display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1;">
    <span style="content:'';position:absolute;border-radius:50%;width:100%;aspect-ratio:1;box-shadow:inset 0 0 0 1rem #fff;animation:pulsIn 1.8s ease-in-out infinite;filter:drop-shadow(0 0 1rem rgba(255,255,255,0.75));"></span>
    <span style="content:'';position:absolute;border-radius:50%;width:calc(100% - 2rem);aspect-ratio:1;box-shadow:0 0 0 0 #fff;animation:pulsOut 1.8s ease-in-out infinite;filter:drop-shadow(0 0 1rem rgba(255,255,255,0.75));"></span>
  </span>
  <style>
    @keyframes pulsIn {
      0%   { box-shadow: inset 0 0 0 1rem #fff; opacity: 1; }
      50%,100% { box-shadow: inset 0 0 0 0 #fff; opacity: 0; }
    }
    @keyframes pulsOut {
      0%,50%   { box-shadow: 0 0 0 0 #fff; opacity: 0; }
      100% { box-shadow: 0 0 0 1rem #fff; opacity: 1; }
    }
  </style>
</div>
`;

  const [louderIsEnded, setLouderIsEnded] = useState(false);
  const appearingAnim = useRef(new Animated.Value(0)).current;
  const appearingSecondAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 5500,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingSecondAnim, {
        toValue: 1,
        duration: 7500,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 1500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLouderIsEnded(true);
    }, 8000);
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#000', paddingBottom: 100 }}
    >
      <WebView
        source={{
          html: HtmlLouder,
        }}
        style={{ flex: 1, backgroundColor: '#000' }}
      />

      <View style={{ width: '100%', alignItems: 'center' }}>
        <Animated.Image
          style={{ opacity: appearingSecondAnim }}
          source={require('../assets/images/de6762d906015c05dae8600ed4aec6b1f6bd2317.png')}
        />
      </View>
    </SafeAreaView>
  );
};
export default Loader;
