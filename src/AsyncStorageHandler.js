import * as AsyncStorageAll from '@react-native-community/async-storage';
const AsyncStorage = AsyncStorageAll.default

const defaultKey = 'jwtToken'


export const storeDataLocal = async(value, key=defaultKey) => {
  try {
    await AsyncStorage.setItem(`@${key}`, value);

  } catch (error) {
    console.log(error)
  }
};


// export const retrieveDataLocal = async(key=defaultKey) => {
//   try {
//     const value = await AsyncStorage.getItem(`@${key}`);
//     if (value !== null) (value);

//   } catch (error) {
//     return error
//   }
// };

export const retrieveDataLocal = async (key=defaultKey, cb=console.log) => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`, cb);
    // debugger
    if (value !== null) return (value);

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
