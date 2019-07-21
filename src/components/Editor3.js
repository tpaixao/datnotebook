import React from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

function mapStateToProps(state){
	return {
		mode: state.mode,
		text: state.entryText
	}
}; 

class QuillEditor extends React.Component {
  constructor(props) {
    super(props)
		this.state = this.props.text //{ text:  } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
			const mode = this.props.mode;
			if ( mode==='EDIT' ){
				return (
					<ReactQuill value={this.props.text}
					onChange={this.handleChange} />
				) 
			}else if (mode==='VIEW'){
				return (
					<p>
					{ this.props.text }
					</p>
				)
			};
  }
};

export default connect(mapStateToProps)(QuillEditor);
