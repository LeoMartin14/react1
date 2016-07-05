import React from 'react';
import AddPersonStore from '../stores/AddPersonStore';
import AddPersonActions from '../actions/AddPersonActions';

class AddPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddPersonStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddPersonStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddPersonStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var name = this.state.name.trim();
    var email = this.state.email;

    if (!name) {
      AddPersonActions.invalidName();
      this.refs.nameTextField.getDOMNode().focus();
    }

    if (!email) {
      AddPersonActions.invalidEmail();
    }

    if (name && email) {
      AddPersonActions.addPerson(name, email);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add Person</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmit.bind(this) }>
                  <div className={'form-group ' + this.state.nameValidationState}>
                    <label className='control-label'>Person Name</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                      onChange={AddPersonActions.updateName} autoFocus/>
                  </div>
                  <div className={'form-group ' + this.state.emailValidationState}>
                    <label className='control-label'>Email</label>
                    <input type='text' className='form-control' ref='emailTextField' value={this.state.email}
                      onChange={AddPersonActions.updateEmail} />
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPerson;
