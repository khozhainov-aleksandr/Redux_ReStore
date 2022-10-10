import React from "react";
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const widthBookstoreService = () => (Wrapper) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          return (<Wrapper {...props} bookstoreService={bookstoreService} />);
        }}
      </BookstoreServiceConsumer>
    );
  }
}

export default widthBookstoreService;