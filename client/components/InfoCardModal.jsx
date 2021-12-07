import React from 'react'
import { Button, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalContent, ModalBody, Image, useDisclosure, Text } from '@chakra-ui/react'

function InfoCardModal () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>ESG scores explained</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ESG scores explained</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src="/images/esg-score-diagram.png" />
            <Text>
              <Text as={'span'} color={'green.400'} fontWeight='bold'>A{' '}</Text>
            excellent ESG performance &amp; high transparency in reporting.
              <br/>
              <Text as={'span'} color={'orange.300'} fontWeight='bold'>B{' '}</Text>
            good ESG performance &amp; above-average reporting.
              <br/>
              <Text as={'span'} color={'yellow.300'} fontWeight='bold'>C{' '}</Text>
            satisfactory ESG performance &amp; moderate reporting.
              <br/>
              <Text as={'span'} color={'red.500'} fontWeight='bold'>D{' '}</Text>
            poor ESG performance &amp; insufficient reporting.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default InfoCardModal
