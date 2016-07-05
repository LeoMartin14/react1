import alt from '../alt';
import PersonListActions from '../actions/PersonListActions';

class PersonListStore {
  constructor() {
    this.bindActions(PersonListActions);
    this.people = [];
  }

  onGetPeopleSuccess(data) {
    this.people = data;
  }

  onGetPeopleFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(PersonListStore);
