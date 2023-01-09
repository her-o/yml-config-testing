import React from "react";

const CustomForm = () => {
  return (
    <div className="container mt-5 fs-2">
      <div className="row">
        <div className="col-md-5">
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control  form-control-lg"
                id="firstName"
                name="firstName"
                placeholder="Please Enter Your First Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control  form-control-lg"
                id="lastName"
                name="lastName"
                placeholder="Please Enter Your Last Name"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-5">
          <h4>Output</h4>
          <pre>
            <code></code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
