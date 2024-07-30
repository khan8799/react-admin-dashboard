import Breadcrumb from "../shared/components/Breadcrumb/Breadcrumb";
import Card from "../components/Card";
import CouponList from "./CouponList";
import CouponAdd from "./CouponAdd";

export default function Coupon() {
  return (
    <>
      <Breadcrumb name="Brand" />

      <div className="row">
        <div className="col-md-7 grid-margin stretch-card">
          <Card title="Brand">
            <CouponList></CouponList>
          </Card>
        </div>
        <div className="col-md-5 grid-margin stretch-card">
          <Card title="Add Brand">
            <CouponAdd></CouponAdd>
          </Card>
        </div>
      </div>
    </>
  );
}
