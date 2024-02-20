import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../assets/style/Paginate.css'

const Paginate = ({ pages, page, isAdmin = false }) => {
  return (
    // If there is more than one page, display the pagination
    pages > 1 && (
      <Pagination>
        {/* Map through the pages */}
        {[...Array(pages).keys()].map((x) => (
          // Each page has a LinkContainer
          <LinkContainer
            key={x + 1}
            to={
              // If not admin, go to the catalog page, else go to the admin house list
              !isAdmin
                ? `/catalog/page/${x + 1}`
                : `/admin/houseList/${x + 1}`
            }
          >
            {/* x + 1 is the active item */}
            <Pagination.Item active={x + 1 === page}
            >{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
}

export default Paginate;