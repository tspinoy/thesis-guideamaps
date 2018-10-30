import React from 'react'
import Popup from "reactjs-popup"

class EditButton extends React.Component {
	constructor(props) {
		super(props);
		const {node, leaf, update} = this.props;
		this.state = { node, leaf };

		// This binding is necessary to make `this` work in the callback
		this.handleOpenCloseEditPopup = this.handleOpenCloseEditPopup.bind(this);
	}

	/**
	 * When the popup is opened, we want to make sure the popup is on top of all other elements.
	 * We call the update function to temporarily update the 'editing'-field of the node.
	 * This field is checked to know which z-index to apply.
	 * Check out {@link Cluster.render#updateNodeEdit}
	 */
	handleOpenCloseEditPopup() {
		this.props.update(this.state.node.id);
	};

	render() {
		const editButton =
			<button className={
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
		return (
			<Popup
				trigger={editButton}
				contentStyle={{width: '500px'}}
				onOpen={this.handleOpenCloseEditPopup}
				onClose={this.handleOpenCloseEditPopup}
				closeOnDocumentClick={true}
			>
				{close => (
					<div className="w-full">
						<form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
							<div className="mb-4">
								<label className="block text-grey-darker text-sm font-bold mb-2">
									Node title
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
									type={'text'} placeholder={'Node title'} defaultValue={this.state.node.data.name}>
								</input>
							</div>
							<div className="mb-6">
								<label className="block text-grey-darker text-sm font-bold mb-2">
									Content
								</label>
								<textarea
									className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
									placeholder={'Node content'} defaultValue={this.state.node.content}>
							</textarea>
							</div>
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
