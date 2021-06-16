import axios from 'axios';
import {BASE_URL} from '~/utils/urls';

const API_MESSAGE_ERROR = 'Houve um erro de comunicação';

const api_handle_message_error = (err) => {
  if (err.response) {
    return err.response.data.message
      ? err.response.data.message
      : API_MESSAGE_ERROR;
  }
  return API_MESSAGE_ERROR;
};

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

export {api, api_handle_message_error};
