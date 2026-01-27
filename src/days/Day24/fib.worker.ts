const calculateFibonacci = (n: number): number => {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

self.onmessage = (e: MessageEvent) => {
    const num = e.data;
    const result = calculateFibonacci(num);
    self.postMessage(result);
};

export {};
