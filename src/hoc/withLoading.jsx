export const withLoading = (Component) => {
  function ComponentWithLoading(props) {
    console.log("loading...");

    return <Component {...props} />;
  }

  return ComponentWithLoading;
};
