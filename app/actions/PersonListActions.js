import alt from '../alt';

class PersonListActions {
  constructor() {
    this.generateActions(
      'getPeopleSuccess',
      'getPeopleFail'
    );
  }

  getPeople(payload) {
    let url = '/api/people';
    let params ={ action: 'none'};
    
    $.ajax({ url: url, data: params})
      .done((data) => {
        this.actions.getPeopleSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getPeopleFail(jqXhr);
      });
  }
}

export default alt.createActions(PersonListActions);
