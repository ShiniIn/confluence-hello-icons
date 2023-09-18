import ForgeUI, { render, Fragment, Macro, Text } from "@forge/ui";
import IconPanel from "./Icons";

const App = () => {
  return (
    <IconPanel />
  );
};

export const run = render(
  <Macro
    app={<App />}
  />
);
