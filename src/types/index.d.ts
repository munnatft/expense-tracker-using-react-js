// declare module "*.module.css";
// declare module "*.png"

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly PUBLIC_URL: string
  }
}

declare module '*.bmp' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.svg' {
  import type * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >

  const src: string
  export default src
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { [key: string]: string }
  export default classes
}

type Transaction = {
  _id: string;
  amount: string;
  title: string;
  type: string;
};

type AddTransaction = {
  amount: string;
  title: string;
  type: string;
};

type TransactionAction = {
  type: string;
  payload?: Transaction[] | Transaction | string;
};

type TransactionState = {
  transactions: Transaction[];
  income: number;
  expense: number;
  error: string;
};
