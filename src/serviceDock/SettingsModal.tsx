import React, { useState, useEffect } from 'react'
import { Modal, Button, Select } from "rbx";
import { AppSettings, DockPosition } from '../App';
import map from "ramda/src/map";

type SettingsModalProps = {
  updateShow(show: boolean): void;
  shouldShow: boolean;
  appSettings: AppSettings;
  updateSettings(setting: AppSettings): void;
}

const SettingsModal = (props: SettingsModalProps) => {

  function onCancelClick(event: React.MouseEvent<Element, MouseEvent>) : void {
    props.updateShow(false);
  }

  function onSaveClick(event: React.MouseEvent<Element, MouseEvent>) : void {
    props.updateSettings(localSettings);
    props.updateShow(false);
  }

  function onPositionChange(event: React.ChangeEvent<{value: DockPosition}>) : void {
    setLocalSettings({
      ...localSettings,
        dockPosition: event.target.value
    });
  }

  const allPositions: DockPosition[] = ['top', 'right', 'bottom', 'left', 'center'];

  useEffect(() => {
    setLocalSettings(props.appSettings);
  }, [props.appSettings]);

  const [localSettings, setLocalSettings] = React.useState(props.appSettings);

  return (
    <Modal active={props.shouldShow} closeOnBlur={true} document={document}>
      <Modal.Background />
      <Modal.Card>
        <Modal.Card.Head>
          <Modal.Card.Title>Configure Application Settings</Modal.Card.Title>
          <Modal.Close onClick={onCancelClick}/>
        </Modal.Card.Head>
        <Modal.Card.Body>
          <Select.Container>
            <Select onChange={onPositionChange}>
              {map(item => (
                <Select.Option key={item} value={item}>{item}</Select.Option>
              ), allPositions)}
            </Select>
          </Select.Container>
        </Modal.Card.Body>
        <Modal.Card.Foot>
          <Button color="success" onClick={onSaveClick}>Save</Button>
          <Button onClick={onCancelClick}>Cancel</Button>
        </Modal.Card.Foot>
      </Modal.Card>
    </Modal>
  );
};

export default SettingsModal;