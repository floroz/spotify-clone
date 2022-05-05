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
    if (s.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).length === 0) {
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
