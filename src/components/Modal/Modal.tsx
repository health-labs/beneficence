import { Dialog } from '@headlessui/react';
import React from 'react';
import { createPortal } from 'react-dom';
import useSingleModal from '../../hooks/useSingleModal';

function Modal() {
  const { isOpen, content, handleModalAction } = useSingleModal();
  if (!isOpen) return null;

  return createPortal(
    <Dialog
      open={isOpen}
      onClose={handleModalAction}
      className="fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-bene-overlay-backdrop transition transform duration-125 ease-in-out z-30">
      <div>
        {content}
        <div className="absolute w-full -right-4 bottom-2 mx-auto text-gray-500">
          Press <kbd>Esc</kbd> to exit
        </div>
      </div>
      <Dialog.Overlay />
    </Dialog>,
    document.body as HTMLElement
  );
}

export default Modal;
