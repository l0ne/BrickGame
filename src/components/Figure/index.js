import {StyleSheet, View} from 'react-native';
import {Сube} from '../Сube';
import React, {Fragment} from 'react';

export const Figure = ({type}) => {
  const object = type.split('/');
  const renderPoints = (items) => {
    return items.map((item, i) => <Сube visible={item} key={i} />);
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <View>{renderPoints(object[0].split(','))}</View>
        <View>{renderPoints(object[1].split(','))}</View>
      </View>
      <Сube />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
