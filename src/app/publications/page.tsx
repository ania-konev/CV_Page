import { Card } from "antd";

const CoursePage: React.FC = () => {
  return (
    <Card bordered={false} className="subpage-card">
      <h1>Publications</h1>
      <ol>
        <li>
          <b>Konefał A.</b>, Piątek P., Maksymiuk K., Michalska A.,{" "}
          <a
            href="https://doi.org/10.1016/j.snb.2024.135294"
            className="nav-links"
          >
            Effect of spontaneous degradation of ion-selective optodes receptor
            materials on sensors performance. Where is the catch?”
          </a>
          , Sensors and Actuators B: Chemical 2024, 405, 135294
        </li>
        <li>
          <b>Konefał A.</b>, Piątek P., Maksymiuk K., Michalska A., Maksymiuk
          K., Michalaska,{" "}
          <a
            href="https://doi.org/10.1016/j.snb.2023.134022"
            className="nav-links"
          >
            Looking into the ion-selective nanoptode bulk – Alternative
            mechanism of optical signal transduction for ratiometric
            ion-selective probes applicable in broad pH range”
          </a>
          , Sensors and Actuators B: Chemical 2023, 391, 134022
        </li>
        <li>
          <b>Konefał A.</b>, Piątek P., Paterczyk B., Maksymiuk K., Michalska
          A.,{" "}
          <a
            href="https://doi.org/10.1016/j.talanta.2022.124038"
            className="nav-links"
          >
            {" "}
            Ionophore based optical sensors using hydrophilic polymer matrix –
            Ratiometric, pH independent ion-selective optodes”
          </a>
          , Talanta 2023, 253, 124038
        </li>
        <li>
          <b>Konefał A.</b>, Maksymiuk K., Michalaska,{" "}
          <a
            href="https://doi.org/10.1002/elan.201900677"
            className="nav-links"
          >
            pH Switchable Electrochemical and Optical Properties of
            Polyoctylthiophene -Pyrene Composites
          </a>
          , Electroanalysis 2020, 32: 842-850.
        </li>
      </ol>
    </Card>
  );
};

export default CoursePage;
