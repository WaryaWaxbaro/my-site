import {useState} from 'react';

export const useToggleState = defaultVal => {
  const [state, setState] = useState(defaultVal);
  const toggle = () => {
    setState(!state);
  }

  return [state, toggle];
}