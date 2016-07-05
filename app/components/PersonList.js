import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import PersonListStore from '../stores/PersonListStore';
import PersonListActions from '../actions/PersonListActions';

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = PersonListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    PersonListStore.listen(this.onChange);
    PersonListActions.getPeople(this.props.params);
  }

  componentWillUnmount() {
    PersonListStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.params, this.props.params)) {
      PersonListActions.getPeople(this.props.params);
    }
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let PeopleList = this.state.people.map((person, index) => {
      return (
        <div key={person.email} className='list-group-item animated fadeIn'>
          <div className='media'>
            <span className='position pull-left'>{index + 1}</span>
            <div className='pull-left thumb-lg'>
              <Link to={'/people/' + person.email}>
              </Link>
            </div>
            <div className='media-body'>
              <h4 className='media-heading'>
                <Link to={'/people/' + person.email}>{person.name}</Link>
              </h4>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='list-group'>
          {PeopleList}
        </div>
      </div>
    );
  }
}

export default PersonList;
