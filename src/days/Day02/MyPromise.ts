type PromiseState = 'pending' | 'fulfilled' | 'rejected';

type Executor<T> = (resolve: (value: T) => void, reject: (error: T) => void) => void;

class MyPromise<T> {
    private state: PromiseState = 'pending';
    private value: T | unknown = undefined;
    private handlers: Array<{
        onSuccess?: (value: T) => void;
        onFail?: (reason: unknown) => void;
    }> = [];

    constructor(executor: Executor<T>) {
        const resolve = (value: T) => {
            if (this.state !== 'pending') return;

            this.state = 'fulfilled';
            this.value = value;
            this.processHandlers();
        };

        const reject = (reason: unknown) => {
            if (this.state !== 'pending') return;

            this.state = 'rejected';
            this.value = reason;
            this.processHandlers();
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onSuccess?: (value: T) => void, onFail?: (reason: unknown) => void) {
        if (this.state === 'fulfilled') onSuccess?.(this.value as T);
        else if (this.state === 'rejected') onFail?.(this.value);
        else this.handlers.push({ onSuccess, onFail });
    }

    private processHandlers() {
        if (this.state === 'pending') return;

        this.handlers.forEach((handler) => {
            if (this.state === 'fulfilled') {
                handler.onSuccess?.(this.value as T);
            } else {
                handler.onFail?.(this.value);
            }
        });

        this.handlers = [];
    }
}

export default MyPromise;
