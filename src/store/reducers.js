
// notebooks are of the form:
// {title: xxx, path: xxx, key: xxx}
// currentEntries: entries in the currently selected notebook
// {title: xxx, date: xxx, data: xxx}
//

//this is just for testing purposes
const initialState = {
	notebooks: [{title:"Notebook1"},{title:"Notebook2"},{title:"Notebook3"}],
	currentEntries: [],
	selectedNotebook: 0
};

const fake_entries_1 = [
	{title: "Entry 1.1",date: "15-01-2019", data: "this is an entry 1"},
	{title: "Entry 1.2",date: "13-01-2019", data: "this is an entry 2 "},
	{title: "Entry 1.3",date: "11-01-2019", data: "this is an entry 3"}
];

const fake_entries_2 = [
	{title: "Entry 2.1",date: "15-02-2019", data: "this is an entry 2.1"},
	{title: "Entry 2.2",date: "13-02-2019", data: "this is an entry 2.2 "},
	{title: "Entry 2.3",date: "11-02-2019", data: "this is an entry 2.3"}
];

const fake_entries_3 = [
	{title: "Entry 3.1",date: "15-03-2019", data: "this is an entry 3.1"},
	{title: "Entry 3.2",date: "13-03-2019", data: "this is an entry 3.2 "},
	{title: "Entry 3.3",date: "11-03-2019", data: "this is an entry 3.3"}
];

const fake_data = [fake_entries_1,fake_entries_2,fake_entries_3];

function rootReducer(state = initialState, action) {
	console.log('reducer', state, action);
	switch(action.type){
		case 'CHANGE_NOTEBOOK':
			console.log(action);
			const new_entries = fake_data[action.payload];
			return {
				...state,
				selectedNotebook: action.payload,
				currentEntries: new_entries
			};
		default:
			return state;
	};
};

export default rootReducer;
