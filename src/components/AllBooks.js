import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChangeShelf from './ChangeShelf'

class AllBooks extends Component {
	checkImg(book) {
		if (book.imageLinks && book.imageLinks.thumbnail) {
			return `url(${book.imageLinks.thumbnail})`;
		} else {
			return `url(http://via.placeholder.com/128x193?text=No%20Cover)`;
		}
	}


	render() {
		const { book, books, changeShelf } = this.props;
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `${this.checkImg(book)}` }} />
						<ChangeShelf book={book} books={books} changeShelf={changeShelf} />
					</div>
					<div className="book-title">
						{book.title}
					</div>
					<div className="book-authors">
						{book.authors && book.authors.map((author, key) => {
							if (key > 0) {
								return ` & ${author}`
							} else {
								return author
							}
						})}
					</div>
				</div>
			</li>
		);
	}

	static propTypes = {
		book: PropTypes.object.isRequired,
		books: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired
	};
}

export default AllBooks;