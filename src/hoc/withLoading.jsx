import { PacmanLoader } from "react-spinners";

export const withLoading = (Component) => {
  function ComponentWithLoading(props) {
    if (props.items.length < 1) {
      return <PacmanLoader />;
    }

    return <Component {...props} />;
  }

  return ComponentWithLoading;
};
