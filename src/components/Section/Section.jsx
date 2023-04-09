import PropTypes from 'prop-types';
import { SectionContainer, Title } from './Section.styled';

const Section = ({ title, type, children }) => {
  return (
    <SectionContainer className={type || ''}>
      {title && <Title>{title}</Title>}
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
