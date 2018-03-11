'use strict'
import React from 'react'
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'

export default class BooksForm extends React.Component {
  render () {
    return (
      <Well>
        <Panel>
          <Panel.Body>
            <FormGroup controlId='title'>
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type='text'
                placeholder='Enter Title'
                ref='title' />
            </FormGroup>
            <FormGroup controlId='description'>
              <ControlLabel>Description</ControlLabel>
              <FormControl
                type='text'
                placeholder='Enter Description'
                ref='title' />
            </FormGroup>
            <FormGroup controlId='price'>
              <ControlLabel>Price</ControlLabel>
              <FormControl
                type='text'
                placeholder='Enter Price'
                ref='title' />
            </FormGroup>
            <Button bsStyle='primary'>Save book</Button>
          </Panel.Body>
        </Panel>
      </Well>
    )
  }
}
