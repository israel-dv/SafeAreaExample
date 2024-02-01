import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomStatusBar, CustomStatusBarProps} from '../StatusBar/StatusBar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type ContainerProps = Partial<CustomStatusBarProps> & {
  children?: React.ReactNode;
};

export const Container = ({
  children,
  statusBarColor,
  barStyle,
}: ContainerProps) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <CustomStatusBar
        height={top}
        statusBarColor={statusBarColor}
        barStyle={barStyle}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
