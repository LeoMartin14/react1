import alt from '../alt';

class AddPersonActions {
  constructor() {
    this.generateActions(
      'addPersonSuccess',
      'addPersonFail',
      'updateName',
      'updateEmail',
      'invalidName',
      'invalidEmail'
    );
  }

  addPerson(name, email) {
    $.ajax({
      type: 'POST',
      url: '/api/people',
      data: { name: name, email: email }
    })
        .done((data) => {
        this.actions.addPersonSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addPersonFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddPersonActions);
