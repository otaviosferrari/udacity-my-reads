import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfBook from './ShelfBook'

class ListBook extends Component {
	render() {
		const { books, changeShelf } = this.props
		const shelves = [
			{ type: 'currentlyReading', name: 'Currently Reading' },
			{ type: 'wantToRead', name: 'Want to Read' },
			{ type: 'read', name: 'Read' }
		];
		return (
			<div className="list-books-content">
				{shelves.map((shelf, index) => {
					const booksByShelf = books.filter(book => book.shelf === shelf.type);
					return (
						<div className="bookshelf" key={index}>
							<h2 className="bookshelf-title">{shelf.name}</h2>
							<div className="bookshelf-books">
								<ShelfBook books={booksByShelf} changeShelf={changeShelf} />
							</div>
						</div>
					)
				})}
			</div>
		)
	}

	static propTypes = {
		books: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired,
	};
}

export default ListBook