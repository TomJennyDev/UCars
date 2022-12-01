import Appbar from "./Appbar";
import Button from "./Button";
import Card from "./Card";
import Checkbox from "./Checkbox";
import Typography from "./Typography";

function customizeComponents(theme) {
  return {
    ...Appbar(theme),
    ...Card(theme),
    ...Typography(theme),
    ...Button(theme),
    ...Checkbox(theme),
  };
}

export default customizeComponents;
