import React, {useRef} from 'react';
import WebView from 'react-native-webview';
import * as S from './styles';
const HomeScreen = () => {
  const webviewRef = useRef(null);

  const _onNavigationStateChange = (webViewState) => {
    console.log(webViewState.url);
    // no action on android
  };


  return (
    <S.Container>
      <WebView
        source={{
          uri: 'https://hortifruti.com.br/',
        }}
        ref={webviewRef}
        cacheEnabled={false}
        // onMessage={onMessageFromWebView}
        onNavigationStateChange={(e) => _onNavigationStateChange(e)}
        javaScriptEnabled={true}
      />
    </S.Container>
  );
};

export {HomeScreen};