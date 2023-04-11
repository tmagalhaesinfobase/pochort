import { useNavigation } from '@react-navigation/native';
import React, {useRef, useState,useEffect} from 'react';
import {Alert, Button, View, ActivityIndicator,BackHandler} from 'react-native';
import WebView from 'react-native-webview';
import * as S from './styles';

const LogBookScreen = ({navigation}) => {
  const webviewRef = useRef(null);
  const canGoBack = useRef(false);
  const [language, setLanguage] = useState('');

  //receive info from web
  function onMessageFromWebView(data) {
    const formContent = JSON.parse(data?.nativeEvent?.data);
    navigation.navigate('ConfirmSignUpScreen', {formContent});
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress',handleBackButton)
    return () => {
      BackHandler.removeEventListener('hardwareBackPress',handleBackButton)
    };
  }, []);
  const handleBackButton = ()=>{
    if(canGoBack.current){
      webviewRef.current.goBack();
    }else{
      navigation.goBack()
    }
    return true
  }
  return (
    <>
      <WebView
        source={{
          uri: 'https://hortifruti.com.br/',
        }}
        startInLoadingState
        renderLoading={() => (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <ActivityIndicator size="large" />
          </View>
        )}

        ref={webviewRef}
        cacheEnabled={false}
        onMessage={onMessageFromWebView}
        allowsBackForwardNavigationGestures

        onLoadProgress={({nativeEvent})=>{
          canGoBack.current=nativeEvent.canGoBack;

          if (nativeEvent.canGoBack) {
            navigation.setParams({
              headerLeftInfo: {
                title: `back to ${nativeEvent?.title}`,
                onPress: () => webviewRef.current.goBack(),
              },
            });
          } else {
            navigation.setParams({
              headerLeftInfo: null,
            });
          }
          
        }}
        onNavigationStateChange={(navState) => {
          canGoBack.current=navState.canGoBack;

          if (navState.canGoBack) {
            navigation.setParams({
              headerLeftInfo: {
                title: `back to ${navState?.title}`,
                onPress: () => webviewRef.current.goBack(),
              },
            });
          } else {
            navigation.setParams({
              headerLeftInfo: null,
            });
          }
        }}

      />
    </>
  );
};

export {LogBookScreen};