import React, {
  Component,
  ReactEventHandler,
  MouseEvent,
  KeyboardEvent,
  ChangeEvent,
  FocusEvent,
} from 'react';
import classnames from 'classnames';

interface ITodoTextInput {
  onSave: (text: string) => any;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}

export default class TodoTextInput extends Component<ITodoTextInput> {
  public state = {
    text: this.props.text || '',
  };

  public handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  };

  public handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };

  public handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  };

  public render() {
    return (
      <input
        className={classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo,
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}
