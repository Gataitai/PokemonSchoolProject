import { useEffect, useState } from 'svelte';
import { navigate } from 'svelte-routing';
import { updateQueryParams } from './updateQueryParams';

function useAuctions(initialParams) {
    const [auctions, setAuctions] = useState([]);
    const [params, setParams] = useState(initialParams);

    useEffect(() => {
        const fetchAuctions = async () => {
            const response = await fetch(`/api/auctions?${new URLSearchParams(params)}`);
            const data = await response.json();
            setAuctions(data.auctions);
        };

        fetchAuctions();
    }, [params]);

    const updateParams = (newParams) => {
        setParams(newParams);
        updateQueryParams(newParams);
    };

    return { auctions, params, updateParams };
}