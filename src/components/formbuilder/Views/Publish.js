import React from 'react';

export default function Publish({
  isLive,
  clinkid,
  alinkid,
  retake,
  publishOnChange,
  onPublish,
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <div className="card bg-light" style={{ padding: '40px 20px' }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onPublish();
          }}
        >
          <label htmlFor="isLive">Make Survey Live:</label>
          <p>
            <input
              type="radio"
              name="isLive"
              value="yes"
              checked={isLive}
              onChange={(e) => publishOnChange(e)}
            ></input>
            yes
            <p>
              <input
                type="radio"
                name="isLive"
                value="no"
                checked={isLive === false}
                onChange={publishOnChange}
              ></input>
              No
            </p>
          </p>
          <br />
          <label htmlFor="clinkid">Custom Link ID:</label>
          <input
            type="text"
            name="clinkid"
            value={clinkid}
            onChange={publishOnChange}
          ></input>
          <label htmlFor="alinkid">Auto Link ID:</label>
          <input
            type="text"
            name="alinkid"
            value={alinkid}
            onChange={publishOnChange}
          ></input>
          <label htmlFor="retake">Allow user to retake survey:</label>
          <p>
            <input
              type="radio"
              name="retake"
              value="yes"
              checked={retake}
              onChange={publishOnChange}
            ></input>
            yes
            <p>
              <input
                type="radio"
                name="retake"
                value="no"
                checked={retake === false}
                onChange={publishOnChange}
              ></input>
              No
            </p>
          </p>
          <div style={{ margin: '5px' }}>
            <button
              className="btn"
              style={{
                backgroundColor: '#5744ed',
                color: 'white',
                margin: '5px',
                // borderRadius: "20px",
              }}
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
