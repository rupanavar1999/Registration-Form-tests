import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      lastName: value,
    })
  }

  renderLastNameField = () => {
    const {lastName, showLastNameError} = this.state
    const className = showLastNameError
      ? 'name-input error-field'
      : 'name-input'

    return (
      <div className="inputContainer">
        <label className="labelContainer" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          placeholder="LAST NAME"
          className={className}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      firstName: value,
    })
  }

  renderFirstNameField = () => {
    const {firstName, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'name-input error-field'
      : 'name-input'

    return (
      <div className="inputContainer">
        <label className="labelContainer" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          placeholder="FIRST NAME"
          className={className}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderForm = () => {
    const {showFirstNameError, showLastNameError} = this.state

    return (
      <form className="formContainer" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="errorMsg">Required</p>}
        {this.renderLastNameField()}
        {showLastNameError && <p className="errorMsg">Required</p>}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAr = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  renderSuccessView = () => (
    <div className="imgContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="successLogo"
      />
      <p>Submitted Successfully</p>
      <button type="button" className="button" onClick={this.onClickSubmitAr}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="regContainer">
        <h1 className="heading">Registration</h1>
        <div className="viewContainer">
          {isFormSubmitted ? this.renderSuccessView() : this.renderForm()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
