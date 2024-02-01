import React from 'react';
import {StatusBar, StatusBarStyle, View} from 'react-native';

export type CustomStatusBarProps = {
  height: number;
  statusBarColor?: string;
  barStyle?: StatusBarStyle;
};

export const CustomStatusBar = ({
  height,
  statusBarColor,
  barStyle,
}: CustomStatusBarProps) => {
  return (
    <View style={{height, backgroundColor: statusBarColor}}>
      <StatusBar barStyle={barStyle} />
    </View>
  );
};
