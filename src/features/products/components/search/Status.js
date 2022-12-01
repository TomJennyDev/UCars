import FRadioGroup from "form/FRadioGroup";
import { STATUS } from "./SearchOption";

function Status() {
  return (
    <>
      <FRadioGroup
        name="status"
        row={false}
        options={Object.keys(STATUS)}
        getOptionLabel={STATUS}
      />
    </>
  );
}

export default Status;
