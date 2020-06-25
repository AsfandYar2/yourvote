import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormBuiGenView from './Views/FormBuiGenView';
import Publish from './Views/Publish';
import Design from './Views/Design';
import Modal from 'react-modal';

const correctFormElementName = (userSubmitData, formData) => {
  const data = [];
  userSubmitData.forEach((d) => {
    formData.forEach(
      (s) => d.name === s.field_name && data.push({ ...d, name: s.label })
    );
  });
  return data;
};

function Formbuilder({ publish, forms }) {
  const history = useHistory();

  // FrmBuiGenView.js stateNfunctions
  const [formData, setformData] = useState([]);

  const onPost = (data) => {
    setformData([...data.task_data]);
    localStorage.setItem('task_data', JSON.stringify(data.task_data));
  };

  const onSubmit = (userData) => {
    if (!userData.length) return;
    console.log(correctFormElementName(userData, formData));
  };

  // Design.js stateNfunctions
  const [type, setType] = useState({
    ftype: 'popins',
    fsize: '18',
    bgcolor: '#888ed',
  });

  const onchange = (e) => setType({ ...type, [e.target.name]: e.target.value });

  const handleChangeComplete = (color) => {
    setType({ bgcolor: color.hex });
  };

  // Publish.js stateNfunctions
  const [publishtype, setpublishType] = useState({
    isLive: '',
    clinkid: '',
    alinktid: '',
    retake: '',
  });

  const publishOnChange = (e) => {
    if (e.target.value === 'yes')
      setpublishType({ ...publishtype, [e.target.name]: true });
    else if (e.target.value === 'no')
      setpublishType({ ...publishtype, [e.target.name]: false });
    else setpublishType({ ...publishtype, [e.target.name]: e.target.value });
  };

  const onPublish = () => {
    const payload = {
      title: `myform ${forms.length + 1}`,
      ...type,
      ...publishtype,
      formData: [...formData],
      created: Date.now(),
      lastupdate: Date.now(),
    };
    publish(payload);
    history.push('/dashboard');
  };

  // current file stateNfunctions
  const [step, setstep] = useState('build');

  const setStep = (newStep) => {
    if (newStep === 'build') return;
    if (step === 'build') setIsOpen(true);
    else setstep(newStep);
  };

  const getCurrentStep = () => {
    if (step === 'build')
      return (
        <FormBuiGenView
          setStep={setStep}
          onPost={onPost}
          onSubmit={onSubmit}
          formData={formData}
        />
      );
    if (step === 'design')
      return (
        <Design
          setStep={setStep}
          onchange={onchange}
          ftype={type.ftype}
          fsize={type.fsize}
          bgcolor={type.bgcolor}
          handleChangeComplete={handleChangeComplete}
        />
      );
    if (step === 'publish')
      return (
        <Publish
          setStep={setStep}
          onPublish={onPublish}
          isLive={publishtype.isLive}
          clinkid={publishtype.clinkid}
          alinkid={publishtype.alinkid}
          retake={publishtype.retake}
          publishOnChange={publishOnChange}
        />
      );
  };

  //modal
  const [modalIsOpen, setIsOpen] = useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '50px',
      zIndex: '3000',
    },
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Coutinue"
        style={customStyles}
      >
        Do You want to Continue you wont be able to go back!
        <br />
        <button
          className="btn form-builder-btn"
          onClick={() => {
            setstep('design');
            setIsOpen(false);
          }}
        >
          Continue
        </button>
        <button
          className="btn form-builder-btn"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Back
        </button>
      </Modal>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          className={`btn form-builder-btn ${step === 'build' && 'selected'}`}
          onClick={() => setStep('build')}
        >
          Build
        </button>
        <button
          className={`btn form-builder-btn ${step === 'design' && 'selected'}`}
          onClick={() => setStep('design')}
        >
          Design
        </button>
        <button
          className={`btn form-builder-btn ${step === 'publish' && 'selected'}`}
          onClick={() => setStep('publish')}
        >
          Publish
        </button>
      </div>
      {getCurrentStep()}
    </div>
  );
}

const mapStateToProps = (state) => ({
  forms: state.formbuilder.forms,
});

const mapDispatchToProps = (dispatch) => {
  return {
    publish: (form) => {
      dispatch({ type: 'PUBLISH', payload: form });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Formbuilder);
