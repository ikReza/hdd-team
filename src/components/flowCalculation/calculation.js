export const find_stop_invert = (start_invert, c_slope, c_length) => {
  return start_invert - (c_slope / 1000) * c_length;
};
