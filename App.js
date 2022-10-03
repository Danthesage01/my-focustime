import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import {FocusHistory } from "./src/features/FocusHistory"

export default function App() {
  const [currentText, setCurrentText] = useState(null);
  const [history, setHistory] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      {!currentText ? (
        <>
        <Focus addTextNow={setCurrentText} />
        <FocusHistory history ={history}/>        
        </>
      ) : (
        <Timer
          focusText={currentText}
          onTimerEnd={(text) => {
            setHistory([...history, text])
          }}
          clearText={() => setCurrentText(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
