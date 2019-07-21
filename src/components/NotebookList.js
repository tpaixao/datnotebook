
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import {   Button, Menu, MenuLabel, MenuList, MenuLink } from 'bloomer';
import {Modal, ModalBackground,ModalCard, ModalContent, ModalClose, ModalCardBody, ModalCardHeader, ModalCardFooter , ModalCardTitle, Delete} from 'bloomer';
import {Field, Label, Control, Input } from 'bloomer';
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
					<ModalCard>
							<ModalCardHeader>
									<ModalCardTitle>New Notebook</ModalCardTitle>
									<Delete onClick={this.closeNewNotebookModal}/>
							</ModalCardHeader>
							<ModalCardBody>
									{/* Your Content  */}
								<Field>
										<Label>Notebook Title</Label>
										<Control>
												<Input type="text" placeholder='new notebook title' />
										</Control>
								</Field>

							</ModalCardBody>
							<ModalCardFooter>
									<Button isColor='danger' isPulled='left'>Cancel</Button>
									<Button isColor='success' isPulled='right'>Save</Button>
							</ModalCardFooter>
					</ModalCard>
					<ModalClose onClick={this.closeNewNotebookModal} />
				</Modal>	
			</div>
		)
	};
};

//export default NotebookList;
export default connect(mapStateToProps)( NotebookList );

