import { Container } from '@material-ui/core';
import HeaderCards from './headerCards';
import LineChart from './lineChart';

const Dashboard = () => {
  return (
    <Container>
      <HeaderCards />
      <LineChart />
    </Container>
  );
};

export default Dashboard;
