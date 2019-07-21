import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import { Menu, MenuLabel, MenuList, MenuLink } from 'bloomer';


class MyMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = {title: props.title, elements: props.data};
	}
	render(){
		const elements = this.state.elements;
		return(
			<Menu>
				<MenuLabel>{this.state.title}</MenuLabel>
					<MenuList>
					{ elements.map((value,index) => {
						return <li><MenuLink>{value.title}</MenuLink></li>
						})
					}
					</MenuList>
			</Menu>
	)
	};
}

export default MyMenu;

