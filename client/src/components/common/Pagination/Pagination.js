import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';



class Pagination extends React.Component {

  state = {
    presentPage: this.props.initialPage || 1
  }

  changePage = (newPage) => {
    const { onPageChange } = this.props;

    this.setState({ presentPage: newPage });
    onPageChange(newPage);
  };

  changePageUp = () => {
    const { presentPage } = this.state;
    const { changePage } = this;
    changePage(presentPage + 1);
  };

  changePageDown = () => {
    const { presentPage } = this.state;
    const { changePage } = this;
    changePage(presentPage - 1);
  };

  render() {

    const { pages } = this.props;
    const { presentPage } = this.state;
    const { changePage, changePageUp, changePageDown } = this;

    // [...Array(pages)] - create an array with no specified data but with number of elements equals to number of pages
    // onClick={() => {changePage(page) }} - execute changePage function

    return (
      <div className="pagination">
        <ul className="pagination__list">

          {presentPage > 1 && (
            <li className="pagination__list__item" onClick={changePageDown}>
              {'<'}
            </li>
          )}

          {[...Array(pages)].map((el, page) =>{
            return (
              <li
                key={++page}
                onClick={() => {changePage(page) }}
                className={`pagination__list__item${((page) === presentPage) ? ' pagination__list__item--active' : ''}`}>
                {page}
              </li>
            );
          })}

          {presentPage < pages && (
            <li className="pagination__list__item" onClick={changePageUp}>
              {'>'}
            </li>
          )}

        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  initialPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;