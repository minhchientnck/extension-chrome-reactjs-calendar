function XDate(a, b, c, d, e, f, g) {
  var x;
  switch (arguments.length) {
    case 0:
      x = new Date();
      break;
    case 1:
      x = new Date(a);
      break;
    case 2:
      x = new Date(a, b);
      break;
    case 3:
      x = new Date(a, b, c);
      break;
    case 4:
      x = new Date(a, b, c, d);
      break;
    case 5:
      x = new Date(a, b, c, d, e);
      break;
    case 6:
      x = new Date(a, b, c, d, e, f);
      break;
    default:
      x = new Date(a, b, c, d, e, f, g);
  }
  x.__proto__ = XDate.prototype;

  return x;
}

XDate.prototype.__proto__ = Date.prototype;

XDate.prototype.__proto__.getXDay = function () {
  const d = new Date(this);
  var xday = d.getDay();
  switch (xday) {
    case 0:
      return 6;
    case 1:
      return 0;
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 3;
    case 5:
      return 4;
    case 6:
      return 5;
  }
}

export default XDate;
