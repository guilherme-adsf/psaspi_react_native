import * as yup from 'yup';
import User from '~/api/User';

let schema_validation = yup.object().shape({
  validation_name: yup.string().required('NameRequired'),
  validation_last_name: yup.string().required('LastNameRequired'),
  validation_email: yup.string().required('EmailRequired').email('NotEmail'),
  validation_password: yup
    .string()
    .required('PasswordRequired')
    .test('PasswordLength', 'PasswordLength', (obj) => {
      if (!obj) {
        return true;
      }
      return obj.length >= 6;
    }),
  validation_confirm_password: yup
    .string()
    .required('ConfirmPasswordRequired')
    .oneOf([yup.ref('validation_password'), null], 'PasswordsNotMatch'),
});

const clean_error_messages = (setFormErrors) => {
  setFormErrors({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirme_senha: '',
  });
};

const set_error_message = (error, setFormErrors) => {
  const obj = {
    NameRequired: () =>
      setFormErrors((form) => ({...form, nome: '* Campo obrigatório'})),
    LastNameRequired: () =>
      setFormErrors((form) => ({...form, sobrenome: '* Campo obrigatório'})),
    EmailRequired: () =>
      setFormErrors((form) => ({...form, email: '* Campo obrigatório'})),
    NotEmail: () =>
      setFormErrors((form) => ({...form, email: '* E-mail inválido'})),
    PasswordRequired: () =>
      setFormErrors((form) => ({...form, senha: '* Campo obrigatório'})),
    PasswordLength: () =>
      setFormErrors((form) => ({
        ...form,
        senha: '* Sua senha deve conter no mínimo 6 caracteres',
      })),
    ConfirmPasswordRequired: () =>
      setFormErrors((form) => ({
        ...form,
        confirme_senha: '* Campo obrigatório',
      })),
    PasswordsNotMatch: () =>
      setFormErrors((form) => ({
        ...form,
        confirme_senha: '* Suas senhas não conferem',
      })),
  };

  obj[error]();
};

export const submit_form = ({
  formData,
  setFormErrors,
  setLoading,
  closeLoadingModal,
  setIsLogged,
  setUser,
}) => {
  clean_error_messages(setFormErrors);
  schema_validation
    .validate(
      {
        validation_name: formData.nome,
        validation_last_name: formData.sobrenome,
        validation_email: formData.email,
        validation_password: formData.senha,
        validation_confirm_password: formData.confirme_senha,
      },
      {
        abortEarly: false,
      },
    )
    .then(async (data) => {
      setLoading(true);
      await User.create({
        formData,
        closeLoadingModal,
        setLoading,
        setIsLogged,
        setUser,
      });
    })
    .catch((err) => {
      err.errors.map((error) => {
        set_error_message(error, setFormErrors);
      });
    });
};
