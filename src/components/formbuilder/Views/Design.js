import React from 'react';
import { SketchPicker } from 'react-color';

export default function Design({
  fsize,
  ftype,
  bgcolor,
  onchange,
  handleChangeComplete,
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <hr />
      <div className="card bg-light" style={{ padding: '40px 20px' }}>
        <form onSubmit="">
          <label htmlFor="ftype">Font type:</label>
          <input
            type="text"
            name="ftype"
            value={ftype}
            onChange={onchange}
            required
          ></input>
          <label htmlFor="fsize">Font size:</label>
          <input
            type="number"
            name="fsize"
            value={fsize}
            onChange={onchange}
            required
          ></input>
          <br />
          <label htmlFor="bgcolor">Background Color:</label>
          <SketchPicker
            color={bgcolor}
            onChangeComplete={(color) => handleChangeComplete(color)}
          />
          {/* <div style={{ margin: '5px' }}>
            <button
              className="btn"
              style={{
                backgroundColor: '#5744ed',
                color: 'white',
                margin: '5px',
                // borderRadius: "20px",
              }}
            >
              Submit
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
}
