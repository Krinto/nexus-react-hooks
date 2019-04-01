import React, { useState } from 'react'
import { Modal, Button, Content, Title } from "rbx";

export type SettingsModalProps = {
  updateShow(show: boolean): void;
  shouldShow: boolean;
}

const SettingsModal = (props: SettingsModalProps) => {

  function onCancelClick(event: React.MouseEvent<Element, MouseEvent>) : void {
    props.updateShow(false);
  }

  return (
    <Modal active={props.shouldShow} closeOnBlur={true} document={document}>
      <Modal.Background />
      <Modal.Card>
        <Modal.Card.Head>
          <Modal.Card.Title>Modal Title</Modal.Card.Title>
          <Modal.Close onClick={onCancelClick}/>
        </Modal.Card.Head>
        <Modal.Card.Body>
          <Content>
            <Title>Hello world</Title>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            accumsan, metus ultrices eleifend gravida, nulla nunc varius
            lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper
            dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis
            neque.
            </p>
          </Content>
        </Modal.Card.Body>
        <Modal.Card.Foot>
          <Button color="success">Save</Button>
          <Button onClick={onCancelClick}>Cancel</Button>
        </Modal.Card.Foot>
      </Modal.Card>
    </Modal>
  );
};

export default SettingsModal;