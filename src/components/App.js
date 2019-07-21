import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Columns, Column, Box } from 'bloomer';
import  MyMenu from './MyMenu.js'
import  NotebookList from './NotebookList.js'
import  EntryList from './EntryList.js'
//import  SlateEditor from './Editor2.js'
import  QuillEditor from './Editor3.js'
//import RichTextEditor from './Editor.js'

//var notebooks = require( '../data.json' )

function App() {
  return (
		<Box>
			<div className="App">
				<Columns >
					<Column isSize="narrow" isMobile >
						<div className="NotebookList">
							<NotebookList title='Notebooks'> </NotebookList>
						</div>
					</Column>
					<Column isSize="narrow" isMobile >
						<div className="EntriesList">
							<EntryList title='Entries'> </EntryList>
						</div>
					</Column>
					<Column >
		{/*
			<RichTextEditor ></RichTextEditor>
		*/}
			<QuillEditor></QuillEditor>
					</Column>
				</Columns>
			</div>
		</Box>
  );
}

export default App;
