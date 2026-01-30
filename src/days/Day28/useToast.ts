import { useContext } from 'react';
import ToastContext from './ToastContext';

const useToast = () => {
    const toastContext = useContext(ToastContext);
    if (!toastContext) throw new Error('Toast components must be wrapped in ToastConext.Provider');
    return toastContext;
};

export default useToast;
