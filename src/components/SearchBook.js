import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AllBooks from './AllBooks';
import * as BooksAPI from '../utils/BooksAPI';

class SearchBook extends Component {
	state = {
    	query: '',
    	newBooks: [],
    	searchErr: false
  	};

	getBooks = event => {
    	const query = event.target.value;
    	this.setState({ query });

		if (query) {
      		BooksAPI.search(query.trim(), 20).then(books => {
        		books.length > 0 ? this.setState({ newBooks: books, searchErr: false }) : this.setState({ newBooks: [], searchErr: true });
      		});
		} else this.setState({ newBooks: [], searchErr: false });
  	};

	render() {
    	const { query, newBooks, searchErr } = this.state;
    	const { books, changeShelf } = this.props;
    
		return (
    		<div className="search-books">
        		<div className="search-books-bar">
          			<Link className="close-search" to="/">
            			Close
          			</Link>
					<div className="search-books-input-wrapper">
          				<input type="text" placeholder="Search by title or author" value={query} onChange={this.getBooks} />
					</div>
				</div>
				<div className="search-books-results">
					{newBooks.length > 0 && (
						<div>
							<h3>Search returned {newBooks.length} books </h3>
							<ol className="books-grid">
								{newBooks.map(book => (
									<AllBooks book={book} books={books} key={book.id} changeShelf={changeShelf} />
                				))}
              				</ol>
            			</div>
          			)}
					{searchErr && (
            			<h3>Search did not return any books. Please try again!</h3>
          			)}
				</div>
			</div>
		);
	}
	static propTypes = {
    	books: PropTypes.array.isRequired,
    	changeShelf: PropTypes.func.isRequired
  	};
}

export default SearchBook;