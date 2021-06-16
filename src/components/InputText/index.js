import React, {useRef, useEffect, useState} from 'react';
import {POPPINS_400} from '~/theme/text-styles';
import {
  Container,
  InputContainer,
  Label,
  Input,
  ContainerImage,
  Image,
  MessageError,
} from './styles';

const InputText = ({
  label = false,
  placeholder,
  isPassword = false,
  messageError = '',
  isSearchInput = false,
  onSearch = null,
  enabled = true,
  ...props
}) => {
  const inputRef = useRef(null);
  const [hidePassword, setHidePassword] = useState(true);

  useEffect(() => {
    inputRef?.current?.setNativeProps({
      style: {fontFamily: POPPINS_400},
    });
  }, []);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputContainer>
        <Input
          ref={inputRef}
          placeholder={placeholder}
          isPassword={isPassword}
          secureTextEntry={isPassword && hidePassword}
          disabled={enabled}
          editable={enabled}
          autoCompleteType="off"
          {...props}
        />
        {isPassword && (
          <>
            <ContainerImage onPress={() => setHidePassword((value) => !value)}>
              <Image isPassword />
            </ContainerImage>
          </>
        )}
        {isSearchInput && (
          <>
            <ContainerImage onPress={onSearch}>
              <Image />
            </ContainerImage>
          </>
        )}
      </InputContainer>
      {messageError !== '' && <MessageError>{messageError}</MessageError>}
    </Container>
  );
};

export default InputText;
