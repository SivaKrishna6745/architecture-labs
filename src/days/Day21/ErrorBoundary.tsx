import { Component, type ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

type State = {
    hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error): void {
        console.log(error);
    }

    render() {
        if (this.state.hasError)
            return (
                <div className="bg-slate-300 text-slate-800 border-2 border-red-600 p-2 rounded-sm ">
                    Something went wrong, please try again
                </div>
            );
        return this.props.children;
    }
}

export default ErrorBoundary;
