import { useEffect } from 'react';

const withLogger = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const ComponentWithLogger = (props: P) => {
        useEffect(() => {
            console.log('Component Mounted!!');
        }, []);

        return <WrappedComponent {...props} />;
    };

    const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    ComponentWithLogger.displayName = `withLogger(${name})`;

    return ComponentWithLogger;
};

export default withLogger;
