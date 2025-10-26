useEffect(() => {
  if (fetchStatus.fetchDone) return;

  const controller = new AbortController();
  const signal = controller.signal;

  dispatch(fetchStatusActions.markFetchingStarted());
  fetch(`${process.env.REACT_APP_API_URL}/items`, { signal })
    .then((res) => res.json())
    .then(({ items }) => {
      dispatch(fetchStatusActions.markFetchDone());
      dispatch(fetchStatusActions.markFetchingFinished());
      dispatch(itemsActions.addInitialItems(items));
    });

  return () => {
    controller.abort();
  };
}, [fetchStatus]);
