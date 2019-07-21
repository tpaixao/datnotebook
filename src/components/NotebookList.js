
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import { Menu, MenuLabel, MenuList, MenuLink } from 'bloomer';
import { connect } from 'react-redux';

function mapStateToProps(state){
	return {
		notebooks: state.notebooks,
		selectedNotebook: state.selectedNotebook
	}
}; 

class NotebookList extends React.Component{
	//constructor(props){
		//super(props);
		//this.state = {title: props.title, elements: props.data};
	//}
	changeNotebook(idx){
		//console.log(idx);
		this.props.dispatch({type: "CHANGE_NOTEBOOK", payload: idx});
	};

	render(){
		const elements = this.props.notebooks;
		const selectedNotebook = this.props.selectedNotebook

		return(
			<Menu>
				<MenuLabel>{this.props.title}</MenuLabel>
					<MenuList>
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
		)
	};
};

//export default NotebookList;
export default connect(mapStateToProps)( NotebookList );

