"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect } from "react";
interface ConfirmModalProps {
  title?: string;
  name?: string;
  openModal?: boolean;
  onCloseModal?: () => void;
  onConfirm?: () => void;
}
export const ConfirmModal = ({
  title,
  name,
  openModal,
  onCloseModal,
  onConfirm,
}: ConfirmModalProps) => {
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
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <p>{`You are going to delete ${name}`}</p>
              <p>Are you sure?</p>
            </ModalBody>
            <ModalFooter>
              <div className="w-full grid grid-cols-2 place-items-center gap-2 mt-4">
                <Button
                  className="w-full mb-2"
                  color="danger"
                  onPress={onConfirm}
                >
                  Delete
                </Button>
                <Button
                  className="w-full mb-2"
                  color="default"
                  variant="light"
                  onPress={handleClose}
                >
                  Close
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
