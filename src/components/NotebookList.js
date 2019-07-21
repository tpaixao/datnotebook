
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import { Modal, ModalBackground, ModalContent, ModalClose, Button, Menu, MenuLabel, MenuList, MenuLink } from 'bloomer';
import { connect } from 'react-redux';

function mapStateToProps(state){
	return {
		notebooks: state.notebooks,
		selectedNotebook: state.selectedNotebook
	}
}; 

class NotebookList extends React.Component{
	constructor(props){
		super(props);
		this.state = { newNotebookModal: false };
		this.showNewNotebookModal = this.showNewNotebookModal.bind(this);
		this.closeNewNotebookModal = this.closeNewNotebookModal.bind(this);
	}

	changeNotebook(idx){
		//console.log(idx);
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
				<Menu>
					<MenuLabel>{this.props.title}</MenuLabel>
						<MenuList>
							<Button isFullWidth onClick={this.showNewNotebookModal}>+</Button>
							{ elements.map((value,index) => {
								if ( index === selectedNotebook ){
									return <li><MenuLink isActive>{value.title}</MenuLink></li>
								}else{
									return <li><MenuLink 
									onClick={() => this.changeNotebook(index) }		
										>{value.title}</MenuLink></li>
								};
							})
							}
						</MenuList>
				</Menu>
				<Modal isActive={showNewNotebookModal}>
					<ModalBackground />
					<ModalContent>
						{/* Any other Bulma elements you want */}
						<p>this is a modal</p>
					</ModalContent>
					<ModalClose onClick={this.closeNewNotebookModal} />
				</Modal>	
			</div>
		)
	};
};

//export default NotebookList;
export default connect(mapStateToProps)( NotebookList );

