import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './Store'
import ErrorBoundary from './components/error/ErrorBoundary'

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <Provider store={store}>
        <ErrorBoundary>
            {children}
        </ErrorBoundary>
    </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}