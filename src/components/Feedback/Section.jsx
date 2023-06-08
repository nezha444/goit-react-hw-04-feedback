import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <h6>{title}</h6>
      {children}
    </>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
