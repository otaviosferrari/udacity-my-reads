import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './App.css'
import ListBook from './components/ListBook'
import SearchBook from './components/SearchBook'

class BooksApp extends React.Component {
  	state = {
    	books: []
	}

	componentDidMount() {
		BooksAPI.getAll().then(books => this.setState({ books }));
	}
	
	changeShelf = (moveBook, shelf) => {
		BooksAPI.update(moveBook, shelf).then(response => {
			moveBook.shelf = shelf;
      		this.setState(prevState => ({
        		books: prevState.books.filter(book => book.id !== moveBook.id).concat(moveBook)
      		}));
    	});
  	};

	render() {
		const { books } = this.state
    	return (
      		<div className="app">
				<BrowserRouter>
					<Switch>
						<Route path="/search" render={({ history }) => ( <SearchBook books={books} changeShelf={this.changeShelf} /> )}/>
                  		<Route exact path="/" render={() => (
                      		<div className="list-books">
                        		<div className="list-books-title">
                          			<h1>MyReads</h1>
                        		</div>
                        		<ListBook books={books} changeShelf={this.changeShelf} />
                        		<div className="open-search">
                          			<Link to="/search">Search</Link>
                        		</div>
                      		</div>
                    	)}/>
					</Switch>
				</BrowserRouter>
      		</div>
    	)
  	}
}

export default BooksApp
