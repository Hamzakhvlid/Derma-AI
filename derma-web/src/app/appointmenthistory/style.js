import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export   const StyledPagination = styled(ReactPaginate)`
  /* Base styles for the entire pagination container */
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  /* Individual page item styles */
  li {
    margin: 0 5px;
  }

  a {
    display: block;
    padding: 5px 10px;
    border: 1px solid #ddd;
    text-decoration: none;
    color: #333;
    cursor: pointer;
  }

  /* Styles for active page item */
  a.active {
    background-color: #eee;
  }

  /* Styles for disabled buttons (previous/next when at beginning/end) */
  a.disabled {
    cursor: default;
    opacity: 0.5;
  }

  /* Styles for "..." break label */
  li.breakLabel {
    color: #999;
  }

  /* You can further customize styles here (e.g., font sizes, colors) */
`;
