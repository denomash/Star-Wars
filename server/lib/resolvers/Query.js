"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _constants = require("../constants");

var Query = {
  getAllPeople: function () {
    var _getAllPeople = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
      var page, response, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _ref.page;
              _context.next = 3;
              return _axios["default"].get("".concat(_constants.BASE_URL, "/people/?page=").concat(page));

            case 3:
              response = _context.sent.data;
              data = {
                count: response.count,
                next: response.next,
                previous: response.previous,
                people: response.results
              };
              return _context.abrupt("return", data);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getAllPeople(_x, _x2) {
      return _getAllPeople.apply(this, arguments);
    }

    return getAllPeople;
  }(),
  getPerson: function () {
    var _getPerson = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, _ref2) {
      var name, person;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              name = _ref2.name;
              _context2.next = 3;
              return _axios["default"].get("".concat(_constants.BASE_URL, "/people/?search=").concat(name));

            case 3:
              person = _context2.sent.data.results;
              return _context2.abrupt("return", person);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function getPerson(_x3, _x4) {
      return _getPerson.apply(this, arguments);
    }

    return getPerson;
  }()
};
var _default = Query;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvbHZlcnMvUXVlcnkudHMiXSwibmFtZXMiOlsiUXVlcnkiLCJnZXRBbGxQZW9wbGUiLCJfIiwicGFnZSIsImF4aW9zIiwiZ2V0IiwiQkFTRV9VUkwiLCJyZXNwb25zZSIsImRhdGEiLCJjb3VudCIsIm5leHQiLCJwcmV2aW91cyIsInBlb3BsZSIsInJlc3VsdHMiLCJnZXRQZXJzb24iLCJuYW1lIiwicGVyc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHO0FBQ1pDLEVBQUFBLFlBQVk7QUFBQSxzR0FBRSxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUJDLGNBQUFBLElBQWpCLFFBQWlCQSxJQUFqQjtBQUFBO0FBQUEscUJBQ1lDLGtCQUFNQyxHQUFOLFdBQWFDLG1CQUFiLDJCQUFzQ0gsSUFBdEMsRUFEWjs7QUFBQTtBQUNOSSxjQUFBQSxRQURNLGlCQUMyREMsSUFEM0Q7QUFHTkEsY0FBQUEsSUFITSxHQUdDO0FBQ1hDLGdCQUFBQSxLQUFLLEVBQUVGLFFBQVEsQ0FBQ0UsS0FETDtBQUVYQyxnQkFBQUEsSUFBSSxFQUFFSCxRQUFRLENBQUNHLElBRko7QUFHWEMsZ0JBQUFBLFFBQVEsRUFBRUosUUFBUSxDQUFDSSxRQUhSO0FBSVhDLGdCQUFBQSxNQUFNLEVBQUVMLFFBQVEsQ0FBQ007QUFKTixlQUhEO0FBQUEsK0NBVUxMLElBVks7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxLQURBO0FBY1pNLEVBQUFBLFNBQVM7QUFBQSxtR0FBRSxrQkFBT1osQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUJhLGNBQUFBLElBQWpCLFNBQWlCQSxJQUFqQjtBQUFBO0FBQUEscUJBQ2FYLGtCQUFNQyxHQUFOLFdBQWFDLG1CQUFiLDZCQUF3Q1MsSUFBeEMsRUFEYjs7QUFBQTtBQUNIQyxjQUFBQSxNQURHLGtCQUM4RFIsSUFEOUQsQ0FFTkssT0FGTTtBQUFBLGdEQUlGRyxNQUpFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFkRyxDQUFkO2VBc0JlaEIsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IFF1ZXJ5ID0ge1xuICBnZXRBbGxQZW9wbGU6IGFzeW5jIChfOiBhbnksIHsgcGFnZSB9OiBhbnkpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IChhd2FpdCBheGlvcy5nZXQoYCR7QkFTRV9VUkx9L3Blb3BsZS8/cGFnZT0ke3BhZ2V9YCkpLmRhdGE7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY291bnQ6IHJlc3BvbnNlLmNvdW50LFxuICAgICAgbmV4dDogcmVzcG9uc2UubmV4dCxcbiAgICAgIHByZXZpb3VzOiByZXNwb25zZS5wcmV2aW91cyxcbiAgICAgIHBlb3BsZTogcmVzcG9uc2UucmVzdWx0cyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG5cbiAgZ2V0UGVyc29uOiBhc3luYyAoXzogYW55LCB7IG5hbWUgfTogYW55KSA9PiB7XG4gICAgY29uc3QgcGVyc29uID0gKGF3YWl0IGF4aW9zLmdldChgJHtCQVNFX1VSTH0vcGVvcGxlLz9zZWFyY2g9JHtuYW1lfWApKS5kYXRhXG4gICAgICAucmVzdWx0cztcblxuICAgIHJldHVybiBwZXJzb247XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVyeTtcbiJdfQ==