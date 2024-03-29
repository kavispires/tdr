import { doc, getDoc } from 'firebase/firestore';
import { firestore } from 'services/firebase';

import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';

export function getDocQueryFunction<TData>(path: string, docId: string) {
  return async () => {
    console.log(`%cQuerying ${path}/${docId} from firebase`, 'color: #f0f');
    const docRef = doc(firestore, `${path}/${docId}`);
    const querySnapshot = await getDoc(docRef);
    return (querySnapshot.data() ?? {}) as TData;
  };
}

export function useGetFirebaseDoc<TData>(
  path: string,
  docId: string,
  options?: UseQueryOptions<any, Error, TData, QueryKey>
) {
  return useQuery<any, Error, TData, QueryKey>({
    queryKey: ['firebase', path, docId],
    queryFn: getDocQueryFunction<TData>(path, docId),
    ...options,
  });
}
