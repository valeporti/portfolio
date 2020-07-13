import React, { Component } from 'react';
//import { Document, Page } from 'react-pdf/dist/entry.webpack';

//import ship from '../../../../images/pdfs/ship_detection.pdf'
 
export default function PDFS(props) {
  const [pageNumber, setPageNumber] = useState(1);
 
  /* onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  } */
 
  function onItemClick({ pageNumber: itemPageNumber }) {
    setPageNumber(itemPageNumber);
  }

  //const { pageNumber, numPages } = this.state;
  console.log(props)

  return (
    <Document file={ship}>
      <Outline onItemClick={onItemClick} />
      <Page pageNumber={pageNumber || 1} />
    </Document>
  );

}