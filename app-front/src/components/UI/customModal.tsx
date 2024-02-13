"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { ReactNode, useEffect } from "react";
interface CustomModalProps {
  title?: string;
  children?: ReactNode;
  openModal?: boolean;
  onCloseModal?: () => void;
  onConfirm?: () => void;
}
export const CustomModal = ({
  title,
  children,
  openModal,
  onCloseModal,
  onConfirm,
}: CustomModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (openModal === true) {
      onOpen();
    } else {
      onClose();
    }
  }, [onClose, onOpen, openModal]);

  const handleClose = () => {
    onCloseModal && onCloseModal();
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={handleClose} placement="bottom-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
