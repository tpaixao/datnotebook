import React from 'react';
import '../photonkit/css/photon.min.css';

import { connect } from 'react-redux';

function mapStateToProps(state){
	return {
		notebooks: state.notebooks,
		selectedNotebook: state.selectedNotebook
	}
}; 

class Toolbar extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
		<div className="toolbar-actions">
			<div className="btn-group pull-left">

				<div className="btn btn-default">
					<span className="icon icon-book"></span>
				</div>


			</div>
		</div>
	)

	};

};



export default connect(mapStateToProps)( Toolbar );
