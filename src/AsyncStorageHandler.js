import * as AsyncStorageAll from '@react-native-async-storage/async-storage';
const AsyncStorage = AsyncStorageAll.default

const defaultKey = 'jwtToken'


export const storeDataLocal = async(value, key=defaultKey) => {
  try {
    await AsyncStorage.setItem(`@${key}`, value);
  } catch (error) {
    console.log(error)
  }
};

export const retrieveDataLocal = (key=defaultKey, cb=console.log) => {
  try {
    const value = AsyncStorage.getItem(`@${key}`, cb)
    if (value !== null) console.log(value);

  } catch (error) {
    return error
  }
};


export const removeDataLocal = async(key=defaultKey) => {
  try {
    const value = await AsyncStorage.removeItem(`@${key}`);
  } catch (error) {
    console.log(error)
  }
}
