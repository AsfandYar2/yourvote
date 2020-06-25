import React from 'react';
import { ReactFormGenerator } from 'react-form-builder2';

export default function Modal({ formData }) {
  return (
    <div>
      <ReactFormGenerator
        // onSubmit={(data) => onSubmit(data)}
        download_path=""
        // back_action="http://localhost:5000"
        back_name="Back"
        answer_data={{}}
        action_name="Submit"
        // form_action="http://localhost:5000/form"
        // form_method="POST"
        read_only={false}
        variables={''}
        hide_actions={true}
        data={formData}
      />
    </div>
  );
}
