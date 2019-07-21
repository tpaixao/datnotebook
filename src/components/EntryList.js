import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import { Menu, MenuLabel, MenuList, MenuLink } from 'bloomer';
import { connect } from 'react-redux';


function mapStateToProps(state){
	return {
		entries: state.currentEntries
	}
}; 


class EntryList extends React.Component{
	//constructor(props){
		//super(props);
		//this.state = {title: props.title, elements: props.data};
	//}

	render(){
		const elements = this.props.entries;
		
		return(
			<Menu>
				<MenuLabel>{this.props.title}</MenuLabel>
					<MenuList>
					{ elements.map((value,index) => {
						return <li><MenuLink>{value.title}<br/>{value.date}</MenuLink></li>
						})
					}
					</MenuList>
			</Menu>
		)
	};
};


//export default NotebookList;
export default connect(mapStateToProps)( EntryList );

