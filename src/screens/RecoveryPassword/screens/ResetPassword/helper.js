import * as yup from 'yup';
import User from '~/api/User';
// import User from '~/api/User';

let schema_validation = yup.object().shape({
  validation_password: yup.string().required('PasswordRequired'),
  validation_confirm_password: yup
    .string()
    .required('ConfirmPasswordRequired')
    .oneOf([yup.ref('validation_password'), null], 'PasswordsNotMatch'),
});

const clean_error_messages = (setFormErrors) => {
  setFormErrors({
    password: '',
    confirm_password: '',
  });
};

const set_error_message = (error, setFormErrors) => {
  const obj = {
    PasswordRequired: () =>
      setFormErrors((form) => ({...form, password: '* Campo obrigatório'})),
    ConfirmPasswordRequired: () =>
      setFormErrors((form) => ({
        ...form,
        confirm_password: '* Campo obrigatório',
      })),
    PasswordsNotMatch: () =>
      setFormErrors((form) => ({
        ...form,
        confirm_password: '* Suas senhas não conferem',
      })),
  };

  obj[error]();
};

export const submit_form = ({
  formData,
  setFormErrors,
  setLoading,
  closeLoadingModal,
  navigation,
  id,
}) => {
  clean_error_messages(setFormErrors);
  schema_validation
    .validate(
      {
        validation_password: formData.password,
        validation_confirm_password: formData.confirm_password,
        validation_passwordtip: formData.passwordtip,
      },
      {
        abortEarly: false,
      },
    )
    .then(async (data) => {
      setLoading(true);
      User.resetpassword({
        id,
        formData,
        closeLoadingModal,
        navigation,
        setLoading,
      });
    })
    .catch((err) => {
      err.errors.map((error) => {
        set_error_message(error, setFormErrors);
      });
    });
};
