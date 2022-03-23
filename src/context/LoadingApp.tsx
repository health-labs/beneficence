import React, { useContext, createContext, useMemo } from 'react';

export type LoadingCtxType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const LoadingApp = createContext<LoadingCtxType>({
  isLoading: true,
  setIsLoading: () => undefined,
});

export function LoadingAppProvider(props: any) {
  const { children } = props;
  const [isLoading, setIsLoading] = React.useState(true);
  const sharedState = useMemo(
    () => ({ isLoading, setIsLoading }),
    [isLoading, setIsLoading]
  );
  return (
    <LoadingApp.Provider value={sharedState}>{children}</LoadingApp.Provider>
  );
}
export default LoadingApp;
