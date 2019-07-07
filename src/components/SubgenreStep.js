import React, { Component } from "react";

import Button from '@material-ui/core/Button';

import BookData from '../data/data.json';

const Child = ({ id, name, isClicked }) => (
    <>
        <Button
            key={id}
            variant="outlined"
            size="large"
            color="primary"
            className={isClicked ? `highlight` : ``}
        >
            {`${name}`}
        </Button>
    </>

);

class SubgenreStep extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // books: {},
            clicked: {}
        }
    }

    // componentDidMount() {
    //     // const id = this.props.match.params.userId
    //     fetch('../data/data.json')
    //         .then((books) => {
    //             console.log(books)
    //             this.setState({
    //                 books
    //             })
    //         })
    // }

    // const FetchAuthor = (authorId) => (
    //     fetch('../data/data.json')
    //         .then(author => {
    //             return new Author(author.id, author.name, author.username, author.email, author.phone, author.address.street, author.address.city, author.address.zipcode, author.company.name, author.company.bs, author.address.geo.lat, author.address.geo.lng)
    //         })

    // )


    handleClick = i => {
        this.setState(prevState => {

            const clicked = { ...prevState.clicked };
            // console.log(`prevState.clicked, clicked`, prevState.clicked, clicked);
            clicked[i] = !clicked[i];
            return { clicked };
        });
    };

    render() {
        const book = BookData.genres;
        // const subBook = JSON.parse(book);
        // const aaaa = book.forEach(function(res) {
        //     var id = res.id;
        //     var name = res.name;
        // // console.log(id);
        // // console.log(name);
        // // console.log(res)
        // })
        const { key } = this.props

        // const subBook = book.forEach(bookObj => {
        //     bookObj.subgenres.forEach(valuesObj => {
        //       return console.log(valuesObj)
        //     });
        //   });

        // const subBook = book.map(function(e) {
        //     return e.subgenres;
        //   });

        const items = book.forEach((bookObj) => {
            bookObj.subgenres.map((book, i) => {
                // console.log(book.name, book.id)
                return (
                    <>
                        <span key={book.id} onClick={() => this.handleClick(i)}>
                            <Child
                                id={book.id}
                                name={book.name}
                                isClicked={this.state.clicked[i]} />
                        </span>
                    </>
                );
            })
        });

        // const items = book.map((book, i) => {
        //     // console.log(book, i)
        //     return (
        //         <>
        //             <span key={book.subgenres.id} onClick={() => this.handleClick(i)}>
        //                 <Child  
        //                 id={book.subgenres.id} 
        //                 name={book.subgenres.name} 
        //                 isClicked={this.state.clicked[i]} />
        //             </span>
        //         </>
        //     );
        // });

        return (
            <React.Fragment>
                <div>
                    <div>{items}</div>
                </div>
            </React.Fragment>

        );
    }
}

export default SubgenreStep
