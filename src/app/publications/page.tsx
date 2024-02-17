import { Col, Row, Card } from "antd";

const CoursePage: React.FC = () => {
  return (
    <Row className="layout" gutter={[0, 0]}>
      <Col span={24}>
        <Card bordered={false} className="route-card">
          <h1>Publications</h1>
          <p className="text-page-route publ-text">
            1.{" "}
            <a
              href="https://doi.org/10.1016/j.snb.2024.135294"
              className="nav-links"
            >
              <b>Konefał A.</b>
            </a>
            , Piątek P., Maksymiuk K., Michalska A., Effect of spontaneous
            degradation of ion-selective optodes receptor materials on sensors
            performance. Where is the catch?”, Sensors and Actuators B: Chemical
            2024, 405, 135294
          </p>
          <p className="text-page-route publ-text">
            2.{" "}
            <a
              href="https://doi.org/10.1016/j.snb.2023.134022"
              className="nav-links"
            >
              <b>Konefał A.</b>
            </a>
            , Piątek P., Maksymiuk K., Michalska A., Maksymiuk K., Michalaska,
            Looking into the ion-selective nanoptode bulk – Alternative
            mechanism of optical signal transduction for ratiometric
            ion-selective probes applicable in broad pH range”, Sensors and
            Actuators B: Chemical 2023, 391, 134022
          </p>
          <p className="text-page-route publ-text">
            3.{" "}
            <a
              href="https://doi.org/10.1016/j.talanta.2022.124038"
              className="nav-links"
            >
              <b>Konefał A.</b>
            </a>
            , Piątek P., Paterczyk B., Maksymiuk K., Michalska A., Ionophore
            based optical sensors using hydrophilic polymer matrix –
            Ratiometric, pH independent ion-selective optodes”, Talanta 2023,
            253, 124038
          </p>
          <p className="text-page-route publ-text">
            4. Stelmach E., Kałuża D.,{" "}
            <a
              href="https://doi.org/10.1002/elan.201900677"
              className="nav-links"
            >
              <b>Konefał A.</b>
            </a>
            , Maksymiuk K., Michalaska, pH Switchable Electrochemical and
            Optical Properties of Polyoctylthiophene -Pyrene Composites,
            Electroanalysis 2020, 32: 842-850.
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default CoursePage;
