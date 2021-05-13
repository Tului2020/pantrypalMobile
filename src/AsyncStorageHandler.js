import * as AsyncStorageAll from '@react-native-community/async-storage';
const AsyncStorage = AsyncStorageAll.default


export const storeDataLocal = async(value, key='jwt') => {
  try {
    await AsyncStorage.setItem(
      `@${key}`,
      value
    );
  } catch (error) {
    // Error saving data
  }
};


export const retrieveDataLocal = async(key='jwt') => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};


