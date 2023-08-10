import MyChart from "./analysis/Chart"
import MiniDrawer from '../../Dashboard/Drawer';
import BasicTable from "./analysis/Table";
const Analysis = () => {
  return (
    <div>
        <MiniDrawer />
        <center>
          <h1>
          annual profits
          </h1>
          <MyChart />
          <h1>
          history record
          </h1>
          <BasicTable />
        </center>
    </div>

  )
}

export default Analysis