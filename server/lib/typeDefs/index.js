"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

var typeDefs = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  type Query {\n    getAllPeople(page: Int!): AllPeople\n    getPerson(name: String!): [Person]\n  }\n\n  type Person {\n    name: String\n    height: String\n    mass: String\n    gender: String\n    homeworld: String\n  }\n\n  type AllPeople {\n    count: Int\n    next: String\n    previous: String\n    people: [Person]\n  }\n"])));
var _default = typeDefs;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlRGVmcy9pbmRleC50cyJdLCJuYW1lcyI6WyJ0eXBlRGVmcyIsImdxbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQU1BLFFBQVEsT0FBR0Msd0JBQUgsbWFBQWQ7ZUFzQmVELFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCI7XG5cbmNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICB0eXBlIFF1ZXJ5IHtcbiAgICBnZXRBbGxQZW9wbGUocGFnZTogSW50ISk6IEFsbFBlb3BsZVxuICAgIGdldFBlcnNvbihuYW1lOiBTdHJpbmchKTogW1BlcnNvbl1cbiAgfVxuXG4gIHR5cGUgUGVyc29uIHtcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBoZWlnaHQ6IFN0cmluZ1xuICAgIG1hc3M6IFN0cmluZ1xuICAgIGdlbmRlcjogU3RyaW5nXG4gICAgaG9tZXdvcmxkOiBTdHJpbmdcbiAgfVxuXG4gIHR5cGUgQWxsUGVvcGxlIHtcbiAgICBjb3VudDogSW50XG4gICAgbmV4dDogU3RyaW5nXG4gICAgcHJldmlvdXM6IFN0cmluZ1xuICAgIHBlb3BsZTogW1BlcnNvbl1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZURlZnM7XG4iXX0=