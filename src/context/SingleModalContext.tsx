import React, { createContext, useMemo } from 'react';

export type SingleModalContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading?: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  content: JSX.Element;
  handleModalAction: (ele?: React.ReactNode) => void;
};
const SingleModalContext = createContext<SingleModalContextType>({
  isOpen: false,
  setIsOpen: () => undefined,
  content: <div />,
  handleModalAction: () => undefined,
});

export function SingleModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [content, setContent] = React.useState<JSX.Element>(<div />);

  const handleModalAction = React.useCallback(
    (ele = null) => {
      setIsOpen(!isOpen);
      setContent(ele);
      setIsLoading(false);
    },
    [isOpen, setIsLoading]
  );

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      isLoading,
      setIsLoading,
      content,
      handleModalAction,
    }),
    [isOpen, isLoading, content, handleModalAction]
  );

  return (
    <SingleModalContext.Provider value={value}>
      {children}
    </SingleModalContext.Provider>
  );
}

export default SingleModalContext as React.Context<SingleModalContextType>;
