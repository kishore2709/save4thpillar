import React, { Component } from "react";

import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./Register.css";

class Register extends Component {
  state = {
    modal: true
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn} />
          <ModalBody>
            <div className="login-form">
              <form action="/examples/actions/confirmation.php" method="post">
                <h2 className="text-center">Log in</h2>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-danger btn-block btnstyle"
                  >
                    Log in
                  </button>
                </div>
                <div className="clearfix">
                  <label className="pull-left checkbox-inline">
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="/" className="pull-right">
                    Forgot Password?
                  </a>
                </div>
              </form>
              <p className="text-center">
                or &nbsp; <a href="/">Create an Account</a>
              </p>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Register;

// import React from "react";

// const register = () => {
//   return (
//     <div>
//       <div class="signup-form">
//         <form action="/examples/actions/confirmation.php" method="post">
//           <h2>Register</h2>
//           <p class="hint-text">
//             Create your account. It's free and only takes a minute.
//           </p>
//           <div class="form-group">
//             <div class="row">
//               <div class="col-xs-6">
//                 <input
//                   type="text"
//                   class="form-control"
//                   name="first_name"
//                   placeholder="First Name"
//                   required="required"
//                 />
//               </div>
//               <div class="col-xs-6">
//                 <input
//                   type="text"
//                   class="form-control"
//                   name="last_name"
//                   placeholder="Last Name"
//                   required="required"
//                 />
//               </div>
//             </div>
//           </div>
//           <div class="form-group">
//             <input
//               type="email"
//               class="form-control"
//               name="email"
//               placeholder="Email"
//               required="required"
//             />
//           </div>
//           <div class="form-group">
//             <input
//               type="password"
//               class="form-control"
//               name="password"
//               placeholder="Password"
//               required="required"
//             />
//           </div>
//           <div class="form-group">
//             <input
//               type="password"
//               class="form-control"
//               name="confirm_password"
//               placeholder="Confirm Password"
//               required="required"
//             />
//           </div>
//           <div class="form-group">
//             <label class="checkbox-inline">
//               <input type="checkbox" required="required" /> I accept the{" "}
//               <a href="/">Terms of Use</a> &amp; <a href="/">Privacy Policy</a>
//             </label>
//           </div>
//           <div class="form-group">
//             <button type="submit" class="btn btn-success btn-lg btn-block">
//               Register Now
//             </button>
//           </div>
//         </form>
//         <div class="text-center">
//           Already have an account? <a href="/">Sign in</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default register;
