import { Suspense } from 'react';
import PreLoader from "../Components/PreLoader";
import PropTypes from 'prop-types';

const RouteWithPreLoader = ({ element: Element }) => {

    RouteWithPreLoader.propTypes = {
        element: PropTypes.element.isRequired,
    };
  return (
    <Suspense fallback={<PreLoader />}>
        <Element/>
    </Suspense>
  );
};

export default RouteWithPreLoader;
