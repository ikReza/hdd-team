export const find_stop_invert = (start_invert, c_slope, c_length) => {
  return start_invert - (c_slope / 1000) * c_length;
};

export const find_start_invert = (stop_invert, c_slope, c_length) => {
  return stop_invert + (c_slope / 1000) * c_length;
};

export const find_slope = (start_invert, stop_invert, c_length) => {
  return ((start_invert - stop_invert) / c_length) * 1000;
};
