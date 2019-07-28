
import React from 'react';
import '../photonkit/css/photon.min.css';

import { connect } from 'react-redux';

function mapStateToProps(state){
	return {
		notebooks: state.notebooks,
		selectedNotebook: state.selectedNotebook
	}
}; 

class PhotonNotebookList extends React.Component{
	constructor(props){
		super(props);
		this.state = { newNotebookModal: false };
		this.showNewNotebookModal = this.showNewNotebookModal.bind(this);
		this.closeNewNotebookModal = this.closeNewNotebookModal.bind(this);
	}

	changeNotebook(idx){
		this.props.dispatch({type: "CHANGE_NOTEBOOK", payload: idx});
	};

	showNewNotebookModal(){
		console.log("adding notebook");
		this.setState( { newNotebookModal: true } );
	};

	closeNewNotebookModal(){
		this.setState( { newNotebookModal: false } );
	};

	render(){
		const elements = this.props.notebooks;
		const selectedNotebook = this.props.selectedNotebook;
		const showNewNotebookModal = this.state.newNotebookModal;

		return(
		<div>
				<div className="pane pane-sm sidebar">
					<nav className="nav-group">
						<h5 className="nav-group-title">Notebooks</h5>
						{elements.map((value,index)=> {
						if (index === selectedNotebook){
						return (
						<span class="nav-group-item active">
							<span class="icon icon-folder"></span>
							{ value.title }
						</span>)
						}else{
						return (
						<span class="nav-group-item" onClick={ () => this.changeNotebook(index) }>
							<span class="icon icon-folder"></span>
							{ value.title }
						</span>)
						};
						}) }
					</nav>
				</div>
		</div>
		)
	};
};

//export default NotebookList;
export default connect(mapStateToProps)( PhotonNotebookList );

