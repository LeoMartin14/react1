import alt from '../alt';
import AddPersonActions from '../actions/AddPersonActions';

class AddPersonStore {
  constructor() {
    this.bindActions(AddPersonActions);
    this.name = '';
    this.email = '';
    this.helpBlock = '';
    this.nameValidationState = '';
    this.emailValidationState = '';
  }

  onAddPersonSuccess(successMessage) {
    this.nameValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onAddPersonFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateName(event) {
    this.name = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onUpdateEmail(event) {
    this.email = event.target.value;
    this.emailValidationState = '';
  }

  onInvalidName() {
    this.nameValidationState = 'has-error';
    this.helpBlock = 'Please enter a Person name.';
  }

  onInvalidEmail() {
    this.emailValidationState = 'has-error';
  }
}

export default alt.createStore(AddPersonStore);
