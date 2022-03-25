import React, { createContext } from 'react';

let State = {
  name: ""
}

const setState = (data: any) => {
  State = data
}

const Context = createContext({State, setState});

export default Context;