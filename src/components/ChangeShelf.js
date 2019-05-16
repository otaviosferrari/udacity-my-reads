import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChangeShelf extends Component {
	state = {
    	shelf: this.props.book.shelf || 'none'
  	}

	handleChangeShelf = (id, shelf) => {
    	this.setState({ shelf })
    	this.props.changeShelf(id, shelf)
  	}

	mapShelf(findBook) {
    	const defaultShelf = "none";
    	if (findBook.shelf) {
      		return findBook.shelf;
    	} else {
      		const match = this.props.books.filter(book => book.id === findBook.id);
      		if (!Array.isArray(match) || !match.length) {
        		return defaultShelf;        
      		} else {
        		return match[0].shelf;
      		}
   		}
	}

	render() {
    	const { book } = this.props;
    	return (
			<div className="book-shelf-changer">
				<select
          			defaultValue={this.mapShelf(book)}
					
					onChange={e => {
          				this.handleChangeShelf(book, e.target.value)
					}}
				>
                	<option value="none" disabled>
                		Move to...
					</option>
                	<option value="currentlyReading">Currently Reading</option>
                	<option value="wantToRead">Want to Read</option>
                	<option value="read">Read</option>
	                <option value="none">None</option>
				</select>
			</div>
    	);
  	}

	static propTypes = {
    	book: PropTypes.object.isRequired,
    	books: PropTypes.array.isRequired,
    	changeShelf: PropTypes.func.isRequired
	};
}
export default ChangeShelf;