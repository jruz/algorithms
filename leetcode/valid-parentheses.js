const isValid = (s) => {
  const stack = [];
  const isClosing = (el) => {
    if (el === ')' && stack[stack.length - 1] === '(') return true;
    if (el === ']' && stack[stack.length - 1] === '[') return true;
    if (el === '}' && stack[stack.length - 1] === '{') return true;
    return false;
  };
  for (let i = 0; i < s.length; i++) {
    if (isClosing(s[i])) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.length;
};

export { isValid };
