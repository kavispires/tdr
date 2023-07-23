import { useState } from 'react';
import { LOCALHOST_RESOURCE_URL } from '../utils/constants';
import { useQuery } from 'react-query';
import { useQueryParams } from './useQueryParams';

type ResourceState = {
  resourceName: string | null;
  language?: Language | null;
  response: any;
  isLoading: boolean;
  error?: ResponseError | null;
  hasResponseData: boolean;
};

export function useResourceState(availableResources: AvailableResources): ResourceState {
  const {
    queryParams: { resourceName = '', language = '' },
  } = useQueryParams();

  const [response, setResponse] = useState({});

  const { data, isLoading, error } = useQuery<any, ResponseError>({
    queryKey: ['resource', resourceName, language],
    queryFn: async () => {
      const url =
        process.env.NODE_ENV === 'development'
          ? LOCALHOST_RESOURCE_URL
          : `${process.env.PUBLIC_URL}/resources`;
      const res = language
        ? await fetch(`${url}/${resourceName}-${language}.json`)
        : await fetch(`${url}/${resourceName}.json`);

      const result = res.body ? await res.json() : {};
      setResponse(result);
      return result;
    },
    enabled: !!resourceName && availableResources.includes(resourceName),
  });

  return {
    resourceName,
    language: (language as Language) || null,
    response,
    isLoading,
    error,
    hasResponseData: Boolean(data),
  };
}
