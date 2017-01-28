import React from 'react';
import PDF from 'react-pdf-js';
 
class MyPdfViewer extends React.Component {
  constructor(props) {
    super(props);
    this.onDocumentComplete = this.onDocumentComplete.bind(this);
    this.onPageCompleted = this.onPageCompleted.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
 
  onDocumentComplete(pages) {
    this.setState({ page: 1, pages });
  }
 
  onPageCompleted(page) {
    this.setState({ page });
  }
 
  handlePrevious() {
    this.setState({ page: this.state.page - 1 });
  }
 
  handleNext() {
    this.setState({ page: this.state.page + 1 });
  }
 
  renderPagination(page, pages) {
    let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    if (page === 1) {
      previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    }
    let nextButton = <li className="next" onClick={this.handleNext}><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    if (page === pages) {
      nextButton = <li className="next disabled"><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
      );
  }
 
  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div>
        <PDF file="images/Steel_Day_Flyer_for_website.pdf" onDocumentComplete={this.onDocumentComplete} onPageCompleted={this.onPageCompleted} page={this.state.page} />
        {pagination}
      </div>
  }
}
 
module.exports = MyPdfViewer;