import React from 'react'

const outerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  };

  const labelStyle = {
    fontSize: '2rem',
    color: '#000',
    
  };

  const containerStyle = {
    paddingTop: '0rem',
    paddingBottom:'2rem',
    paddingRight:'0rem',
    paddingLeft:'0rem',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    maxWidth: '800px',
    maxHeight: '1200px',
    width: '100%',
  };
  const formStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    paddingRight:'2rem',
    paddingLeft:'2rem',
    justifyContent: 'space-between'
  };

  const formGroupStyle = {
    marginBottom: '1rem',
    flex: '1 1 30%',
  };

  const headerLabel ={
    fontSize:'3.5rem',
    padding:'1.2rem',
    marginBottom:'2rem',
    color:'#fff',
    fontWeight: 'bold',
    borderRadius: '1rem 1rem 0rem 0rem',
    backgroundColor:'#F4A460'
  };
  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1.5px solid #ced4da',
    maxHeight:'100px',
    
  };
const selectStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ced4da',
    backgroundColor: '#fff',
  };

  const buttonStyle = {
    marginTop: '1rem',
    padding: '0.5rem 2rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };


const Login = () => {
  return (
    <div style={outerContainerStyle}>
      
        <div style={containerStyle}>
        <div style={headerLabel}>
          <label >Login as Pet Owner</label>
          </div>
          
      <form style={formStyle} class="row g-3 needs-validation" novalidate>
  <div style={formGroupStyle} class="col-md-4">
    <label style={labelStyle} for="validationCustom01" class="form-label">First name</label>
    <input style={inputStyle} type="text" class="form-control" id="validationCustom01"  required />
    {/* <div  class="valid-feedback">
      Looks good!
    </div> */}
  </div>
  <div style={formGroupStyle}  class="col-md-4">
    <label style={labelStyle} for="validationCustom02" class="form-label">Last name</label>
    <input style={inputStyle} type="text" class="form-control" id="validationCustom02"  required />
    {/* <div  class="valid-feedback">
      Looks good!
    </div> */}
  </div>
  <div style={formGroupStyle} class="col-md-4">
    <label style={labelStyle} for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input style={inputStyle} type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
      {/* <div  class="invalid-feedback">
        Please choose a username.
      </div> */}
    </div>
  </div>
  <div style={formGroupStyle} class="col-md-6">
    <label style={labelStyle} for="validationCustom03" class="form-label">City</label>
    <input style={inputStyle} type="text" class="form-control" id="validationCustom03" required />
    {/* <div class="invalid-feedback">
      Please provide a valid city.
    </div> */}
  </div>
  <div style={formGroupStyle} class="col-md-3">
    <label style={labelStyle} for="validationCustom04" class="form-label">State</label>
    <select style={selectStyle} class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    {/* <div class="invalid-feedback">
      Please select a valid state.
    </div> */}
  </div>
  <div style={formGroupStyle} class="col-md-3">
    <label style={labelStyle} for="validationCustom05" class="form-label">Zip</label>
    <input style={inputStyle} type="text" class="form-control" id="validationCustom05" required />
    {/* <div class="invalid-feedback">
      Please provide a valid zip.
    </div> */}
  </div>
  {/* <div class="col-12">
    <div style={formGroupStyle} class="form-check">
      <input  class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div> */}
  <div  class="col-12">
    <button class="btn btn-primary" type="submit">Register User</button>
  </div>
</form>
    </div>


    </div>
    
  )
}

export default Login
