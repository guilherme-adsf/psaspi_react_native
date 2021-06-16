import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage_store_data = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const storage_get_data = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log(e);
  }
};

export const storage_remove_value = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {}
};
