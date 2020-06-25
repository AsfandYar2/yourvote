import React from 'react';
import { ReactFormBuilder, ReactFormGenerator } from 'react-form-builder2';
import items from '../items';
import 'react-form-builder2/dist/app.css';

export default function Formbuilder({ onPost, onSubmit, formData }) {
  // useEffect(() => {
  //   const lc = localStorage.getItem('task_data');
  //   setformData(lc ? JSON.parse(lc) : []);
  // }, []);

  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        style={{ display: 'block', margin: 'auto' }}
      >
        View Form
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Demo Form
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <ReactFormGenerator
                onSubmit={(data) => onSubmit(data)}
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
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ReactFormBuilder
          onPost={(data) => onPost(data)}
          toolbarItems={items}
        />
      </div>
    </div>
  );
}
