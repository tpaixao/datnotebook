import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Icon, Columns, Column, Box, Container } from 'bloomer';
//import  MyMenu from './MyMenu.js'
//import  NotebookList from './NotebookList.js'
import  PhotonNotebookList from './PhotonList.js';
import  PhotonEntryList from './PhotonEntryList.js';
import Toolbar from './Toolbar.js';
//import  EntryList from './EntryList.js'
//import  SlateEditor from './Editor2.js'
import  QuillEditor from './Editor3.js';
//import RichTextEditor from './Editor.js'

import '../photonkit/css/photon.min.css';

//var notebooks = require( '../data.json' )

function App() {
	let drag_style={
		"-webkit-app-region": "drag" 
	};

  return (
		<div className="App">
			<div className="window">
				<header className="toolbar toolbar-header" style={drag_style}>
					<h1 className="title"  >DatNotebook</h1>
					<Toolbar></Toolbar>
				</header>

				<div className="window-content">
					<div className="pane-group">
						<PhotonNotebookList></PhotonNotebookList>
						<PhotonEntryList></PhotonEntryList>
					</div>
				</div>

			</div>
		</div>
  );
}

export default App;
