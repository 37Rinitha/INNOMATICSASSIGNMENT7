import { Routes, Route, Link } from 'react-router-dom';
import Design from './Design';
import Development from './Development';

const Services = () => {
  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        <li><Link to="/services/design">Design</Link></li>
        <li><Link to="/services/development">Development</Link></li>
      </ul>
      
      {/* Nested Routes for Design and Development */}
      <Routes>
        <Route path="design" element={<Design />} />
        <Route path="development" element={<Development />} />
      </Routes>
    </div>
  );
};

export default Services;
