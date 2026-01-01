type Listener<T> = (data: T) => void;

class EventEmitter {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private callbackMap = new Map<string, Listener<any>[]>();

    subscribe<T>(eventName: string, callback: Listener<T>): () => void {
        if (!this.callbackMap.has(eventName)) this.callbackMap.set(eventName, []);
        this.callbackMap.set(eventName, [...this.callbackMap.get(eventName)!, callback]);
        return () => {
            const callbacks = this.callbackMap.get(eventName) || [];
            const newCallbacks = callbacks?.filter((cb: Listener<T>) => cb !== callback);
            this.callbackMap.set(eventName, newCallbacks!);
        };
    }

    emit<T>(eventName: string, data: T): void {
        const callbacks = this.callbackMap.get(eventName);
        callbacks?.forEach((cb: Listener<T>) => cb(data));
    }
}

export default new EventEmitter();
