import React from "react";
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    }

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}

function ErrorBoundaryApp() {
    return (
        <div>
            <ErrorBoundary>
                <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary>
            <hr />
            <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>
            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>
        </div>
    );
}

export default ErrorBoundaryApp;

//   Классовый компонент является предохранителем, если он включает хотя бы один из следующих методов жизненного цикла: static getDerivedStateFromError() или componentDidCatch(). Используйте static getDerivedStateFromError() при рендеринге запасного UI в случае отлова ошибки. Используйте componentDidCatch() при написании кода для журналирования информации об отловленной ошибке.