const updateObject = (oldObject, newProps) => {
  return {
    ...oldObject,
    ...newProps,
  };
};

export default updateObject;
