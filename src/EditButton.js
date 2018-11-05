import React from 'react';
import Popup from "reactjs-popup";
import { PhotoshopPicker, SketchPicker } from 'react-color';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

class EditButton extends React.Component {
	constructor(props) {
		super(props);
		const {node, leaf, startStopEditing, updateData, updateBackgroundColor} = this.props;
		this.state = { node, leaf, closeId: 'closeBtn' + node.id };

		/* This binding is necessary to make `this` work in the callback.
		 * For instance to be able to use "this.props..." and "this.state...".
		 */
		this.handleOpenCloseEditPopup = this.handleOpenCloseEditPopup.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentWillMount() {
		document.addEventListener('click', this.handleClickOutside, false);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, false);
	}

	handleClickOutside(e) {
		if(!ReactDOM.findDOMNode(this).contains(e.target)) {
			console.log("erbuiten!");
			//ReactTestUtils.Simulate.click(document.getElementById(this.state.closeId));
		}
	}

	/**
	 * When the popup is opened, we want to make sure the popup is on top of all other elements.
	 * We call the update function to temporarily update the 'editing'-field of the node.
	 * This field is checked to know which z-index to apply.
	 * Check out {@link Cluster.render#updateNodeEdit}
	 */
	handleOpenCloseEditPopup() {
		this.props.startStopEditing();
	};

	handleSubmit(event) {
		const newTitle = event.target.title.value;
		const newContent = event.target.content.value;
		this.props.updateData(this.state.node.id, newTitle, newContent);
		event.preventDefault();
	}

	/**
	 * Use this if you want to update the state for every single change that is made, even if the user did not click
	 * the save-button. According to me, this is bad for the performance of the app.
	 * If you want to use it, add "onChange={this.handleChange}" to the form elements.
	 * @param event
	 */
	handleChange(event) {
		console.log("change");
		console.log(event);
	}

	handleColorChange(color) {
		console.log("handlecolor");
		this.props.updateBackgroundColor(this.state.node.id, color.hex, true);
	}

	render() {

		const button =
			<button
					id={this.state.closeId}
					className={
						'bg-grey-light hover:bg-grey ' +
						'text-grey-darkest font-bold ' +
						(this.state.leaf ? 'rounded-r ' : 'border-r ') +
						'border-l border-grey border-solid ' +
						'py-1 px-1 ' +
						'items-center'}
					style={{display: 'block', width: 100}}>
				Edit
			</button>;

		/**
		 * The button we return triggers a popup showing the details of the node.
		 * Created with reactjs-popup.
		 */
		// TODO: avoid fixed width of 500px (responsiveness).
		// TODO: closeOnDocumentClick -> it should close when the user clicks outside of the popup or opens another.
		// TODO: convert inline style of the div to tailwind css
		return (
			<Popup
				trigger={button}
				contentStyle={{width: '500px'}}
				onOpen={this.handleOpenCloseEditPopup}
				onClose={this.handleOpenCloseEditPopup}
				closeOnDocumentClick={true}
				closeOnEscape={true}
			>
				{close => (
					<div className="w-full overflow-y-scroll" style={{maxHeight: '300px'}}>
						<form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
							<div className="mb-4">
								<label className="block text-grey-darker text-sm font-bold mb-2">
									Node title
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
									name={'title'} type={'text'} placeholder={'Node title'} defaultValue={this.state.node.data.name}>
								</input>
							</div>
							<div className="mb-6">
								<label className="block text-grey-darker text-sm font-bold mb-2">
									Content
								</label>
								<textarea
									className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
									name={'content'} placeholder={'Node content'} defaultValue={this.state.node.content}>
							</textarea>
							</div>
							<SketchPicker color={this.state.node.backgroundColor} onChange={this.handleColorChange}/>
							<div className="flex items-center justify-between">
								<button onClick={() => close()}>
									Close
								</button>
								<button
									className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="submit">
									Save
								</button>
							</div>
						</form>
					</div>
				)}
			</Popup>
		)
	}
}

export default EditButton;
