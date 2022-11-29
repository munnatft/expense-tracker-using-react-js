import React, { Component } from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error: string;
};

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: "",
  };

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      hasError: true,
      error: error.message,
    });
    console.log(error.message);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong !</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
