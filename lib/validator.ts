export const validator = {
  email: (s: string, minLength?: number, maxLength?: number): boolean => {
    if (maxLength && s.length > maxLength) {
      return false;
    }

    if (minLength && s.length < minLength) {
      return false;
    }

    // eslint-disable-next-line prefer-regex-literals
    if (!new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(s)) {
      return false;
    }

    return true;
  },

  password: (s: string, minLength?: number, maxLength?: number): boolean => {
    if (maxLength && s.length > maxLength) {
      return false;
    }

    if (minLength && s.length < minLength) {
      return false;
    }

    return true;
  },
};
