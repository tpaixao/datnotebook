import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import { Menu, MenuLabel, MenuList, MenuLink } from 'bloomer';
import { connect } from 'react-redux';

function mapStateToProps(state){
	return {
		entries: state.currentEntries,
		selectedEntry: state.selectedEntry
	}
}; 

class EntryList extends React.Component{
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
			<Menu>
				<MenuLabel>{this.props.title}</MenuLabel>
					<MenuList>
					{ 
						elements.map((value,index) => {
						if ( index===selectedEntry ){	
							return <li><MenuLink isActive>
								{value.title}<br/><span class="is-size-7 has-text-grey-lighter">{value.date}</span>
								</MenuLink></li>
						}else{
							return <li><MenuLink
							 	onClick={() => this.changeEntry(index)}
								> {value.title}<br/><span class="is-size-7 has-text-grey-lighter">{value.date}</span>
								</MenuLink></li>
							};
						})
					}
					</MenuList>
			</Menu>
		)
	};
};

//export default NotebookList;
export default connect(mapStateToProps)( EntryList );

