const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PHONE_NUMBER_REGEX = /^(\+?0?86\-?)?1[345789]\d{9}$/;

export const useValidation = () => {
  const validateEmail = (email: string) => {
    return EMAIL_REGEX.test(email);
  };
  const validatePhoneNumber = (email: string) => {
    return PHONE_NUMBER_REGEX.test(email);
  };

  return {validateEmail, validatePhoneNumber};
};
