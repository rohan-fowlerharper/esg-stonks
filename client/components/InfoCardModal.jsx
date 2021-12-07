import React from 'react'
import { Button, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalContent, ModalBody, Image, useDisclosure } from '@chakra-ui/react'

function InfoCardModal () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Click for scores explained</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ESG scores explained</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src="/images/esg-score-diagram.png" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default InfoCardModal
