import { useNavigate } from 'react-router-dom';
import FormModule from '../module/FormModule';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <FormModule />
    </>
  );
};

export default Home;
