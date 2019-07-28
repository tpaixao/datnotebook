
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';

function mapStateToProps(state){
	return {
		entries: state.currentEntries,
		selectedEntry: state.selectedEntry
	}
}; 

class PhotonEntryList extends React.Component{
	//constructor(props){
		//super(props);
		//this.state = {title: props.title, elements: props.data};
	//}
	changeEntry(idx){
		this.props.dispatch({type: "CHANGE_ENTRY", payload: idx});
	};

	render(){
		const elements = this.props.entries;
		const selectedEntry = this.props.selectedEntry;

		return(
			<div className="pane pane-sm">
				<ul className="list-group">
					<li className="list-group-header">
					<input className="form-control" type="text" placeholder="Search"></input>
					</li>
			{elements.map( (value,index) => {
						if(index===selectedEntry ){	
							return ( 
								<li className="list-group-item active">
								<div className="media-body">
								<strong>{value.title}</strong>
								<p>{value.date}</p>
								</div>
								</li> 
							)}else{
								return ( 
									<li className="list-group-item">
									<div className="media-body" onClick={() => this.changeEntry(index)}>
									<strong>{value.title}</strong>
									<p>{value.date}</p>
									</div>
									</li> )
						};
						}) }
			</ul></div>
		)
	};
};

//export default NotebookList;
export default connect(mapStateToProps)( PhotonEntryList );

