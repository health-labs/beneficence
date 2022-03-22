import React, { useCallback } from 'react';

type CopySuccessProps = 'success' | 'error';
type CopyProps = {
  text: string;
  showCopiedRef:
    | React.RefObject<HTMLImageElement>
    | React.RefObject<HTMLDivElement>;
  showCopiedRef2?:
    | React.RefObject<HTMLImageElement>
    | React.RefObject<HTMLDivElement>;
};
const useCopyText = ({ text, showCopiedRef, showCopiedRef2 }: CopyProps) => {
  const [copied, setCopied] = React.useState(false);
  const [copiedText, setCopiedText] = React.useState(text);
  const [copySuccess, setCopySuccess] =
    React.useState<CopySuccessProps>('success');

  const onCopyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setCopiedText(text);
        setCopySuccess('success');
      },
      () => {
        setCopySuccess('error');
      }
    );

    if (showCopiedRef.current !== null && showCopiedRef2?.current !== null) {
      showCopiedRef2?.current?.classList.add('hide');
      showCopiedRef.current?.classList.add('show');
      setTimeout(() => {
        showCopiedRef.current?.classList.remove('show');
        showCopiedRef2?.current?.classList.remove('hide');
      }, 1500);
    }
  }, [text]);
  return { copiedText, onCopyToClipboard, copySuccess };
};

export default useCopyText;
