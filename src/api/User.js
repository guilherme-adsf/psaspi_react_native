import {storage_store_data, storage_remove_value} from '~/utils/async_storage';
import {show_toast_bottom} from '~/utils/toast';
import {api, api_handle_message_error} from '~/utils/axios';

class User {
  async create({
    formData,
    closeLoadingModal,
    setLoading,
    setIsLogged,
    setUser,
  }) {
    api
      .post('/createaccount', {
        firstName: formData.nome,
        lastName: formData.sobrenome,
        email: formData.email,
        password: formData.senha,
      })
      .then(async (res) => {
        await storage_store_data('user_data', res.data.data);
        setUser(res.data.data);
        closeLoadingModal({
          message: 'Conta criada com sucesso!',
          callback: () => {
            setIsLogged(true);
          },
        });
      })
      .catch((err) => {
        setLoading(false);
        show_toast_bottom({text: api_handle_message_error(err)});
      });
  }

  async update({formData, closeLoadingModal, setLoading, setUser}) {
    api
      .put('/updateaccount', {
        id: formData.id,
        firstName: formData.nome,
        lastName: formData.sobrenome,
        email: formData.email,
        password: formData.senha,
      })
      .then(async (res) => {
        await storage_store_data('user_data', res.data.data);
        setUser(res.data.data);
        closeLoadingModal({
          message: 'Dados atualizados com sucesso!',
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        show_toast_bottom({text: api_handle_message_error(err)});
      });
  }

  async forgotpassword({email, closeLoadingModal, setLoading, navigation}) {
    await api
      .get(`/sendemailrecoverypassword/${email}`)
      .then((res) => {
        closeLoadingModal({
          message: 'Verifique seu e-mail para redefinir sua senha.',
          callback: () => {
            navigation.navigate('Login');
          },
        });
      })
      .catch((err) => {
        setLoading(false);
        show_toast_bottom({text: api_handle_message_error(err)});
      });
  }

  async resetpassword({
    id,
    formData,
    closeLoadingModal,
    navigation,
    setLoading,
  }) {
    await api
      .post('/resetpassword', {
        id,
        password: formData.password,
      })
      .then((res) => {
        closeLoadingModal({
          message: 'Senha cadastrada com sucesso.',
          callback: () => {
            navigation.navigate('Login');
          },
        });
      })
      .catch((err) => {
        setLoading(false);
        show_toast_bottom({text: api_handle_message_error(err)});
      });
  }

  async login({email, password, setLoading, setIsLogged, setUser}) {
    api
      .post('/login', {
        email,
        password,
      })
      .then(async (res) => {
        await storage_store_data('user_data', res.data.data);
        setUser(res.data.data);
        setTimeout(() => {
          setLoading(false);
          setIsLogged(true);
        }, 500);
      })
      .catch((err) => {
        setLoading(false);
        show_toast_bottom({text: api_handle_message_error(err)});
      });
  }

  async logout({setUser, setIsLogged}) {
    storage_remove_value('user_data');
    setIsLogged(false);
    setTimeout(() => {
      setUser(null);
    }, 2000);
  }

  async get_collects({userId, setCollects, setLoading, wasViewed = 0}) {
    api
      .get(`/getcollects/${userId}?wasViewed=${wasViewed}`)
      .then(async (res) => {
        setCollects(res.data.data);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      })
      .catch((err) => {
        console.log(err);
        show_toast_bottom({text: api_handle_message_error(err)});
        setLoading(false);
      });
  }

  async get_tweets_collect({url, setTweets, setLoading, setInfoRequest}) {
    api
      .get(url)
      .then(async (res) => {
        setTweets(res.data.data);
        setInfoRequest({
          count: res.data.count,
          nextRequest: res.data.nextRequest,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        show_toast_bottom({text: api_handle_message_error(err)});
        setLoading(false);
      });
  }

  async collect({
    profileId,
    userId,
    start = 0,
    numberOfTweets,
    callback,
    closeLoadingModal,
    id,
  }) {
    api
      .post('/collect', {
        id_perfil: profileId,
        quantidade_tweets: numberOfTweets,
        user_id: userId,
        start,
        id,
      })
      .then(async (res) => {
        closeLoadingModal({
          message: res.data.message,
          callback,
        });
      })
      .catch((err) => {
        closeLoadingModal({message: ''});
        show_toast_bottom({
          text: api_handle_message_error(err),
          type: 'warning',
          duration: 8000,
        });
      });
  }

  async export_csv({collectId, userId, closeLoadingModal}) {
    api
      .post('/exportcsv', {
        collect_id: collectId,
        user_id: userId,
      })
      .then(async (res) => {
        closeLoadingModal({
          message: res.data.message,
        });
      })
      .catch((err) => {
        closeLoadingModal({message: ''});
        show_toast_bottom({
          text: api_handle_message_error(err),
          type: 'warning',
          duration: 8000,
        });
      });
  }

  async export_report({collectId, userId, choice, closeLoadingModal}) {
    console.log(collectId, userId, choice);

    api
      .post('/exportreport', {
        collect_id: collectId,
        user_id: userId,
        choice,
      })
      .then(async (res) => {
        closeLoadingModal({
          message: res.data.message,
        });
      })
      .catch((err) => {
        console.log(err.response);
        closeLoadingModal({message: ''});
        show_toast_bottom({
          text: api_handle_message_error(err),
          type: 'warning',
          duration: 8000,
        });
      });
  }

  async export_all_reports({collectId, userId, closeLoadingModal}) {
    api
      .post('/exportallreports', {
        collect_id: collectId,
        user_id: userId,
      })
      .then(async (res) => {
        closeLoadingModal({
          message: res.data.message,
        });
      })
      .catch((err) => {
        console.log(err.response);
        closeLoadingModal({message: ''});
        show_toast_bottom({
          text: api_handle_message_error(err),
          type: 'warning',
          duration: 8000,
        });
      });
  }

  async view_collection({collectId}) {
    api
      .get(`/viewcollection/${collectId}`)
      .then(async (res) => {})
      .catch((err) => {
        console.log(err.response);
      });
  }

  async delete_collection({collectId, closeLoadingModal, navigation}) {
    api
      .get(`/deletecollection/${collectId}`)
      .then(async (res) => {
        closeLoadingModal({
          message: res.data.message,
          callback: () => {
            navigation.goBack();
          },
        });
      })
      .catch((err) => {
        console.log(err.response);
        closeLoadingModal({message: ''});
        show_toast_bottom({
          text: api_handle_message_error(err),
          type: 'warning',
          duration: 8000,
        });
      });
  }

  async verify_ibm_token({setStatusIbmKey}) {
    api
      .get('/verifyibmkey')
      .then(async (res) => {
        setStatusIbmKey(res.data);
      })
      .catch((err) => {});
  }
}

export default new User();
