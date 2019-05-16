import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AllBooks from './AllBooks'

class ShelfBook extends Component {
	render(){
		const { books, changeShelf } = this.props
    	return (
        	<ol className="books-grid">
        		{books.map((book, index) => (
          			<AllBooks key={index} books={books} book={book} changeShelf={changeShelf}/>
          		))}
			</ol>
		)
	}

	static propTypes = {
    	books: PropTypes.array.isRequired,
    	changeShelf: PropTypes.func.isRequired
	};
}

export default ShelfBook