import React, { useState } from 'react';
import { ReactFormGenerator } from 'react-form-builder2';

const LivesurveyItems = ({ survey }) => {
  const [myformData, setformData] = useState([
    {
      bold: false,
      canHaveAlternateForm: true,
      canHaveDisplayHorizontal: true,
      canHaveOptionCorrect: true,
      canHaveOptionValue: true,
      canHavePageBreakBefore: true,
      canPopulateFromApi: true,
      content: 'Placeholder Text...',
      element: 'Header',
      id: '8B6FB668-307B-4D78-9E28-BAF39573DCDA',
      italic: false,
      required: false,
      static: true,
      text: 'Header Text',
    },
  ]);

  const getDate = (ms) => {
    let newDate = new Date(ms);
    return newDate.toDateString();
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Created</th>
            <th scope="col">Last Update</th>
          </tr>
        </thead>
        <tbody>
          {survey.map((s) => (
            <tr>
              <td>{s.title}</td>
              <td>{getDate(s.created)}</td>
              <td>{getDate(s.lastupdate)}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => {
                    setformData(s.formData);
                  }}
                  style={{ display: 'block', margin: 'auto' }}
                >
                  View
                </button>
              </td>

              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ display: 'block', margin: 'auto' }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
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
                  data={myformData}
                />
                hello its me
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
      </div>
    </div>
  );
};

export default LivesurveyItems;
