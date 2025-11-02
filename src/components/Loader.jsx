import { ClimbingBoxLoader } from "react-spinners";

function Loader({ items, render }) {
  if (items.length < 1) {
    return <ClimbingBoxLoader />;
  }

  return render();
}

export default Loader;
