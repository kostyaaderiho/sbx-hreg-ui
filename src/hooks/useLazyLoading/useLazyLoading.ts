import { useCallback, useEffect, useState } from 'react';

import { debounce } from '~/utils';

import { SCROLL_BOTTOM_OFFSET } from './useLazyLoading.constants';

export type UseLazyLoadingType = {
    el: Element;
    fetchFn: (offset: number) => void;
    limit: number;
    offset: number;
    fetching: boolean;
};

export const useLazyLoading = ({
    el,
    fetchFn,
    limit,
    offset: defaultOffset,
    fetching = false
}: UseLazyLoadingType) => {
    const [offset, setOffset] = useState(defaultOffset);
    const [isFetching, setIsFetching] = useState(fetching);
    const [element] = useState(el);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedHandler = useCallback(
        debounce((ev: { target: HTMLElement }) => {
            const { target } = ev;

            if (
                Math.floor(target.scrollHeight - target.scrollTop) <=
                    target.clientHeight &&
                !isFetching
            ) {
                setIsFetching(true);
                fetchFn(offset);
                setOffset(offset + limit);
                el.scrollTop = el.scrollTop - SCROLL_BOTTOM_OFFSET;
            }
        }),
        [fetchFn, isFetching, limit, el, offset]
    );

    useEffect(() => {
        element?.addEventListener('scroll', debouncedHandler);

        return () => element?.removeEventListener('scroll', debouncedHandler);
    }, [element, debouncedHandler]);

    useEffect(() => setIsFetching(fetching), [fetching]);

    return {
        offset
    };
};
