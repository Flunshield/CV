import { useState, useEffect } from 'react';

const useIpStatus = () => {
    const [status, setStatus] = useState<boolean>(false);
    const checkIp = async () => {
        try {
            const response = await fetch(`https://82.67.18.180`, { method: 'HEAD' });

            if (response.ok) {
                setStatus(true);
            } else {
                setStatus(false);
            }
        } catch (error) {
            setStatus(false);
        }
    };

    useEffect(() => {
        checkIp();
    }, []);

    return status;
};

export default useIpStatus;
