const emailPattern = "^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$";

export const validator = {
  email: (s: string, minLength?: number, maxLength?: number): boolean => {
    if (maxLength && s.length > maxLength) {
      return false;
    }

    if (minLength && s.length < minLength) {
      return false;
    }

    if (!new RegExp(emailPattern).test(s)) {
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
