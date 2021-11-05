function range(param1, param2) {
  if (param1 === param2) {
    return [param1];
  } else if (param1 > param2) {
    return [param1, ...range(param1 - 1, param2)];
  } else {
    return [
      param2 === undefined ? 0 : param1,
      ...range(
        param2 === undefined ? 1 : param1 + 1,
        param2 === undefined ? param1 : param2
      ),
    ];
  }
}

console.log(range(1,23));
