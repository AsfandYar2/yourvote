import React, { useState } from "react";
import { SketchPicker } from "react-color";
import ColorPicker from "react-color-picker";
import "react-color-picker/index.css";

export default function Design({
  fsize,
  ftype,
  bgcolor,
  onchange,
  handleChangeComplete,
}) {
  const [flag, setFlag] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <hr />
      <div className="card bg-light" style={{ padding: "40px 20px" }}>
        <form onSubmit="">
          <label htmlFor="ftype">Font type:</label>
          <select name="ftype" value={ftype} onChange={(e) => onchange(e)}>
            <option value="Playfair Display">Playfair Display</option>
            <option value="Black Jack">Black Jack</option>
            <option value="Caviar Dreams">Caviar Dreams</option>
            <option value="Arieal">Arieal</option>
            <option value="Arizonia">Arizonia</option>
            <option value="Colaborate">Colaborate</option>
          </select>
          {/* <input
            type="text"
            name="ftype"
            value={ftype}
            onChange={onchange}
            required
          ></input> */}
          <label htmlFor="fsize">Font size:</label>
          <select name="fsize" value={fsize} onChange={(e) => onchange(e)}>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
          {/* <input
            type="number"
            name="fsize"
            value={fsize}
            onChange={onchange}
            required
          ></input> */}
          <br />
          <label htmlFor="bgcolor">Background Color:</label>
          <button
            onClick={flag ? () => setFlag(false) : () => setFlag(true)}
            style={{
              background: bgcolor,
              width: 60,
              height: 30,
              // color: bgcolor,
            }}
          >
            {/* {bgcolor} */}
          </button>
          {flag && (
            <SketchPicker
              color={bgcolor}
              onChangeComplete={(color) => handleChangeComplete(color)}
            />
          )}

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
