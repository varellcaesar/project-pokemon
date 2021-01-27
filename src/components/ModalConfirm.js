import React from 'react';
import '../style/button-catch.css'
import { Button, Modal, Input } from 'antd';
import { connect } from 'react-redux';


const ModalConfirm = ({visible, loading, handleOk, handleCancel, pokemonDetail, onInputChanged}) => (
    <Modal
        visible={visible}
        title="Gatcha !!!"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <p>You Caught a {pokemonDetail.pokemonDetail.name}</p>
        <p>give a Nick Name !!!</p>
        <Input onChange={(changedText) => {onInputChanged(changedText)}}></Input>
    </Modal>
)

const mapStateToProps = (state) => (
  {
    pokemonDetail: state.pokemonDetailReducer,
  }
)


export default connect(mapStateToProps)(ModalConfirm);
