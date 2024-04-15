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
    <Modal
      size="full"
      isOpen={isOpen}
      onClose={handleClose}
      placement="bottom-center"
      className="max-h-[700px] w-[800px] overflow-auto"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center pt-4">
              {title}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
