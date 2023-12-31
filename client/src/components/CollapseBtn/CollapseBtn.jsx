import { Button, Card, CardBody, Collapse } from "@material-tailwind/react";
import clsx from "clsx";
import React from "react";

import PropTypes from "prop-types";

// CollapseBtn.propTypes = {
//   label: PropTypes.string,
//   btnClass: PropTypes.string,
//   cardClass: PropTypes.string,
//   collapseClass: PropTypes.string,
// };

export default function CollapseBtn(props) {
  const { label, btnClass, cardClass, collapseClass, children = <></> } = props;
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="relative">
      <Button onClick={toggleOpen} className={clsx("rounded-none", btnClass)}>
        {label}
      </Button>
      <Collapse open={open} className={clsx(collapseClass)}>
        <Card className={clsx("rounded-none shadow-none", cardClass)}>
          <CardBody className="p-2">{children}</CardBody>
        </Card>
      </Collapse>
    </div>
  );
}
