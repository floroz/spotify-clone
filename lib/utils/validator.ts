export const emailRegexPattern =
  // eslint-disable-next-line no-useless-escape
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export const validator = {
  email: (
    s: string | undefined,
    minLength?: number,
    maxLength?: number
  ): boolean => {
    if (!s) return false;

    if (maxLength && s.length > maxLength) {
      return false;
    }

    if (minLength && s.length < minLength) {
      return false;
    }

    // eslint-disable-next-line prefer-regex-literals
    if (s.match(emailRegexPattern).length === 0) {
      return false;
    }

    return true;
  },

  password: (
    s: string | undefined,
    minLength?: number,
    maxLength?: number
  ): boolean => {
    if (!s) return false;

    if (maxLength && s.length > maxLength) {
      return false;
    }

    if (minLength && s.length < minLength) {
      return false;
    }

    return true;
  },
};
