webpackJsonp([1],{

/***/ 101:
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AlbumFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Album"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"release_date"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"is_deleted"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"created_at"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"created_by"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"updated_at"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"updated_by"},"arguments":[],"directives":[],"selectionSet":null}]}}],"loc":{"start":0,"end":126}};
    doc.loc.source = {"body":"fragment AlbumFields on Album {\n  id\n  name\n  release_date\n  is_deleted\n  created_at\n  created_by\n  updated_at\n  updated_by\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  
module.exports = doc;

/***/ }),

/***/ 1056:
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AccountCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"created_at"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"created_by"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ref_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ref_type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"AccountCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}},{"kind":"Argument","name":{"kind":"Name","value":"created_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"created_at"}}},{"kind":"Argument","name":{"kind":"Name","value":"created_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"created_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"ref_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ref_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"ref_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ref_type"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"},"directives":[]}]}}]}}],"loc":{"start":0,"end":333}};
    doc.loc.source = {"body":"#import \"./fragmentAccountFields.graphql\"\nmutation AccountCreate($name: String!, $uuid: String!, $created_at: Date, $created_by: String, $ref_id: Int!, $ref_type: String!) {\n  AccountCreate(name: $name, uuid: $uuid, created_at: $created_at, created_by: $created_by, ref_id: $ref_id, ref_type: $ref_type) {\n    ...AccountFields\n  }\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(46).definitions));

module.exports = doc;

/***/ }),

/***/ 1057:
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AccountDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"AccountDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"},"directives":[]}]}}]}}],"loc":{"start":0,"end":130}};
    doc.loc.source = {"body":"#import \"./fragmentAccountFields.graphql\"\nmutation AccountDelete($id:ID!) {\n  AccountDelete(id: $id) {\n    ...AccountFields\n  }\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(46).definitions));

module.exports = doc;

/***/ }),

/***/ 1058:
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AccountUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updated_at"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updated_by"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ref_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ref_type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"AccountUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}},{"kind":"Argument","name":{"kind":"Name","value":"updated_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updated_at"}}},{"kind":"Argument","name":{"kind":"Name","value":"updated_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updated_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"ref_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ref_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"ref_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ref_type"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"},"directives":[]}]}}]}}],"loc":{"start":0,"end":347}};
    doc.loc.source = {"body":"#import \"./fragmentAccountFields.graphql\"\nmutation AccountUpdate($id:ID!, $name: String, $uuid: String, $updated_at: Date, $updated_by: String, $ref_id: Int, $ref_type: String) {\n  AccountUpdate(id: $id, name: $name, uuid: $uuid, updated_at: $updated_at, updated_by: $updated_by, ref_id: $ref_id, ref_type: $ref_type) {\n    ...AccountFields\n  }\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(46).definitions));

module.exports = doc;

/***/ }),

/***/ 1059:
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AlbumCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"release_date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"created_at"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"created_by"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"artist_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"is_deleted"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"AlbumCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"release_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"release_date"}}},{"kind":"Argument","name":{"kind":"Name","value":"created_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"created_at"}}},{"kind":"Argument","name":{"kind":"Name","value":"created_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"created_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"artist_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"artist_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_deleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"is_deleted"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AlbumFields"},"directives":[]},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"accounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"},"directives":[]}]}},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"tracks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TrackFields"},"directives":[]},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"accounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"},"directives":[]}]}}]}}]}}]}}],"loc":{"start":0,"end":574}};
    doc.loc.source = {"body":"#import \"./fragmentAlbumFields.graphql\"\n#import \"./fragmentAccountFields.graphql\"\n#import \"./fragmentTrackFields.graphql\"\nmutation AlbumCreate($name: String!, $release_date: Date, $created_at: Date, $created_by: String, $artist_id: Int!, $is_deleted: Int!) {\n  AlbumCreate(name: $name, release_date: $release_date, created_at: $created_at, created_by: $created_by, artist_id: $artist_id, is_deleted: $is_deleted) {\n    ...AlbumFields\n    accounts {\n      ...AccountFields\n    }\n    tracks {\n      ...TrackFields\n      accounts {\n        ...AccountFields\n      }\n    }\n  }\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(101).definitions));
doc.definitions = doc.definitions.concat(unique(__webpack_require__(46).definitions));
doc.definitions = doc.definitions.concat(unique(__webpack_require__(57).definitions));

module.exports = doc;

/***/ }),

/***/ 1060:
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AlbumDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"AlbumDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":70}};
    doc.loc.source = {"body":"mutation AlbumDelete($id:ID!) {\n  AlbumDelete(id: $id) {\n    id\n  }\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  
module.exports = doc;

/***/ }),

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AlbumUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"release_date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updated_at"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updated_by"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"artist_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"is_deleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"AlbumUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"release_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"release_date"}}},{"kind":"Argument","name":{"kind":"Name","value":"updated_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updated_at"}}},{"kind":"Argument","name":{"kind":"Name","value":"updated_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updated_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"artist_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"artist_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_deleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"is_deleted"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AlbumFields"},"directives":[]}]}}]}}],"loc":{"start":0,"end":375}};
    doc.loc.source = {"body":"#import \"./fragmentAlbumFields.graphql\"\nmutation AlbumUpdate($id:ID!, $name: String, $release_date: Date, $updated_at: Date, $updated_by: String,  $artist_id: Int,  $is_deleted: Int) {\n  AlbumUpdate(id: $id, name: $name, release_date: $release_date, updated_at: $updated_at, updated_by: $updated_by, artist_id: $artist_id, is_deleted: $is_deleted) {\n    ...AlbumFields\n  }\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(101).definitions));

module.exports = doc;

/***/ }),

/***/ 1062:
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ArtistById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"response"},"name":{"kind":"Name","value":"ArtistById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistFields"},"directives":[]},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"accounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"},"directives":[]}]}},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"albums"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AlbumFields"},"directives":[]},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"accounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"},"directives":[]}]}},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"tracks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TrackFields"},"directives":[]},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"accounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"},"directives":[]}]}}]}}]}}]}}]}}],"loc":{"start":0,"end":487}};
    doc.loc.source = {"body":"#import \"./fragmentArtistFields.graphql\"\n#import \"./fragmentAlbumFields.graphql\"\n#import \"./fragmentTrackFields.graphql\"\n#import \"./fragmentAccountFields.graphql\"\nquery ArtistById($id:ID!) {\n  response: ArtistById(id: $id) {\n    ...ArtistFields\n    accounts {\n      ...AccountFields\n    }\n    albums {\n      ...AlbumFields\n      accounts {\n        ...AccountFields\n      }\n      tracks {\n        ...TrackFields\n        accounts {\n          ...AccountFields\n        }\n      }\n    }\n  }\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(224).definitions));
doc.definitions = doc.definitions.concat(unique(__webpack_require__(101).definitions));
doc.definitions = doc.definitions.concat(unique(__webpack_require__(57).definitions));
doc.definitions = doc.definitions.concat(unique(__webpack_require__(46).definitions));

module.exports = doc;

/***/ }),

/***/ 1063:
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ArtistUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updated_at"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updated_by"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"is_deleted"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"ArtistUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"updated_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updated_at"}}},{"kind":"Argument","name":{"kind":"Name","value":"updated_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updated_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_deleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"is_deleted"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistFields"},"directives":[]}]}}]}}],"loc":{"start":0,"end":317}};
    doc.loc.source = {"body":"#import \"./fragmentArtistFields.graphql\"\nmutation ArtistUpdate($id:ID!, $name: String!, $type: String, $updated_at: Date, $updated_by: String, $is_deleted: Int!) {\n  ArtistUpdate(id: $id, name: $name, type: $type, updated_at: $updated_at, updated_by: $updated_by, is_deleted: $is_deleted) {\n    ...ArtistFields\n  }\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(224).definitions));

module.exports = doc;

/***/ }),

/***/ 1064:
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ArtistsPaged"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchQuery"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"columns"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"withRelated"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"response"},"name":{"kind":"Name","value":"ArtistsPaged"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"columns"}}},{"kind":"Argument","name":{"kind":"Name","value":"withRelated"},"value":{"kind":"Variable","name":{"kind":"Name","value":"withRelated"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"page"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"pageSize"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"rowCount"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"pageCount"},"arguments":[],"directives":[],"selectionSet":null}]}},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"artists"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}]}}],"loc":{"start":0,"end":474}};
    doc.loc.source = {"body":"query ArtistsPaged(\n  $query: SearchQuery,\n  $order: String,\n  $sort: String,\n  $page: Int,\n  $pageSize: Int,\n  $columns: [String],\n  $withRelated: [String]\n  ) { \n  response: ArtistsPaged(\n    query: $query,\n    order: $order,\n    sort: $sort,\n    page: $page,\n    pageSize: $pageSize,\n    columns: $columns,\n    withRelated: $withRelated\n    ) { \n    pageInfo {\n      page\n      pageSize\n      rowCount\n      pageCount\n    }\n    artists {\n      id\n      name\n    }\n  } \n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  
module.exports = doc;

/***/ }),

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TrackCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"track_num"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"created_at"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"created_by"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"is_deleted"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"TrackCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"track_num"},"value":{"kind":"Variable","name":{"kind":"Name","value":"track_num"}}},{"kind":"Argument","name":{"kind":"Name","value":"created_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"created_at"}}},{"kind":"Argument","name":{"kind":"Name","value":"created_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"created_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"album_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_deleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"is_deleted"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TrackFields"},"directives":[]},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"accounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"},"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":432}};
    doc.loc.source = {"body":"#import \"./fragmentTrackFields.graphql\"\n#import \"./fragmentAccountFields.graphql\"\nmutation TrackCreate($name: String!, $track_num: Int!, $created_at: Date, $created_by: String, $album_id: Int!, $is_deleted: Int!) {\n  TrackCreate(name: $name, track_num: $track_num, created_at: $created_at, created_by: $created_by, album_id: $album_id, is_deleted: $is_deleted) {\n    ...TrackFields\n    accounts {\n      ...AccountFields\n    }\n  }\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(57).definitions));
doc.definitions = doc.definitions.concat(unique(__webpack_require__(46).definitions));

module.exports = doc;

/***/ }),

/***/ 1066:
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TrackDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"TrackDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TrackFields"},"directives":[]}]}}]}}],"loc":{"start":0,"end":122}};
    doc.loc.source = {"body":"#import \"./fragmentTrackFields.graphql\"\nmutation TrackDelete($id:ID!) {\n  TrackDelete(id: $id) {\n    ...TrackFields\n  }\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(57).definitions));

module.exports = doc;

/***/ }),

/***/ 1302:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1303:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1304:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; // Import globals


// Import libraries


// Import components


// Import assets


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(12);

var _radium2 = _interopRequireDefault(_radium);

var _globals = __webpack_require__(8);

var _shared = __webpack_require__(162);

var _sprite = __webpack_require__(1295);

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles
var styles = {
  wrapper: {
    margin: '0 auto',
    maxWidth: 880,
    width: '90%'
  },
  main: {
    backgroundColor: _globals.colors.base5,
    padding: 20,
    position: 'relative'
  },
  svg: {
    height: 0,
    overflow: 'hidden',
    position: 'absolute',
    width: 0
  }
};

var Layout = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles.wrapper },
        _react2.default.createElement(_shared.Head, null),
        _react2.default.createElement(_shared.Header, null),
        _react2.default.createElement(
          'main',
          { style: styles.main },
          this.props.children
        ),
        _react2.default.createElement(_shared.Footer, null),
        _react2.default.createElement(_shared.Notification, null),
        _react2.default.createElement('div', { style: styles.svg, dangerouslySetInnerHTML: { __html: _sprite2.default } })
      );
    }
  }]);

  return Layout;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.element]).isRequired
}, _temp)) || _class;

exports.default = Layout;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Import globals

// Import components

// Import libraries


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _partials = __webpack_require__(25);

var _AccountCreate = __webpack_require__(376);

var _AccountCreate2 = _interopRequireDefault(_AccountCreate);

var _AccountSingle = __webpack_require__(377);

var _AccountSingle2 = _interopRequireDefault(_AccountSingle);

var _helpers = __webpack_require__(44);

var _globals = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  sectionTitle: {
    color: _globals.colors.base1,
    fontSize: 15,
    lineHeight: '17px',
    margin: '25px 0 10px 0'
  },
  column: {
    display: 'inline-block',
    margin: '0 3px 3px 0',
    verticalAlign: 'bottom'
  },
  name: { width: 130 },
  uuid: { width: 'calc(100% - 240px)' },
  add: { width: 98 }
};

var AccountsWrapper = function AccountsWrapper(props) {
  return _react2.default.createElement(
    'div',
    null,
    props.title && _react2.default.createElement(
      'h3',
      { style: styles.sectionTitle },
      _helpers.string.toTitleCase(props.title)
    ),
    _react2.default.createElement(_partials.Label, {
      title: 'Account Name',
      style: Object.assign({}, styles.column, styles.name)
    }),
    _react2.default.createElement(_partials.Label, {
      title: 'Account\'s UUID',
      style: Object.assign({}, styles.column, styles.add)
    }),
    props.defaults && props.defaults.map(function (account) {
      return _react2.default.createElement(_AccountSingle2.default, _extends({}, account, {
        key: account.id,
        refType: props.refType,
        refId: props.refId
      }));
    }),
    _react2.default.createElement(_AccountCreate2.default, { refType: props.refType, refId: props.refId })
  );
};

AccountsWrapper.propTypes = {
  refType: _propTypes2.default.string,
  refId: _propTypes2.default.string,
  title: _propTypes2.default.string,
  defaults: _propTypes2.default.array
};

exports.default = AccountsWrapper;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; // Import globals


// Import libraries


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(12);

var _radium2 = _interopRequireDefault(_radium);

var _globals = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  base: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.3)',
    color: _globals.colors.base1,
    cursor: 'pointer',
    fontFamily: '"Open Sans",sans-serif',
    fontSize: 11,
    letterSpacing: '0.03em',
    outline: 0,
    padding: '10px 15px',
    textTransform: 'uppercase',
    verticalAlign: 'middle',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.05)'
    }
  },
  iconPadding: {
    padding: 5
  },
  disabled: {
    cursor: 'default',
    ':hover': {
      backgroundColor: _globals.colors.base7
    }
  },
  submit: {
    backgroundColor: _globals.colors.base7,
    borderColor: _globals.colors.base7,
    color: _globals.colors.base8,
    ':hover': {
      backgroundColor: _globals.colors.base9
    }
  }
};

var Button = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'onClick',
    value: function onClick(event) {
      this.props.onClick(event);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        {
          type: this.props.type,
          name: this.props.name,
          style: [styles.base, styles[this.props.type && this.props.type], styles[this.props.disabled && 'disabled'], styles[_typeof(this.props.value) === 'object' && 'iconPadding'], this.props.style && this.props.style],
          disabled: this.props.disabled,
          onClick: this.props.onClick,
          title: this.props.title
        },
        this.props.value
      );
    }
  }]);

  return Button;
}(_react2.default.Component), _class2.propTypes = {
  type: _propTypes2.default.string,
  name: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]).isRequired,
  onClick: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string,
  style: _propTypes2.default.object
}, _class2.defaultProps = {
  type: 'button',
  disabled: false
}, _temp)) || _class;

exports.default = Button;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp, _class3; // Import globals


var _radium = __webpack_require__(12);

var _radium2 = _interopRequireDefault(_radium);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(50);

var _globals = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = (0, _radium2.default)(_reactRouterDom.Link);

// Import libraries


// NavLink styles
var linkStyles = {
  base: {
    color: _globals.colors.base1,
    fontSize: 13
  },
  active: {
    fontWeight: 'bold'
  },
  hover: {
    ':hover': { textDecoration: 'none' }
  },
  disabled: {
    textDecoration: 'none',
    opacity: 0.5,
    cursor: 'default'
  },
  inline: {
    display: 'inline-block',
    verticalAlign: 'top',
    marginRight: 10
  },
  last: {
    marginRight: 0
  }
};

// NavLink Component

var NavItemLink = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(NavItemLink, _Component);

  function NavItemLink(props) {
    _classCallCheck(this, NavItemLink);

    var _this = _possibleConstructorReturn(this, (NavItemLink.__proto__ || Object.getPrototypeOf(NavItemLink)).call(this, props));

    _this.state = { disabled: false };
    return _this;
  }

  _createClass(NavItemLink, [{
    key: 'render',
    value: function render() {
      var link = _react2.default.createElement(
        'h3',
        { style: linkStyles.base },
        this.props.data.name
      );

      if (this.props.data.path) {
        link = _react2.default.createElement(
          Link,
          {
            to: this.props.data.path,
            style: [linkStyles.base, linkStyles.hover, linkStyles[this.state.disabled && this.state.disabled]]
          },
          this.props.data.name
        );
      }

      return _react2.default.createElement(
        'li',
        {
          style: [linkStyles[this.props.display && this.props.display], linkStyles[this.props.order && this.props.order]]
        },
        link,
        this.props.children
      );
    }
  }]);

  return NavItemLink;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.element,
  display: _propTypes2.default.oneOf(['inline']),
  order: _propTypes2.default.oneOf(['odd', 'even', 'first', 'last']),
  data: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    path: _propTypes2.default.string,
    items: _propTypes2.default.array
  })
}, _temp)) || _class;

// Nav wrapper styles


var wrapperStyles = {
  backgroundColor: _globals.colors.base4,
  padding: 10
};

// Nav wrapper

var Navigation = (0, _radium2.default)(_class3 = function (_Component2) {
  _inherits(Navigation, _Component2);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'labelOrder',

    /**
     * Name the element's order for styling
     * @param  {number} i         iteratee number
     * @param  {number} arrLength Total array length
     * @return {string}           The name of the order
     */
    value: function labelOrder(i, arrLength) {
      var orderName = void 0;
      orderName = i % 2 ? 'odd' : 'even';
      if (i == 0) orderName = 'first';
      if (i + 1 == arrLength) orderName = 'last';
      return orderName;
    }

    /**
     * Deep navigation traversing
     * @return {element} Nested menu element
     */

  }, {
    key: 'buildNavList',
    value: function buildNavList() {
      var _this3 = this;

      var navStyles = {
        list: {
          padding: 0,
          margin: 0,
          listStyle: 'none'
        }
      };

      var navList = [];

      _globals.navStructure.forEach(function (navItem, i) {
        if (navItem.items) {
          var navSubList = [];

          navItem.items.forEach(function (navSubItem, y) {
            if (navSubItem.items) {
              var navSubSubList = [];

              navSubItem.items.forEach(function (navSubSubItem, z) {
                navSubSubList.push(_react2.default.createElement(NavItemLink, { data: navSubSubItem, key: i + '.' + y + '.' + z }));
              });

              navSubList.push(_react2.default.createElement(
                NavItemLink,
                { data: navSubItem, key: i + '.' + y },
                _react2.default.createElement(
                  'ul',
                  { style: navStyles.list },
                  navSubSubList
                )
              ));
            } else {
              navSubList.push(_react2.default.createElement(NavItemLink, { data: navSubItem, key: i + '.' + y }));
            }
          });

          navList.push(_react2.default.createElement(
            NavItemLink,
            {
              data: navItem,
              display: 'inline',
              order: _this3.labelOrder(i, _globals.navStructure.length),
              key: i
            },
            _react2.default.createElement(
              'ul',
              { style: navStyles.list },
              navSubList
            )
          ));
        } else {
          navList.push(_react2.default.createElement(NavItemLink, { data: navItem, display: 'inline', key: i }));
        }
      });

      return _react2.default.createElement(
        'ul',
        { style: navStyles.list },
        navList
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'div',
          { style: wrapperStyles },
          this.buildNavList()
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component)) || _class3;

exports.default = Navigation;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = exports.Navigation = exports.Layout = exports.Icon = exports.Header = exports.Head = exports.Footer = undefined;

var _Footer = __webpack_require__(389);

var _Footer2 = _interopRequireDefault(_Footer);

var _Head = __webpack_require__(390);

var _Head2 = _interopRequireDefault(_Head);

var _Header = __webpack_require__(391);

var _Header2 = _interopRequireDefault(_Header);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _Layout = __webpack_require__(143);

var _Layout2 = _interopRequireDefault(_Layout);

var _Navigation = __webpack_require__(161);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Notification = __webpack_require__(23);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Footer = _Footer2.default;
exports.Head = _Head2.default;
exports.Header = _Header2.default;
exports.Icon = _Icon2.default;
exports.Layout = _Layout2.default;
exports.Navigation = _Navigation2.default;
exports.Notification = _Notification2.default;

/***/ }),

/***/ 224:
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Artist"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"type"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"is_deleted"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"created_at"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"created_by"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"updated_at"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"updated_by"},"arguments":[],"directives":[],"selectionSet":null}]}}],"loc":{"start":0,"end":120}};
    doc.loc.source = {"body":"fragment ArtistFields on Artist {\n  id\n  name\n  type\n  is_deleted\n  created_at\n  created_by\n  updated_at\n  updated_by\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  
module.exports = doc;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TrackUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updated_at"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updated_by"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"is_deleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"TrackUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"updated_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updated_at"}}},{"kind":"Argument","name":{"kind":"Name","value":"updated_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updated_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"album_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_deleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"is_deleted"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TrackFields"},"directives":[]}]}}]}}],"loc":{"start":0,"end":320}};
    doc.loc.source = {"body":"#import \"./fragmentTrackFields.graphql\"\nmutation TrackUpdate($id:ID!, $name: String, $updated_at: Date, $updated_by: String, $album_id: Int, $is_deleted: Int) {\n  TrackUpdate(id: $id, name: $name, updated_at: $updated_at, updated_by: $updated_by, album_id: $album_id, is_deleted: $is_deleted) {\n    ...TrackFields\n  }\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(57).definitions));

module.exports = doc;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADD_NOTIF = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

exports.addNotif = addNotif;
exports.notifReducer = notifReducer;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(31);

var _radium = __webpack_require__(12);

var _radium2 = _interopRequireDefault(_radium);

var _globals = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // Import globals

// Import libraries


var styles = {
  wrapper: {
    position: 'fixed',
    right: '-100%',
    top: 20,
    padding: 15,
    maxWidth: 400,
    textAlign: 'center',
    zIndex: 10,
    opacity: 0,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.4)',
    WebKitTransition: '.5s cubic-bezier(0.89, 0.01, 0.5, 1.1)',
    MozTransition: '.25s cubic-bezier(0.89, 0.01, 0.5, 1.1)',
    msTransition: '.25s cubic-bezier(0.89, 0.01, 0.5, 1.1)',
    OTransition: '.25s cubic-bezier(0.89, 0.01, 0.5, 1.1)',
    transition: '.25s cubic-bezier(0.89, 0.01, 0.5, 1.1)',
    WebkitTransform: 'translatez(0)',
    MozTransform: 'translatez(0)',
    msTransform: 'translatez(0)',
    OTransform: 'translatez(0)',
    transform: 'translatez(0)'
  },
  title: {
    color: 'rgba(0,0,0,0.8)',
    margin: 0,
    fontSize: 15,
    lineHeight: '17px',
    fontWeight: 700
  },
  message: {
    color: 'rgba(0,0,0,0.8)',
    margin: '10px 0 0',
    fontSize: 13,
    lineHeight: '15px'
  },
  active: {
    right: 20,
    opacity: 0.7
  },
  success: {
    backgroundColor: _globals.colors.base7,
    borderColor: _globals.colors.base7
  },
  error: {
    backgroundColor: _globals.colors.base10,
    borderColor: _globals.colors.base10
  }
};

var ADD_NOTIF = exports.ADD_NOTIF = 'ADD_NOTIF';

function addNotif(notifObj) {
  return { type: ADD_NOTIF, notifObj: notifObj };
}

function notifReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case ADD_NOTIF:
      return [].concat(_toConsumableArray(state), [action.notifObj]);
    default:
      return state;
  }
}

var Notification = (_dec = (0, _reactRedux.connect)(function (state) {
  return { notification: state.notifications.slice(-1)[0] };
}), _dec(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Notification, _Component);

  function Notification(props) {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props));

    _this.state = { active: false };
    return _this;
  }

  _createClass(Notification, [{
    key: 'show',
    value: function show() {
      var _this2 = this;

      this.setState({ active: true });
      this.dismissTimeout = setTimeout(function () {
        _this2.hide();
      }, 2000);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.setState({ active: false });
      clearTimeout(this.dismissTimeout);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      if (_globals.config.CONSOLELOG_ACTIONS) {
        console.log(nextProps.notification.data);
      }

      if (this.state.active) {
        this.hide();
        setTimeout(function () {
          _this3.show();
        }, 250);
      } else {
        this.show();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var notification = this.props.notification;

      if (Object.getOwnPropertyNames(notification).length !== 0) {
        return _react2.default.createElement(
          'div',
          {
            style: [styles.wrapper, this.state.active && styles.active, notification.type && styles[notification.type]]
          },
          _react2.default.createElement(
            'h2',
            { style: styles.title },
            notification.title
          ),
          notification.message && _react2.default.createElement(
            'p',
            { style: styles.message },
            notification.message
          )
        );
      } else {
        return null;
      }
    }
  }]);

  return Notification;
}(_react.Component), _class2.propTypes = {
  notification: _propTypes2.default.object
}, _class2.defaultProps = {
  notification: {}
}, _temp)) || _class) || _class);
exports.default = Notification;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = exports.Label = exports.Button = exports.Select = exports.Text = undefined;

var _Text = __webpack_require__(387);

var _Text2 = _interopRequireDefault(_Text);

var _Select = __webpack_require__(386);

var _Select2 = _interopRequireDefault(_Select);

var _Button = __webpack_require__(160);

var _Button2 = _interopRequireDefault(_Button);

var _Label = __webpack_require__(385);

var _Label2 = _interopRequireDefault(_Label);

var _Checkbox = __webpack_require__(69);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Text = _Text2.default;
exports.Select = _Select2.default;
exports.Button = _Button2.default;
exports.Label = _Label2.default;
exports.Checkbox = _Checkbox2.default;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // Import globals


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(12);

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  base: {
    color: 'rgba(0,0,0,.7)',
    display: 'inline-block',
    fill: 'currentColor',
    height: 25,
    overflow: 'hidden',
    position: 'relative',
    top: '-0.0625em',
    verticalAlign: 'middle',
    width: 25
  }
};

var Icon = exports.Icon = (_temp = _class = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.icon !== this.props.icon;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        {
          style: [styles.base, this.props.style && this.props.style],
          'aria-hidden': 'true',
          role: 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          xmlnsXlink: 'http://www.w3.org/1999/xlink'
        },
        _react2.default.createElement('use', { xlinkHref: '#' + this.props.icon + '-icon' })
      );
    }
  }]);

  return Icon;
}(_react.Component), _class.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.object
}, _temp);
exports.default = (0, _radium2.default)(Icon);

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(63);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Crawl = function (_Component) {
  _inherits(Crawl, _Component);

  function Crawl() {
    _classCallCheck(this, Crawl);

    return _possibleConstructorReturn(this, (Crawl.__proto__ || Object.getPrototypeOf(Crawl)).apply(this, arguments));
  }

  _createClass(Crawl, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactHelmet2.default, { title: 'Crawl' }),
        _react2.default.createElement(
          'h2',
          null,
          'Crawl'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Ready to fetch some data?'
        )
      );
    }
  }]);

  return Crawl;
}(_react.Component);

exports.default = Crawl;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Dashboard'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Welcome to Rola Music Project Dashboard'
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // Import globals


// Import components


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(63);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _List = __webpack_require__(388);

var _List2 = _interopRequireDefault(_List);

var _Artist = __webpack_require__(381);

var _Artist2 = _interopRequireDefault(_Artist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Manage = (_temp = _class = function (_Component) {
  _inherits(Manage, _Component);

  function Manage() {
    _classCallCheck(this, Manage);

    return _possibleConstructorReturn(this, (Manage.__proto__ || Object.getPrototypeOf(Manage)).apply(this, arguments));
  }

  _createClass(Manage, [{
    key: 'render',
    value: function render() {
      var _props$match$params = this.props.match.params,
          type = _props$match$params.type,
          typeId = _props$match$params.typeId;
      var search = this.props.location.search;


      if (type && !typeId) {
        return _react2.default.createElement(_List2.default, { type: type, filter: search });
      } else if (type && typeId) {
        return _react2.default.createElement(_Artist2.default, { id: typeId });
      } else {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactHelmet2.default, { title: 'Manage' }),
          _react2.default.createElement(
            'h2',
            null,
            'Manage Home'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Manage the database'
          )
        );
      }
    }
  }]);

  return Manage;
}(_react.Component), _class.propTypes = {
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object
}, _temp);
exports.default = Manage;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageNotFound = function PageNotFound() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      '404'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Sorry, the page you\'re looking for cannot be found.'
    )
  );
};

exports.default = PageNotFound;

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(298);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(50);

var _reactApollo = __webpack_require__(19);

var _redux = __webpack_require__(65);

var _Layout = __webpack_require__(143);

var _Layout2 = _interopRequireDefault(_Layout);

var _Home = __webpack_require__(295);

var _Home2 = _interopRequireDefault(_Home);

var _Crawl = __webpack_require__(294);

var _Crawl2 = _interopRequireDefault(_Crawl);

var _Manage = __webpack_require__(296);

var _Manage2 = _interopRequireDefault(_Manage);

var _PageNotFound = __webpack_require__(297);

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

var _Notification = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create and prepend the React app container


// Import components
var appElement = document.createElement('div');

// Import notification reducer
// Import globals

document.body.prepend(appElement);

// Connect Apollo to graphql server
var graphqlServer = new _reactApollo.ApolloClient({
  reduxRootSelector: function reduxRootSelector(state) {
    return state.graphqlServer;
  },
  networkInterface: (0, _reactApollo.createNetworkInterface)({
    uri: 'http://localhost:8182/graphql'
  }),
  addTypename: true,
  dataIdFromObject: function dataIdFromObject(result) {
    if (result.id && result.__typename) {
      return result.__typename + result.id;
    }
    return null;
  }
});

// see http://dev.apollodata.com/react/redux.html
var store = (0, _redux.createStore)((0, _redux.combineReducers)({
  notifications: _Notification.notifReducer,
  graphqlServer: graphqlServer.reducer()
}), {}, // initial state
(0, _redux.compose)((0, _redux.applyMiddleware)(graphqlServer.middleware()),
// If you are using the devToolsExtension, you can add it here also
typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
  return f;
}));

_reactDom2.default.render(_react2.default.createElement(
  _reactApollo.ApolloProvider,
  { store: store, client: graphqlServer },
  _react2.default.createElement(
    _reactRouterDom.HashRouter,
    null,
    _react2.default.createElement(
      _Layout2.default,
      null,
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/crawl', component: _Crawl2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/manage/:type?/:typeId(\\d+|add)?', component: _Manage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _PageNotFound2.default })
      )
    )
  )
), appElement);

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // Import globals

// Import components

// Import libraries

// Import queries

// Import notification


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(19);

var _reactRedux = __webpack_require__(31);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _partials = __webpack_require__(25);

var _globals = __webpack_require__(8);

var _accountCreate = __webpack_require__(1056);

var _accountCreate2 = _interopRequireDefault(_accountCreate);

var _Notification = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  sectionTitle: {
    color: _globals.colors.base1,
    fontSize: 15,
    lineHeight: '17px',
    margin: '25px 0 10px 0'
  },
  column: {
    display: 'inline-block',
    margin: '0 3px 3px 0',
    verticalAlign: 'bottom'
  },
  name: { width: 130 },
  uuid: { width: 'calc(100% - 245px)' },
  add: { width: 103 }
};

var AccountCreate = (_temp = _class = function (_Component) {
  _inherits(AccountCreate, _Component);

  function AccountCreate(props) {
    _classCallCheck(this, AccountCreate);

    var _this = _possibleConstructorReturn(this, (AccountCreate.__proto__ || Object.getPrototypeOf(AccountCreate)).call(this, props));

    _this.state = { submitting: false };
    _this.handleCreate = _this.handleCreate.bind(_this);
    return _this;
  }

  _createClass(AccountCreate, [{
    key: 'handleSuccess',
    value: function handleSuccess(data) {
      var response = {
        type: 'success',
        title: 'Account successfully created',
        data: JSON.stringify(data)
      };
      this.setState({ submitting: false });
      this.props.addNotification(response);
    }
  }, {
    key: 'handleError',
    value: function handleError(error) {
      var response = {
        type: 'error',
        title: 'An error occured',
        data: JSON.stringify(error)
      };
      this.setState({ submitting: false });
      this.props.addNotification(response);
    }
  }, {
    key: 'handleCreate',
    value: function handleCreate(event) {
      var _this2 = this;

      event.preventDefault();

      var _props = this.props,
          createAccount = _props.createAccount,
          refId = _props.refId,
          refType = _props.refType;

      var accountName = this.accountName.Input.value;
      var accountUuid = this.accountUuid.Input.value;

      if (accountName && accountUuid) {
        this.setState({ submitting: true });
        createAccount({
          name: accountName,
          uuid: accountUuid,
          ref_id: refId,
          ref_type: refType,
          created_by: _globals.config.CURRENT_USER
        }).then(function (_ref) {
          var data = _ref.data;

          _this2.handleSuccess(data);
        }).catch(function (error) {
          _this2.handleError(error);
        });
      }

      document.getElementById('acc-create-in-' + refType + '-' + refId).reset();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          refType = _props2.refType,
          refId = _props2.refId;
      var submitting = this.state.submitting;


      return _react2.default.createElement(
        'form',
        { id: 'acc-create-in-' + refType + '-' + refId },
        _react2.default.createElement(_partials.Select, {
          options: _globals.accountNames,
          ref: function ref(input) {
            return _this3.accountName = input;
          },
          style: Object.assign({}, styles.column, styles.name)
        }),
        _react2.default.createElement(_partials.Text, {
          placeholder: 'Account\'s unique ID',
          ref: function ref(input) {
            return _this3.accountUuid = input;
          },
          style: Object.assign({}, styles.column, styles.uuid)
        }),
        _react2.default.createElement(_partials.Button, {
          type: 'submit',
          value: submitting ? _react2.default.createElement(_Icon2.default, { icon: 'ei-spinner-3' }) : 'Add',
          disabled: submitting,
          onClick: this.handleCreate,
          style: Object.assign({}, styles.column, styles.add)
        })
      );
    }
  }]);

  return AccountCreate;
}(_react.Component), _class.propTypes = {
  refType: _propTypes2.default.string,
  refId: _propTypes2.default.string,
  addNotification: _propTypes2.default.func.isRequired,
  createAccount: _propTypes2.default.func.isRequired,
  error: _propTypes2.default.object
}, _temp);
exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_accountCreate2.default, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createAccount: function createAccount(args) {
        return mutate({
          variables: _extends({}, args)
        });
      }
    };
  }
}), (0, _reactRedux.connect)(function (state) {
  return { notifications: state.notifications };
}, function (dispatch) {
  return {
    addNotification: function addNotification(notifObj) {
      dispatch((0, _Notification.addNotif)(notifObj));
    }
  };
}))(AccountCreate);

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // Import globals

// Import components

// Import libraries

// Import queries

// Import notification


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(19);

var _reactRedux = __webpack_require__(31);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _partials = __webpack_require__(25);

var _globals = __webpack_require__(8);

var _accountUpdate = __webpack_require__(1058);

var _accountUpdate2 = _interopRequireDefault(_accountUpdate);

var _accountDelete = __webpack_require__(1057);

var _accountDelete2 = _interopRequireDefault(_accountDelete);

var _Notification = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  sectionTitle: {
    color: _globals.colors.base1,
    fontSize: 15,
    lineHeight: '17px',
    margin: '25px 0 10px 0'
  },
  column: {
    display: 'inline-block',
    margin: '0 3px 3px 0',
    verticalAlign: 'bottom'
  },
  name: { width: 130 },
  uuid: { width: 'calc(100% - 245px)' },
  delete: { width: 40 },
  save: { width: 60 }
};

var AccountSingle = (_temp = _class = function (_Component) {
  _inherits(AccountSingle, _Component);

  function AccountSingle(props) {
    _classCallCheck(this, AccountSingle);

    var _this = _possibleConstructorReturn(this, (AccountSingle.__proto__ || Object.getPrototypeOf(AccountSingle)).call(this, props));

    _this.state = { submitting: false };
    _this.handleSave = _this.handleSave.bind(_this);
    _this.handleDelete = _this.handleDelete.bind(_this);
    return _this;
  }

  _createClass(AccountSingle, [{
    key: 'handleSuccess',
    value: function handleSuccess(data, title) {
      var response = {
        type: 'success',
        title: title,
        data: JSON.stringify(data)
      };
      this.props.addNotification(response);
    }
  }, {
    key: 'handleError',
    value: function handleError(error) {
      var response = {
        type: 'error',
        title: 'An error occured',
        data: JSON.stringify(error)
      };
      this.setState({ submitting: false });
      this.props.addNotification(response);
    }
  }, {
    key: 'handleSave',
    value: function handleSave(event) {
      var _this2 = this;

      event.preventDefault();

      var submitting = this.state.submitting;
      var _props = this.props,
          saveAccount = _props.saveAccount,
          refId = _props.refId,
          refType = _props.refType,
          name = _props.name,
          uuid = _props.uuid;

      var accountName = this.accountName.Input.value;
      var accountUuid = this.accountUuid.Input.value;

      if (!submitting && accountName && accountUuid) {
        this.setState({ submitting: true });
        saveAccount({
          name: accountName,
          uuid: accountUuid,
          ref_id: refId,
          ref_type: refType,
          updated_by: _globals.config.CURRENT_USER
        }).then(function (_ref) {
          var data = _ref.data;

          _this2.handleSuccess(data, 'Account successfully saved');
          _this2.setState({ submitting: false });
        }).catch(function (error) {
          _this2.handleError(error);
        });
      } else {
        this.accountName.Input.value = name;
        this.accountUuid.Input.value = uuid;
      }
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete() {
      var _this3 = this;

      var submitting = this.state.submitting;
      var _props2 = this.props,
          deleteAccount = _props2.deleteAccount,
          id = _props2.id;


      if (!submitting) {
        this.setState({ submitting: true });
        deleteAccount({ id: id }).then(function (_ref2) {
          var data = _ref2.data;

          _this3.handleSuccess(data, 'Account successfully deleted');
        }).catch(function (error) {
          _this3.handleError(error);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props3 = this.props,
          id = _props3.id,
          name = _props3.name,
          uuid = _props3.uuid,
          created_at = _props3.created_at,
          created_by = _props3.created_by,
          updated_at = _props3.updated_at,
          updated_by = _props3.updated_by,
          refType = _props3.refType;
      var submitting = this.state.submitting;


      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSave, id: 'acc-' + id + '-update-in-' + refType },
        _react2.default.createElement(_partials.Select, {
          options: _globals.accountNames,
          defaultValue: name,
          ref: function ref(input) {
            return _this4.accountName = input;
          },
          style: Object.assign({}, styles.column, styles.name)
        }),
        _react2.default.createElement(_partials.Text, {
          placeholder: 'Account\'s unique ID',
          defaultValue: uuid,
          ref: function ref(input) {
            return _this4.accountUuid = input;
          },
          style: Object.assign({}, styles.column, styles.uuid)
        }),
        _react2.default.createElement(_partials.Button, {
          value: _react2.default.createElement(_Icon2.default, { icon: 'ei-trash' }),
          onClick: this.handleDelete,
          style: Object.assign({}, styles.column, styles.delete)
        }),
        _react2.default.createElement(_partials.Button, {
          type: 'submit',
          value: submitting ? _react2.default.createElement(_Icon2.default, { icon: 'ei-spinner-3' }) : 'Save',
          disabled: submitting,
          onClick: this.handleSave,
          style: Object.assign({}, styles.column, styles.save),
          title: 'Created ' + created_at + ' by ' + created_by + '.Updated ' + updated_at + ' by ' + updated_by
        })
      );
    }
  }]);

  return AccountSingle;
}(_react.Component), _class.propTypes = {
  refType: _propTypes2.default.string,
  refId: _propTypes2.default.string,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  uuid: _propTypes2.default.string,
  created_at: _propTypes2.default.string,
  created_by: _propTypes2.default.string,
  updated_at: _propTypes2.default.string,
  updated_by: _propTypes2.default.string,
  addNotification: _propTypes2.default.func.isRequired,
  saveAccount: _propTypes2.default.func.isRequired,
  deleteAccount: _propTypes2.default.func.isRequired,
  error: _propTypes2.default.object
}, _temp);
exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_accountUpdate2.default, {
  props: function props(_ref3) {
    var ownProps = _ref3.ownProps,
        mutate = _ref3.mutate;
    return {
      saveAccount: function saveAccount(args) {
        return mutate({
          variables: _extends({ id: ownProps.id }, args)
        });
      }
    };
  }
}), (0, _reactApollo.graphql)(_accountDelete2.default, {
  props: function props(_ref4) {
    var ownProps = _ref4.ownProps,
        mutate = _ref4.mutate;
    return {
      deleteAccount: function deleteAccount(args) {
        return mutate({
          variables: _extends({ id: ownProps.id }, args)
        });
      }
    };
  }
}), (0, _reactRedux.connect)(function (state) {
  return { notifications: state.notifications };
}, function (dispatch) {
  return {
    addNotification: function addNotification(notifObj) {
      dispatch((0, _Notification.addNotif)(notifObj));
    }
  };
}))(AccountSingle);

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // Import globals

// Import components

// Import libraries

// Import queries

// Import notification


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(19);

var _reactRedux = __webpack_require__(31);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _partials = __webpack_require__(25);

var _Checkbox = __webpack_require__(69);

var _globals = __webpack_require__(8);

var _albumCreate = __webpack_require__(1059);

var _albumCreate2 = _interopRequireDefault(_albumCreate);

var _Notification = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  sectionTitle: {
    color: _globals.colors.base1,
    fontSize: 15,
    lineHeight: '17px',
    margin: '25px 0 10px 0'
  },
  column: {
    display: 'inline-block',
    margin: '0 3px 3px 0',
    verticalAlign: 'bottom'
  },
  name: { width: 'calc(100% - 310px)' },
  releaseDate: { width: 152 },
  softDelete: { width: 40 },
  add: { width: 103 }
};

var AccountCreate = (_temp = _class = function (_Component) {
  _inherits(AccountCreate, _Component);

  function AccountCreate(props) {
    _classCallCheck(this, AccountCreate);

    var _this = _possibleConstructorReturn(this, (AccountCreate.__proto__ || Object.getPrototypeOf(AccountCreate)).call(this, props));

    _this.state = { submitting: false };
    _this.handleCreate = _this.handleCreate.bind(_this);
    return _this;
  }

  _createClass(AccountCreate, [{
    key: 'handleSuccess',
    value: function handleSuccess(data) {
      var response = {
        type: 'success',
        title: 'Album successfully created',
        data: JSON.stringify(data)
      };
      this.setState({ submitting: false });
      this.props.addNotification(response);
    }
  }, {
    key: 'handleError',
    value: function handleError(error) {
      var response = {
        type: 'error',
        title: 'An error occured',
        data: JSON.stringify(error)
      };
      this.setState({ submitting: false });
      this.props.addNotification(response);
    }
  }, {
    key: 'handleCreate',
    value: function handleCreate(event) {
      var _this2 = this;

      event.preventDefault();

      var _props = this.props,
          createAlbum = _props.createAlbum,
          refId = _props.refId;

      var albumName = this.albumName.Input.value;
      var albumReleaseDate = this.albumReleaseDate.Input.value || null;
      var albumIsDeleted = this.albumIsDeleted.Input.checked ? 0 : 1;

      if (albumName) {
        this.setState({ submitting: true });
        createAlbum({
          name: albumName,
          release_date: albumReleaseDate,
          created_by: _globals.config.CURRENT_USER,
          artist_id: refId,
          is_deleted: albumIsDeleted
        }).then(function (_ref) {
          var data = _ref.data;

          _this2.handleSuccess(data);
        }).catch(function (error) {
          _this2.handleError(error);
        });
      }

      document.getElementById('album-create').reset();
      (0, _Checkbox.toggleCheckBoxBg)(this.albumIsDeleted.Input);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var submitting = this.state.submitting;


      return _react2.default.createElement(
        'form',
        { id: 'album-create' },
        _react2.default.createElement(_partials.Text, {
          placeholder: 'Album\'s name',
          ref: function ref(input) {
            return _this3.albumName = input;
          },
          style: Object.assign({}, styles.column, styles.name)
        }),
        _react2.default.createElement(_partials.Text, {
          placeholder: 'Release date',
          ref: function ref(input) {
            return _this3.albumReleaseDate = input;
          },
          style: Object.assign({}, styles.column, styles.releaseDate)
        }),
        _react2.default.createElement(_partials.Checkbox, {
          ref: function ref(input) {
            return _this3.albumIsDeleted = input;
          },
          style: Object.assign({}, styles.column, styles.softDelete)
        }),
        _react2.default.createElement(_partials.Button, {
          type: 'submit',
          value: submitting ? _react2.default.createElement(_Icon2.default, { icon: 'ei-spinner-3' }) : 'Add',
          disabled: submitting,
          onClick: this.handleCreate,
          style: Object.assign({}, styles.column, styles.add)
        })
      );
    }
  }]);

  return AccountCreate;
}(_react.Component), _class.propTypes = {
  refType: _propTypes2.default.string,
  refId: _propTypes2.default.string,
  addNotification: _propTypes2.default.func.isRequired,
  createAlbum: _propTypes2.default.func.isRequired,
  error: _propTypes2.default.object
}, _temp);
exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_albumCreate2.default, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createAlbum: function createAlbum(args) {
        return mutate({
          variables: _extends({}, args)
        });
      }
    };
  }
}), (0, _reactRedux.connect)(function (state) {
  return { notifications: state.notifications };
}, function (dispatch) {
  return {
    addNotification: function addNotification(notifObj) {
      dispatch((0, _Notification.addNotif)(notifObj));
    }
  };
}))(AccountCreate);

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // Import globals

// Import components

// Import libraries

// Import queries

// Import notification


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(19);

var _reactRedux = __webpack_require__(31);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _partials = __webpack_require__(25);

var _Accounts = __webpack_require__(159);

var _Accounts2 = _interopRequireDefault(_Accounts);

var _Tracks = __webpack_require__(384);

var _Tracks2 = _interopRequireDefault(_Tracks);

var _globals = __webpack_require__(8);

var _albumUpdate = __webpack_require__(1061);

var _albumUpdate2 = _interopRequireDefault(_albumUpdate);

var _albumDelete = __webpack_require__(1060);

var _albumDelete2 = _interopRequireDefault(_albumDelete);

var _Notification = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  albumTitle: {
    color: _globals.colors.base1,
    fontSize: 15,
    lineHeight: '15px',
    margin: '25px 0 10px 0'
  },
  column: {
    display: 'inline-block',
    margin: '0 3px 3px 0',
    verticalAlign: 'bottom'
  },
  name: { width: 'calc(100% - 310px)' },
  releaseDate: { width: 152 },
  softdelete: { width: 40 },
  softdeleteCheckBox: { width: '100%' },
  delete: { width: 40 },
  save: { width: 60 }
};

var AlbumSingle = (_temp = _class = function (_Component) {
  _inherits(AlbumSingle, _Component);

  function AlbumSingle(props) {
    _classCallCheck(this, AlbumSingle);

    var _this = _possibleConstructorReturn(this, (AlbumSingle.__proto__ || Object.getPrototypeOf(AlbumSingle)).call(this, props));

    _this.state = { submitting: false };
    _this.handleSave = _this.handleSave.bind(_this);
    _this.handleDelete = _this.handleDelete.bind(_this);
    return _this;
  }

  _createClass(AlbumSingle, [{
    key: 'handleSuccess',
    value: function handleSuccess(data, title) {
      var response = {
        type: 'success',
        title: title,
        data: JSON.stringify(data)
      };
      this.props.addNotification(response);
    }
  }, {
    key: 'handleError',
    value: function handleError(error) {
      var response = {
        type: 'error',
        title: 'An error occured',
        data: JSON.stringify(error)
      };
      this.setState({ submitting: false });
      this.props.addNotification(response);
    }
  }, {
    key: 'handleSave',
    value: function handleSave(event) {
      var _this2 = this;

      event.preventDefault();

      var submitting = this.state.submitting;
      var _props = this.props,
          name = _props.name,
          refId = _props.refId,
          saveAlbum = _props.saveAlbum,
          is_deleted = _props.is_deleted,
          release_date = _props.release_date;

      var albumName = this.albumName.Input.value;
      var albumReleaseDate = this.albumReleaseDate.Input.value || null;
      var albumIsDeleted = this.albumIsDeleted.Input.checked ? 0 : 1;

      if (!submitting && albumName) {
        this.setState({ submitting: true });
        saveAlbum({
          name: albumName,
          release_date: albumReleaseDate,
          artist_id: refId,
          updated_by: _globals.config.CURRENT_USER,
          is_deleted: albumIsDeleted
        }).then(function (_ref) {
          var data = _ref.data;

          _this2.handleSuccess(data, 'Album successfully saved');
          _this2.setState({ submitting: false });
        }).catch(function (error) {
          _this2.handleError(error);
        });
      } else {
        this.albumName.Input.value = name;
        this.albumReleaseDate.Input.value = release_date;
        // Bu yeterli değil:
        this.albumIsDeleted.Input.value = is_deleted;
      }
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete() {
      var _this3 = this;

      var submitting = this.state.submitting;
      var _props2 = this.props,
          deleteAlbum = _props2.deleteAlbum,
          id = _props2.id;


      if (!submitting) {
        this.setState({ submitting: true });
        deleteAlbum({ id: id }).then(function (_ref2) {
          var data = _ref2.data;

          _this3.handleSuccess(data, 'Album successfully deleted');
        }).catch(function (error) {
          _this3.handleError(error);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props3 = this.props,
          id = _props3.id,
          name = _props3.name,
          release_date = _props3.release_date,
          is_deleted = _props3.is_deleted,
          created_at = _props3.created_at,
          created_by = _props3.created_by,
          updated_at = _props3.updated_at,
          updated_by = _props3.updated_by,
          accounts = _props3.accounts,
          tracks = _props3.tracks;
      var submitting = this.state.submitting;

      var isDeleted = is_deleted === 0 ? true : false;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { style: styles.albumTitle },
          name
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSave, id: 'album-' + id + '-update' },
          _react2.default.createElement(
            _partials.Label,
            {
              title: 'Album Name',
              style: Object.assign({}, styles.column, styles.name)
            },
            _react2.default.createElement(_partials.Text, {
              placeholder: 'Album\'s name',
              defaultValue: name,
              ref: function ref(input) {
                return _this4.albumName = input;
              }
            })
          ),
          _react2.default.createElement(
            _partials.Label,
            {
              title: 'Release Date',
              style: Object.assign({}, styles.column, styles.releaseDate)
            },
            _react2.default.createElement(_partials.Text, {
              placeholder: 'Release date',
              defaultValue: release_date,
              ref: function ref(input) {
                return _this4.albumReleaseDate = input;
              }
            })
          ),
          _react2.default.createElement(
            _partials.Label,
            {
              title: 'In?',
              style: Object.assign({}, styles.column, styles.softdelete)
            },
            _react2.default.createElement(_partials.Checkbox, {
              defaultChecked: isDeleted,
              ref: function ref(input) {
                return _this4.albumIsDeleted = input;
              },
              style: styles.softdeleteCheckBox
            })
          ),
          _react2.default.createElement(_partials.Button, {
            value: _react2.default.createElement(_Icon2.default, { icon: 'ei-trash' }),
            onClick: this.handleDelete,
            style: Object.assign({}, styles.column, styles.delete)
          }),
          _react2.default.createElement(_partials.Button, {
            type: 'submit',
            value: submitting ? _react2.default.createElement(_Icon2.default, { icon: 'ei-spinner-3' }) : 'Save',
            disabled: submitting,
            onClick: this.handleSave,
            style: Object.assign({}, styles.column, styles.save),
            title: 'Created ' + created_at + ' by ' + created_by + '.Updated ' + updated_at + ' by ' + updated_by
          })
        ),
        _react2.default.createElement(_Accounts2.default, { defaults: accounts, refType: 'albums', refId: id }),
        _react2.default.createElement(_Tracks2.default, { defaults: tracks, albumId: id })
      );
    }
  }]);

  return AlbumSingle;
}(_react.Component), _class.propTypes = {
  refType: _propTypes2.default.string,
  refId: _propTypes2.default.string,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  release_date: _propTypes2.default.string,
  is_deleted: _propTypes2.default.number,
  created_at: _propTypes2.default.string,
  created_by: _propTypes2.default.string,
  updated_at: _propTypes2.default.string,
  updated_by: _propTypes2.default.string,
  accounts: _propTypes2.default.array,
  tracks: _propTypes2.default.array,
  addNotification: _propTypes2.default.func.isRequired,
  saveAlbum: _propTypes2.default.func.isRequired,
  deleteAlbum: _propTypes2.default.func.isRequired,
  error: _propTypes2.default.object
}, _temp);
exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_albumUpdate2.default, {
  props: function props(_ref3) {
    var ownProps = _ref3.ownProps,
        mutate = _ref3.mutate;
    return {
      saveAlbum: function saveAlbum(args) {
        return mutate({
          variables: _extends({ id: ownProps.id }, args)
        });
      }
    };
  }
}), (0, _reactApollo.graphql)(_albumDelete2.default, {
  props: function props(_ref4) {
    var ownProps = _ref4.ownProps,
        mutate = _ref4.mutate;
    return {
      deleteAlbum: function deleteAlbum(args) {
        return mutate({
          variables: _extends({ id: ownProps.id }, args)
        });
      }
    };
  }
}), (0, _reactRedux.connect)(function (state) {
  return { notifications: state.notifications };
}, function (dispatch) {
  return {
    addNotification: function addNotification(notifObj) {
      dispatch((0, _Notification.addNotif)(notifObj));
    }
  };
}))(AlbumSingle);

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Import globals

// Import components

// Import libraries


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AlbumCreate = __webpack_require__(378);

var _AlbumCreate2 = _interopRequireDefault(_AlbumCreate);

var _AlbumSingle = __webpack_require__(379);

var _AlbumSingle2 = _interopRequireDefault(_AlbumSingle);

var _helpers = __webpack_require__(44);

var _globals = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  sectionTitle: {
    color: _globals.colors.base1,
    fontSize: 17,
    lineHeight: '19px',
    margin: '25px 0 10px 0'
  },
  createNewTitle: {
    color: _globals.colors.base1,
    fontSize: 15,
    lineHeight: '15px',
    margin: '15px 0 10px 0'
  }
};

var AlbumsWrapper = function AlbumsWrapper(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      { style: styles.sectionTitle },
      _helpers.string.toTitleCase(props.title)
    ),
    props.defaults && props.defaults.map(function (album) {
      return _react2.default.createElement(_AlbumSingle2.default, _extends({}, album, {
        key: album.id,
        refType: props.refType,
        refId: props.refId
      }));
    }),
    _react2.default.createElement(
      'h4',
      { style: styles.createNewTitle },
      'Create new album'
    ),
    _react2.default.createElement(_AlbumCreate2.default, { refType: props.refType, refId: props.refId })
  );
};

AlbumsWrapper.propTypes = {
  refType: _propTypes2.default.string,
  refId: _propTypes2.default.string,
  title: _propTypes2.default.string,
  defaults: _propTypes2.default.array
};

exports.default = AlbumsWrapper;

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Artist = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // Import globals

// Import components

// Import libraries

// Import queries

// Import notification


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(63);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactApollo = __webpack_require__(19);

var _reactRouterDom = __webpack_require__(50);

var _reactRedux = __webpack_require__(31);

var _immutabilityHelper = __webpack_require__(1081);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _shared = __webpack_require__(162);

var _partials = __webpack_require__(25);

var _Checkbox = __webpack_require__(69);

var _Accounts = __webpack_require__(159);

var _Accounts2 = _interopRequireDefault(_Accounts);

var _Albums = __webpack_require__(380);

var _Albums2 = _interopRequireDefault(_Albums);

var _helpers = __webpack_require__(44);

var _globals = __webpack_require__(8);

var _artistById = __webpack_require__(1062);

var _artistById2 = _interopRequireDefault(_artistById);

var _artistUpdate = __webpack_require__(1063);

var _artistUpdate2 = _interopRequireDefault(_artistUpdate);

var _Notification = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  pageTitle: {
    color: _globals.colors.base1,
    fontSize: 19,
    lineHeight: '37px',
    margin: 0
  },
  column: {
    display: 'inline-block',
    marginRight: 3,
    verticalAlign: 'bottom'
  },
  name: { width: 'calc(100% - 250px)' },
  type: { width: 135 },
  delete: { width: 40 },
  deleteCheckBox: { width: '100%' },
  save: { width: 60 }
};

var Artist = exports.Artist = (_temp = _class = function (_Component) {
  _inherits(Artist, _Component);

  function Artist(props) {
    _classCallCheck(this, Artist);

    var _this = _possibleConstructorReturn(this, (Artist.__proto__ || Object.getPrototypeOf(Artist)).call(this, props));

    _this.state = { submitting: false };
    _this.handleSave = _this.handleSave.bind(_this);
    return _this;
  }

  _createClass(Artist, [{
    key: 'handleSave',
    value: function handleSave(event) {
      var _this2 = this;

      event.preventDefault();

      var submitting = this.state.submitting;
      var _props = this.props,
          submit = _props.submit,
          addNotification = _props.addNotification,
          response = _props.response;

      var artistName = this.artistName.Input.value;
      var artistType = this.artistType.Input.value;
      var artistIsDeleted = this.artistIsDeleted.Input.checked ? 0 : 1;

      if (!submitting && artistName) {
        this.setState({ submitting: true });

        submit({
          name: artistName,
          type: artistType,
          is_deleted: artistIsDeleted,
          updated_by: _globals.config.CURRENT_USER
        }).then(function (_ref) {
          var data = _ref.data;

          var result = {
            type: 'success',
            title: 'Artist successfully saved',
            data: JSON.stringify(data)
          };
          _this2.setState({ submitting: false });
          addNotification(result);
        }).catch(function (error) {
          var result = {
            type: 'error',
            title: 'An error occured',
            data: JSON.stringify(error)
          };
          _this2.setState({ submitting: false });
          addNotification(result);
        });
      } else {
        this.artistName.Input.value = response.name;
        this.artistType.Input.value = response.type;
        this.artistIsDeleted.Input.checked = response.is_deleted === 1 ? false : true;
        (0, _Checkbox.toggleCheckBoxBg)(this.artistIsDeleted.Input);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          id = _props2.id,
          error = _props2.error,
          response = _props2.response;
      var submitting = this.state.submitting;


      if (error) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/manage/artists/' } });
      }

      if (response) {
        var isDeleted = response.is_deleted === 0 ? true : false;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSave },
            _react2.default.createElement(_reactHelmet2.default, { title: _helpers.string.toTitleCase(response.name) }),
            _react2.default.createElement(
              'h2',
              { style: styles.pageTitle },
              _helpers.string.toTitleCase(response.name)
            ),
            _react2.default.createElement(
              _partials.Label,
              {
                title: 'Name',
                style: Object.assign({}, styles.column, styles.name)
              },
              _react2.default.createElement(_partials.Text, {
                placeholder: 'Name of the artist',
                defaultValue: response.name,
                ref: function ref(input) {
                  return _this3.artistName = input;
                }
              })
            ),
            _react2.default.createElement(
              _partials.Label,
              {
                title: 'Type',
                style: Object.assign({}, styles.column, styles.type)
              },
              _react2.default.createElement(_partials.Select, {
                options: _globals.artistTypes,
                defaultValue: response.type,
                ref: function ref(input) {
                  return _this3.artistType = input;
                }
              })
            ),
            _react2.default.createElement(
              _partials.Label,
              {
                title: 'In?',
                style: Object.assign({}, styles.column, styles.delete)
              },
              _react2.default.createElement(_partials.Checkbox, {
                defaultChecked: isDeleted,
                ref: function ref(input) {
                  return _this3.artistIsDeleted = input;
                },
                style: styles.deleteCheckBox
              })
            ),
            _react2.default.createElement(_partials.Button, {
              type: 'submit',
              value: submitting ? _react2.default.createElement(_shared.Icon, { icon: 'ei-spinner-3' }) : 'Save',
              disabled: submitting,
              onClick: this.handleSave,
              style: Object.assign({}, styles.column, styles.save),
              title: 'Created ' + response.created_at + ' by ' + response.created_by + '.Updated ' + response.updated_at + ' by ' + response.updated_by
            })
          ),
          _react2.default.createElement(_Accounts2.default, { defaults: response.accounts, refType: 'artists', refId: id }),
          _react2.default.createElement(_Albums2.default, {
            title: 'Albums',
            defaults: response.albums,
            refType: 'artists',
            refId: id
          })
        );
      }

      return _react2.default.createElement(_shared.Icon, { icon: 'ei-spinner-3' });
    }
  }]);

  return Artist;
}(_react.Component), _class.propTypes = {
  id: _propTypes2.default.string.isRequired,
  submit: _propTypes2.default.func.isRequired,
  error: _propTypes2.default.object,
  loading: _propTypes2.default.bool,
  response: _propTypes2.default.object,
  addNotification: _propTypes2.default.func.isRequired
}, _temp);
exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_artistById2.default, {
  options: function options(props) {
    return {
      variables: { id: props.id },
      reducer: function reducer(previousResult, action) {
        var nextResult = void 0;
        var opName = action.operationName;

        var findAlbumIndex = function findAlbumIndex(byThis) {
          return previousResult.response.albums.findIndex(function (i) {
            return i.id == byThis;
          });
        };

        if (action.type === 'APOLLO_MUTATION_RESULT' && (opName.includes('Create') || opName.includes('Delete'))) {
          var returningData = action.result.data[opName];

          switch (opName) {
            case 'AlbumCreate':
              nextResult = {
                response: { albums: { $push: [returningData] } }
              };
              break;
            case 'AlbumDelete':
              nextResult = {
                response: {
                  albums: {
                    $splice: [[findAlbumIndex(returningData.id), 1]]
                  }
                }
              };
              break;
            case 'AccountCreate':
              if (returningData.ref_type === 'albums') {
                nextResult = {
                  response: {
                    albums: _defineProperty({}, findAlbumIndex(returningData.ref_id), {
                      accounts: _defineProperty({}, Array.isArray(previousResult.response.albums[findAlbumIndex(returningData.ref_id)].accounts) ? '$push' : '$set', [returningData])
                    })
                  }
                };
              } else if (returningData.ref_type === 'artists') {
                nextResult = {
                  response: { accounts: { $push: [returningData] } }
                };
              }
              break;
            case 'AccountDelete':
              if (returningData.ref_type === 'albums') {
                nextResult = {
                  response: {
                    albums: _defineProperty({}, findAlbumIndex(returningData.ref_id), {
                      accounts: {
                        $splice: [[previousResult.response.albums[[findAlbumIndex(returningData.ref_id)]].accounts.findIndex(function (i) {
                          return i.id == returningData.id;
                        }), 1]]
                      }
                    })
                  }
                };
              } else if (returningData.ref_type === 'artists') {
                nextResult = {
                  response: {
                    accounts: {
                      $splice: [[previousResult.response.accounts.findIndex(function (i) {
                        return i.id == returningData.id;
                      }), 1]]
                    }
                  }
                };
              }
              break;
            case 'TrackCreate':
              nextResult = {
                response: {
                  albums: _defineProperty({}, findAlbumIndex(returningData.album_id), {
                    tracks: _defineProperty({}, Array.isArray(previousResult.response.albums[findAlbumIndex(returningData.album_id)].tracks) ? '$push' : '$set', [returningData])
                  })
                }
              };
              break;
            case 'TrackDelete':
              nextResult = {
                response: {
                  albums: _defineProperty({}, findAlbumIndex(returningData.album_id), {
                    tracks: {
                      $splice: [[previousResult.response.albums[[findAlbumIndex(returningData.album_id)]].tracks.findIndex(function (i) {
                        return i.id == returningData.id;
                      }), 1]]
                    }
                  })
                }
              };
              break;
          }

          return (0, _immutabilityHelper2.default)(previousResult, nextResult);
        }

        return previousResult;
      }
    };
  },
  props: function props(_ref2) {
    var _ref2$data = _ref2.data,
        error = _ref2$data.error,
        loading = _ref2$data.loading,
        response = _ref2$data.response;

    return { error: error, loading: loading, response: response };
  }
}), (0, _reactApollo.graphql)(_artistUpdate2.default, {
  props: function props(_ref3) {
    var ownProps = _ref3.ownProps,
        mutate = _ref3.mutate;
    return {
      submit: function submit(args) {
        return mutate({
          variables: _extends({
            id: ownProps.id
          }, args)
        });
      }
    };
  }
}), (0, _reactRedux.connect)(function (state) {
  return { notifications: state.notifications };
}, function (dispatch) {
  return {
    addNotification: function addNotification(notifObj) {
      dispatch((0, _Notification.addNotif)(notifObj));
    }
  };
}))(Artist);

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // Import globals

// Import components

// Import libraries

// Import queries

// Import notification


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(19);

var _reactRedux = __webpack_require__(31);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _partials = __webpack_require__(25);

var _Checkbox = __webpack_require__(69);

var _globals = __webpack_require__(8);

var _trackCreate = __webpack_require__(1065);

var _trackCreate2 = _interopRequireDefault(_trackCreate);

var _Notification = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  sectionTitle: {
    color: _globals.colors.base1,
    fontSize: 15,
    lineHeight: '17px',
    margin: '25px 0 10px 0'
  },
  column: {
    display: 'inline-block',
    margin: '0 3px 3px 0',
    verticalAlign: 'bottom'
  },
  name: { width: 'calc(100% - 155px)' },
  softDelete: { width: 40 },
  add: { width: 103 }
};

var TrackCreate = (_temp = _class = function (_Component) {
  _inherits(TrackCreate, _Component);

  function TrackCreate(props) {
    _classCallCheck(this, TrackCreate);

    var _this = _possibleConstructorReturn(this, (TrackCreate.__proto__ || Object.getPrototypeOf(TrackCreate)).call(this, props));

    _this.state = { submitting: false };
    _this.handleCreate = _this.handleCreate.bind(_this);
    return _this;
  }

  _createClass(TrackCreate, [{
    key: 'handleSuccess',
    value: function handleSuccess(data) {
      var response = {
        type: 'success',
        title: 'Track successfully created',
        data: JSON.stringify(data)
      };
      this.setState({ submitting: false });
      this.props.addNotification(response);
    }
  }, {
    key: 'handleError',
    value: function handleError(error) {
      var response = {
        type: 'error',
        title: 'An error occured',
        data: JSON.stringify(error)
      };
      this.setState({ submitting: false });
      this.props.addNotification(response);
    }
  }, {
    key: 'handleCreate',
    value: function handleCreate(event) {
      var _this2 = this;

      event.preventDefault();

      var _props = this.props,
          createTrack = _props.createTrack,
          albumId = _props.albumId,
          lastTrackNum = _props.lastTrackNum;

      var trackName = this.trackName.Input.value;
      var trackIsDeleted = this.trackIsDeleted.Input.checked ? 0 : 1;

      if (trackName) {
        this.setState({ submitting: true });
        createTrack({
          name: trackName,
          album_id: albumId,
          track_num: lastTrackNum + 1,
          is_deleted: trackIsDeleted,
          created_by: _globals.config.CURRENT_USER
        }).then(function (_ref) {
          var data = _ref.data;

          _this2.handleSuccess(data);
        }).catch(function (error) {
          _this2.handleError(error);
        });
      }

      document.getElementById('track-create-in-album-' + albumId).reset();
      (0, _Checkbox.toggleCheckBoxBg)(this.trackIsDeleted.Input);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var albumId = this.props.albumId;
      var submitting = this.state.submitting;


      return _react2.default.createElement(
        'form',
        { id: 'track-create-in-album-' + albumId },
        _react2.default.createElement(_partials.Text, {
          placeholder: 'Track name',
          ref: function ref(input) {
            return _this3.trackName = input;
          },
          style: Object.assign({}, styles.column, styles.name)
        }),
        _react2.default.createElement(_partials.Checkbox, {
          ref: function ref(input) {
            return _this3.trackIsDeleted = input;
          },
          style: Object.assign({}, styles.column, styles.softDelete)
        }),
        _react2.default.createElement(_partials.Button, {
          type: 'submit',
          value: submitting ? _react2.default.createElement(_Icon2.default, { icon: 'ei-spinner-3' }) : 'Add',
          disabled: submitting,
          onClick: this.handleCreate,
          style: Object.assign({}, styles.column, styles.add)
        })
      );
    }
  }]);

  return TrackCreate;
}(_react.Component), _class.propTypes = {
  albumId: _propTypes2.default.string,
  lastTrackNum: _propTypes2.default.number,
  addNotification: _propTypes2.default.func.isRequired,
  createTrack: _propTypes2.default.func.isRequired,
  error: _propTypes2.default.object
}, _temp);
exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_trackCreate2.default, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createTrack: function createTrack(args) {
        return mutate({
          variables: _extends({}, args)
        });
      }
    };
  }
}), (0, _reactRedux.connect)(function (state) {
  return { notifications: state.notifications };
}, function (dispatch) {
  return {
    addNotification: function addNotification(notifObj) {
      dispatch((0, _Notification.addNotif)(notifObj));
    }
  };
}))(TrackCreate);

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // Import globals

// Import components

// Import libraries

// Import queries

// Import notification


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(19);

var _reactRedux = __webpack_require__(31);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _partials = __webpack_require__(25);

var _globals = __webpack_require__(8);

var _trackUpdate = __webpack_require__(225);

var _trackUpdate2 = _interopRequireDefault(_trackUpdate);

var _trackDelete = __webpack_require__(1066);

var _trackDelete2 = _interopRequireDefault(_trackDelete);

var _Notification = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  sectionTitle: {
    color: _globals.colors.base1,
    fontSize: 15,
    lineHeight: '17px',
    margin: '25px 0 10px 0'
  },
  column: {
    display: 'inline-block',
    margin: '0 3px 3px 0',
    verticalAlign: 'bottom'
  },
  move: {
    position: 'relative',
    cursor: 'row-resize',
    width: 40,
    height: 37
  },
  moveIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -12,
    marginTop: -12,
    color: _globals.colors.base1
  },
  name: { width: 'calc(100% - 198px)' },
  softDelete: { width: 40 },
  delete: { width: 40 },
  save: { width: 60 }
};

var TrackSingle = (_temp = _class = function (_Component) {
  _inherits(TrackSingle, _Component);

  function TrackSingle(props) {
    _classCallCheck(this, TrackSingle);

    var _this = _possibleConstructorReturn(this, (TrackSingle.__proto__ || Object.getPrototypeOf(TrackSingle)).call(this, props));

    _this.state = { submitting: false };
    _this.handleSave = _this.handleSave.bind(_this);
    _this.handleDelete = _this.handleDelete.bind(_this);
    return _this;
  }

  _createClass(TrackSingle, [{
    key: 'handleSuccess',
    value: function handleSuccess(data, title) {
      var response = {
        type: 'success',
        title: title,
        data: JSON.stringify(data)
      };
      this.props.addNotification(response);
    }
  }, {
    key: 'handleError',
    value: function handleError(error) {
      var response = {
        type: 'error',
        title: 'An error occured',
        data: JSON.stringify(error)
      };
      this.setState({ submitting: false });
      this.props.addNotification(response);
    }
  }, {
    key: 'handleSave',
    value: function handleSave(event) {
      var _this2 = this;

      event.preventDefault();

      var submitting = this.state.submitting;
      var _props = this.props,
          name = _props.name,
          albumId = _props.albumId,
          is_deleted = _props.is_deleted,
          saveTrack = _props.saveTrack;

      var trackName = this.trackName.Input.value;
      var trackIsDeleted = this.trackIsDeleted.Input.checked ? 0 : 1;

      if (!submitting && trackName) {
        this.setState({ submitting: true });
        saveTrack({
          name: trackName,
          album_id: albumId,
          updated_by: _globals.config.CURRENT_USER,
          is_deleted: trackIsDeleted
        }).then(function (_ref) {
          var data = _ref.data;

          _this2.handleSuccess(data, 'Track successfully saved');
          _this2.setState({ submitting: false });
        }).catch(function (error) {
          _this2.handleError(error);
        });
      } else {
        this.trackName.Input.value = name;
        this.trackIsDeleted.Input.value = is_deleted;
      }
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete() {
      var _this3 = this;

      var submitting = this.state.submitting;
      var _props2 = this.props,
          deleteTrack = _props2.deleteTrack,
          id = _props2.id;


      if (!submitting) {
        this.setState({ submitting: true });
        deleteTrack({ id: id }).then(function (_ref2) {
          var data = _ref2.data;

          _this3.handleSuccess(data, 'Track successfully deleted');
        }).catch(function (error) {
          _this3.handleError(error);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props3 = this.props,
          id = _props3.id,
          name = _props3.name,
          created_at = _props3.created_at,
          created_by = _props3.created_by,
          updated_at = _props3.updated_at,
          updated_by = _props3.updated_by,
          is_deleted = _props3.is_deleted,
          albumId = _props3.albumId;
      var submitting = this.state.submitting;

      var isDeleted = is_deleted === 0 ? true : false;

      return _react2.default.createElement(
        'form',
        {
          onSubmit: this.handleSave,
          id: 'track-' + id + '-update-in-album-' + albumId,
          'data-id': id
        },
        _react2.default.createElement(
          'div',
          {
            className: 'handle',
            style: Object.assign({}, styles.column, styles.move)
          },
          _react2.default.createElement(_Icon2.default, { icon: 'ei-navicon', style: styles.moveIcon })
        ),
        _react2.default.createElement(_partials.Text, {
          placeholder: 'Track name',
          defaultValue: name,
          ref: function ref(input) {
            return _this4.trackName = input;
          },
          style: Object.assign({}, styles.column, styles.name)
        }),
        _react2.default.createElement(_partials.Checkbox, {
          defaultChecked: isDeleted,
          ref: function ref(input) {
            return _this4.trackIsDeleted = input;
          },
          style: Object.assign({}, styles.column, styles.softDelete)
        }),
        _react2.default.createElement(_partials.Button, {
          value: _react2.default.createElement(_Icon2.default, { icon: 'ei-trash' }),
          onClick: this.handleDelete,
          style: Object.assign({}, styles.column, styles.delete)
        }),
        _react2.default.createElement(_partials.Button, {
          type: 'submit',
          value: submitting ? _react2.default.createElement(_Icon2.default, { icon: 'ei-spinner-3' }) : 'Save',
          disabled: submitting,
          onClick: this.handleSave,
          style: Object.assign({}, styles.column, styles.save),
          title: 'Created ' + created_at + ' by ' + created_by + '.Updated ' + updated_at + ' by ' + updated_by
        })
      );
    }
  }]);

  return TrackSingle;
}(_react.Component), _class.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  track_num: _propTypes2.default.number,
  albumId: _propTypes2.default.string,
  created_at: _propTypes2.default.string,
  created_by: _propTypes2.default.string,
  updated_at: _propTypes2.default.string,
  updated_by: _propTypes2.default.string,
  is_deleted: _propTypes2.default.number,
  addNotification: _propTypes2.default.func.isRequired,
  saveTrack: _propTypes2.default.func.isRequired,
  deleteTrack: _propTypes2.default.func.isRequired,
  error: _propTypes2.default.object
}, _temp);
exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_trackUpdate2.default, {
  props: function props(_ref3) {
    var ownProps = _ref3.ownProps,
        mutate = _ref3.mutate;
    return {
      saveTrack: function saveTrack(args) {
        return mutate({
          variables: _extends({ id: ownProps.id }, args)
        });
      }
    };
  }
}), (0, _reactApollo.graphql)(_trackDelete2.default, {
  props: function props(_ref4) {
    var ownProps = _ref4.ownProps,
        mutate = _ref4.mutate;
    return {
      deleteTrack: function deleteTrack(args) {
        return mutate({
          variables: _extends({ id: ownProps.id }, args)
        });
      }
    };
  }
}), (0, _reactRedux.connect)(function (state) {
  return { notifications: state.notifications };
}, function (dispatch) {
  return {
    addNotification: function addNotification(notifObj) {
      dispatch((0, _Notification.addNotif)(notifObj));
    }
  };
}))(TrackSingle);

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2; // Import globals

// Import components

// Import queries

// Import libraries


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(19);

var _reactDragula = __webpack_require__(1235);

var _reactDragula2 = _interopRequireDefault(_reactDragula);

__webpack_require__(1294);

var _partials = __webpack_require__(25);

var _TrackCreate = __webpack_require__(382);

var _TrackCreate2 = _interopRequireDefault(_TrackCreate);

var _TrackSingle = __webpack_require__(383);

var _TrackSingle2 = _interopRequireDefault(_TrackSingle);

var _trackUpdate = __webpack_require__(225);

var _trackUpdate2 = _interopRequireDefault(_trackUpdate);

var _helpers = __webpack_require__(44);

var _globals = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  sectionTitle: {
    color: _globals.colors.base1,
    fontSize: 15,
    lineHeight: '17px',
    margin: '25px 0 10px 0'
  },
  column: {
    display: 'inline-block',
    margin: '0 3px 3px 0',
    verticalAlign: 'bottom'
  },
  order: { width: 40 },
  name: { width: 'calc(100% - 198px)' },
  delete: { width: 40 }
};

var TracksWrapper = (_temp2 = _class = function (_Component) {
  _inherits(TracksWrapper, _Component);

  function TracksWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TracksWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TracksWrapper.__proto__ || Object.getPrototypeOf(TracksWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.dragulaDecorator = function (componentBackingInstance) {
      if (componentBackingInstance) {
        var drake = (0, _reactDragula2.default)([componentBackingInstance], {
          moves: function moves(el, container, handle) {
            return handle.classList.contains('handle') || handle.tagName == 'svg' || handle.tagName == 'use';
          }
        });
        drake.on('drop', function () {
          var children = [].concat(_toConsumableArray(drake.containers[0].childNodes));
          var newOrder = children.map(function (el) {
            return el.dataset.id;
          });
          newOrder.map(function (val, i) {
            console.log(val, i);
          });

          /*
              
            saveTrack({
              name: trackName,
              album_id: albumId,
              updated_by: config.CURRENT_USER,
              is_deleted: trackIsDeleted
            })
              .then(({ data }) => {
                this.handleSuccess(data, 'Track successfully saved');
                this.setState({ submitting: false });
              })
              .catch(error => {
                this.handleError(error);
              });
             */
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TracksWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        this.props.title && _react2.default.createElement(
          'h3',
          { style: styles.sectionTitle },
          _helpers.string.toTitleCase(this.props.title)
        ),
        _react2.default.createElement(_partials.Label, {
          title: 'Order',
          style: Object.assign({}, styles.column, styles.order)
        }),
        _react2.default.createElement(_partials.Label, {
          title: 'Track Name',
          style: Object.assign({}, styles.column, styles.name)
        }),
        _react2.default.createElement(_partials.Label, {
          title: 'In?',
          style: Object.assign({}, styles.column, styles.delete)
        }),
        this.props.defaults && _react2.default.createElement(
          'div',
          { className: 'container', ref: this.dragulaDecorator },
          this.props.defaults.map(function (track) {
            return _react2.default.createElement(_TrackSingle2.default, _extends({}, track, {
              key: track.id,
              albumId: _this2.props.albumId
            }));
          })
        ),
        _react2.default.createElement(_TrackCreate2.default, {
          albumId: this.props.albumId,
          lastTrackNum: this.props.defaults.length
        })
      );
    }
  }]);

  return TracksWrapper;
}(_react.Component), _class.propTypes = {
  albumId: _propTypes2.default.string,
  title: _propTypes2.default.string,
  defaults: _propTypes2.default.array,
  saveTrack: _propTypes2.default.func.isRequired
}, _temp2);
exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_trackUpdate2.default, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      saveTrack: function saveTrack(args) {
        return mutate({
          variables: _extends({ id: ownProps.id }, args)
        });
      }
    };
  }
}))(TracksWrapper);

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(12);

var _radium2 = _interopRequireDefault(_radium);

var _globals = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import globals
var styles = {
  title: {
    display: 'block',
    marginBottom: 5,
    marginTop: 10,
    fontSize: 11,
    textTransform: 'uppercase',
    color: _globals.colors.base1
  }
};

// Import libraries


var Label = function Label(props) {
  return _react2.default.createElement(
    'label',
    { style: props.style && props.style },
    _react2.default.createElement(
      'span',
      { style: styles.title },
      props.title
    ),
    props.children
  );
};

Label.propTypes = {
  title: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.element,
  style: _propTypes2.default.object
};

exports.default = (0, _radium2.default)(Label);

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; // Import globals


// Import libraries


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(12);

var _radium2 = _interopRequireDefault(_radium);

var _globals = __webpack_require__(8);

var _helpers = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  base: {
    WebkitAppearance: 'inherit',
    backgroundColor: _globals.colors.base6,
    backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA+dJREFUeJzt3FmolVUYxvHnf5yHzLIEI0GhAwkplEQSDVBeiCAFFYFB1EXYRVRQFNFAQoQXEUUjFEU0UTRgFIIgRUUYoYSQQYKCgpAkWeY8ddEnrAMmDnuftc/+/r/Lw9lrPet91znfHta3E0mSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJElSC5FkXu0QI8Dc2gG6YRD4DjiW5KHaYXoUwHLgGLAyybTagTppIrC6WdyxJI/XDtRjAFYcrw/wSpKB2qE6bTzwZbHI5fnvstB2AC8WdXk+fVyXscBnxWJXpI8XewoGgNeLejybFtRjDPBhsegX0oJFn8Ao4O3isvhUWlSHUcA7xSZ4NX14zTuJMcAHRfMfrR2ohgHgjWITvJlkVO1Qw2As8GnR/AdqB6ppAHip2ATvJhldO1QXDXkinOTe2oF6AcBzxSb4KMmY2qG6oHwpfDTJ3bUD9RKAZ4pN8HmScbVDddBk4JtmbYeTLK0dqFc9WWyCr5KMrx2oA84FfmjWdCjJrbUD9bpHik2wOsnE2oHOwvnAT81aDiRZUjvQSHF/sQm+TjK5dqAzcCHwc7OGfUkW1Q400iwrNsH3SabUDnQaZgC/NNn3JLmxdqCR6i7gaFPIH5OcVzvQKbgY+K3JvDvJtbUDjXRLgcNNQdcnuaB2oJOYBWxusu5KsqB2oH5xC3CoKeyGJNNrBzqBQWBrk3Fnkvm1A/WbJcCBpsC/JrmodqDCHGB7k21HPPnUNYuAfU2hNyWZWTtQknnAjibT9iRzagfqdzcAe5qCb04yq2KW+cDOJsu2JIMVs7TKNcDfTeG3JrmkQoYFwK4mw5YksytkaLWrigZsT3LpMM59HbC7xy5FrXRF8S/49ySXDcOcC4G9zZwbk8wYhjl1EnOLJ2F/JLm8i3MtBvb3+MvRVipfhv2Z5MouzHEzcLCZY1367Nx+PxgEtjUN+ivJ1R0c+/bi3ci1SaZ2cGx10GxgS9Oof5Jc34Ex7wSONGN+m+ScDoypLpoJbGoatjfJwrMY657iw6g1SSZ1KKO6bAawsWnc/iSLz2CM+4qPo1clmdDhjOqy6cCGpoEHk9x0Go99uGj+yvTX+cRWmQasK87j3XYKj3miaP7H6c8Tyq0yFVjbNPRIkjv+5/dg6Mnk99Lf9yi0yhSa7yfgxGfyYei9CW+lHXcptcokYM3xJidZ1vx8AHi5aP5radd9iq0yAVhVbIIHGXp/YlvvVG6VccAXRdP9roIWGgt8UjT/6dj81hkNvJ/ksdpBVI9/9ZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSRp+/wJPMulcOghsLAAAAABJRU5ErkJggg==")',
    backgroundPosition: '93%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 20,
    border: 0,
    borderRadius: 0,
    color: _globals.colors.base1,
    fontFamily: 'monospace',
    fontSize: 12,
    height: 37,
    outline: 0,
    padding: '5px 35px 5px 10px',
    verticalAlign: 'middle',
    width: '100%'
  }
};

var Select = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var options = this.props.options.map(function (val) {
        return _react2.default.createElement(
          'option',
          { value: val, key: val },
          _helpers.string.toTitleCase(val)
        );
      });

      return _react2.default.createElement(
        'select',
        {
          name: this.props.name,
          defaultValue: this.props.defaultValue ? this.props.defaultValue : undefined,
          style: [styles.base, this.props.style && this.props.style],
          onChange: this.props.onChange,
          ref: function ref(input) {
            return _this2.Input = input;
          }
        },
        this.props.baseOption && _react2.default.createElement(
          'option',
          { value: this.props.baseValue && this.props.baseValue },
          this.props.baseOption
        ),
        options
      );
    }
  }]);

  return Select;
}(_react.Component), _class2.propTypes = {
  baseOption: _propTypes2.default.string,
  baseValue: _propTypes2.default.string,
  name: _propTypes2.default.string,
  options: _propTypes2.default.array,
  defaultValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  style: _propTypes2.default.object
}, _class2.defaultProps = {
  baseOption: '-- Select --',
  baseValue: ''
}, _temp)) || _class;

exports.default = Select;

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; // Import globals


// Import libraries


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(12);

var _radium2 = _interopRequireDefault(_radium);

var _globals = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  base: {
    backgroundColor: _globals.colors.base6,
    border: 0,
    color: _globals.colors.base1,
    display: 'block',
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: '17px',
    outline: 0,
    padding: 10,
    width: '100%'
  }
};

var Text = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Text, _Component);

  function Text(props) {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('input', {
        type: 'text',
        name: this.props.name,
        defaultValue: this.props.defaultValue,
        placeholder: this.props.placeholder,
        style: [styles.base, this.props.style && this.props.style],
        onChange: this.props.onChange,
        ref: function ref(input) {
          return _this2.Input = input;
        }
      });
    }
  }]);

  return Text;
}(_react.Component), _class2.propTypes = {
  name: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  style: _propTypes2.default.object
}, _temp)) || _class;

exports.default = Text;

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(63);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _radium = __webpack_require__(12);

var _radium2 = _interopRequireDefault(_radium);

var _queryString = __webpack_require__(1143);

var _queryString2 = _interopRequireDefault(_queryString);

var _reactApollo = __webpack_require__(19);

var _reactRouterDom = __webpack_require__(50);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = __webpack_require__(160);

var _Button2 = _interopRequireDefault(_Button);

var _globals = __webpack_require__(8);

var _helpers = __webpack_require__(44);

var _artistsPaged = __webpack_require__(1064);

var _artistsPaged2 = _interopRequireDefault(_artistsPaged);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = (0, _radium2.default)(_reactRouterDom.Link);
// Import components
// Import globals

// Import libraries

// Import queries


// Styles of the list view
var styles = {
  header: {
    marginBottom: 20
  },
  pageTitle: {
    color: _globals.colors.base1,
    float: 'left',
    fontSize: 19,
    lineHeight: '37px',
    margin: 0
  },
  pagination: {
    float: 'right'
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  column: {
    display: 'inline-block',
    fontSize: 15,
    lineHeight: '17px',
    padding: 5,
    verticalAlign: 'top'
  },
  columnId: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    fontSize: 11,
    opacity: 0.5,
    textAlign: 'right',
    width: 50
  },
  columnName: {
    fontWeight: 700,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: 'calc(100% - 60px)'
  },
  listLink: {
    color: _globals.colors.base1,
    display: 'block',
    ':hover': {
      backgroundColor: _globals.colors.base2
    }
  },
  nothingFound: {
    fontSize: 15,
    lineHeight: '17px',
    color: _globals.colors.base1
  },
  cf: {
    clear: 'both',
    content: '',
    display: 'block'
  }
};

var ListWrapper = function ListWrapper(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: _helpers.string.toTitleCase(props.type) }),
    _react2.default.createElement(Header, props),
    _react2.default.createElement(
      'div',
      null,
      props.loading ? _react2.default.createElement(_Icon2.default, { icon: 'ei-spinner-3' }) : props.pageInfo.rowCount > 0 ? _react2.default.createElement(List, props) : _react2.default.createElement(
        'p',
        { style: styles.nothingFound },
        'Nothing found'
      )
    )
  );
};

var Header = function Header(props) {
  return _react2.default.createElement(
    'div',
    { style: styles.header },
    _react2.default.createElement(
      'h2',
      { style: styles.pageTitle },
      _helpers.string.toTitleCase(props.type),
      ' ',
      !props.loading && props.pageInfo.rowCount > 0 && _react2.default.createElement(
        'span',
        null,
        '(',
        props.pageInfo.rowCount,
        ')'
      )
    ),
    !props.loading && props.pageInfo.pageCount > 1 && _react2.default.createElement(Pagination, props),
    _react2.default.createElement('div', { style: styles.cf })
  );
};

var Pagination = function Pagination(props) {
  return _react2.default.createElement(
    'div',
    { style: styles.pagination },
    _react2.default.createElement(_Button2.default, {
      name: 'pagePrev',
      value: _react2.default.createElement(_Icon2.default, { icon: 'ei-chevron-left' }),
      onClick: function onClick() {
        return props.loadPage(props.pageInfo.page - 1);
      }
    }),
    props.pageInfo.page,
    ' / ',
    props.pageInfo.pageCount,
    _react2.default.createElement(_Button2.default, {
      name: 'pageNext',
      value: _react2.default.createElement(_Icon2.default, { icon: 'ei-chevron-right' }),
      onClick: function onClick() {
        return props.loadPage(props.pageInfo.page + 1);
      }
    })
  );
};

var List = function List(props) {
  return _react2.default.createElement(
    'ul',
    { style: styles.list },
    props.artists.map(function (listItem) {
      return _react2.default.createElement(
        'li',
        { key: listItem.id },
        _react2.default.createElement(
          Link,
          {
            style: styles.listLink,
            to: {
              pathname: '/manage/' + props.type + '/' + listItem.id
            }
          },
          _react2.default.createElement(
            'div',
            { style: [styles.column, styles.columnId] },
            listItem.id
          ),
          listItem.name && _react2.default.createElement(
            'div',
            { style: [styles.column, styles.columnName] },
            listItem.name
          )
        )
      );
    })
  );
};

Header.propTypes = List.propTypes = Pagination.propTypes = ListWrapper.propTypes = {
  type: _propTypes2.default.oneOf(['artists', 'albums']).isRequired,
  filter: _propTypes2.default.string,
  error: _propTypes2.default.object,
  loading: _propTypes2.default.bool,
  pageInfo: _propTypes2.default.object,
  artists: _propTypes2.default.array,
  loadPage: _propTypes2.default.func
};

// Wrap with higher order functions using Apollo's compose
// see http://dev.apollodata.com/react/api.html#compose
exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_artistsPaged2.default, {
  skip: function skip(props) {
    return props.type !== 'artists';
  },
  options: function options(props) {
    var isDeleted = parseInt(_queryString2.default.parse(props.filter).isDeleted);

    return {
      variables: {
        query: { isDeleted: isDeleted },
        pageSize: _globals.config.ITEMS_PER_PAGE
      },
      fetchPolicy: 'cache-and-network'
    };
  },
  props: function props(_ref) {
    var _ref$data = _ref.data,
        error = _ref$data.error,
        loading = _ref$data.loading,
        _ref$data$response = _ref$data.response;
    _ref$data$response = _ref$data$response === undefined ? {} : _ref$data$response;
    var pageInfo = _ref$data$response.pageInfo,
        artists = _ref$data$response.artists,
        fetchMore = _ref$data.fetchMore;

    return {
      error: error,
      loading: loading,
      pageInfo: pageInfo,
      artists: artists,
      loadPage: function loadPage(page) {
        if (page > 0 && page <= pageInfo.pageCount) {
          return fetchMore({
            variables: {
              page: page
            },
            updateQuery: function updateQuery(previousResult, _ref2) {
              var fetchMoreResult = _ref2.fetchMoreResult;

              return {
                response: {
                  pageInfo: fetchMoreResult.response.pageInfo,
                  artists: fetchMoreResult.response.artists
                }
              };
            }
          });
        }
      }
    };
  }
}), (0, _radium2.default)())(ListWrapper);

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _radium = __webpack_require__(12);

var _radium2 = _interopRequireDefault(_radium);

var _globals = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  copyright: {
    color: _globals.colors.base5,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 'x-small'
  }
};

// Import libraries
// Import globals


var Footer = function Footer() {
  return _react2.default.createElement(
    'footer',
    null,
    _react2.default.createElement(
      'p',
      { style: styles.copyright },
      '\xA92017 Rolakosta'
    )
  );
};

exports.default = (0, _radium2.default)(Footer);

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(63);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _radium = __webpack_require__(12);

var _radium2 = _interopRequireDefault(_radium);

var _postcssJs = __webpack_require__(1127);

var _postcssJs2 = _interopRequireDefault(_postcssJs);

var _autoprefixer = __webpack_require__(317);

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _globals = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import globals
var prefixer = _postcssJs2.default.sync([_autoprefixer2.default]);

// Import libraries


var styles = prefixer({
  '*': { boxSizing: 'border-box' },
  body: {
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: _globals.colors.base1,
    fontFamily: '"Open Sans",sans-serif',
    fontSize: '100%',
    fontSmoothing: 'antialiased',
    padding: 30
  }
});

var Head = function Head() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_radium.Style, { rules: styles }),
    _react2.default.createElement(_reactHelmet2.default, {
      htmlAttributes: { lang: 'en' },
      title: 'Dashboard',
      titleTemplate: '%s | RMP Admin',
      link: [{
        rel: 'style',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&amp;subset=latin-ext'
      }]
    })
  );
};

exports.default = (0, _radium2.default)(Head);

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radium = __webpack_require__(12);

var _radium2 = _interopRequireDefault(_radium);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(50);

var _globals = __webpack_require__(8);

var _Navigation = __webpack_require__(161);

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = (0, _radium2.default)(_reactRouterDom.Link); //https://github.com/FormidableLabs/radium/issues/398

// Import libraries
// Import globals


// Import components


var headingStyles = {
  wrapper: {
    backgroundColor: _globals.colors.base2,
    color: _globals.colors.base1,
    padding: 20,
    textAlign: 'center'
  },
  title: {
    fontSize: 25,
    lineHeight: '100%',
    margin: '0 0 3px 0'
  },
  titleLink: {
    color: _globals.colors.base1,
    textDecoration: 'none',
    ':hover': {
      color: _globals.colors.bas3
    }
  },
  subtitle: {
    fontSize: 13,
    fontStyle: 'italic',
    margin: 0,
    opacity: 0.5
  }
};

var Header = function Header() {
  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      'div',
      { style: headingStyles.wrapper },
      _react2.default.createElement(
        'h1',
        { style: headingStyles.title },
        _react2.default.createElement(
          Link,
          { to: '/', style: headingStyles.titleLink },
          'Rola Music Project'
        )
      ),
      _react2.default.createElement(
        'p',
        { style: headingStyles.subtitle },
        'Crawler & Manager'
      )
    ),
    _react2.default.createElement(_Navigation2.default, null)
  );
};

exports.default = (0, _radium2.default)(Header);

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = {};

string.toTitleCase = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

exports.string = string;

/***/ }),

/***/ 46:
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"uuid"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"ref_id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"ref_type"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"created_at"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"created_by"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"updated_at"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"updated_by"},"arguments":[],"directives":[],"selectionSet":null}]}}],"loc":{"start":0,"end":129}};
    doc.loc.source = {"body":"fragment AccountFields on Account {\n  id\n  uuid\n  name\n  ref_id\n  ref_type\n  created_at\n  created_by\n  updated_at\n  updated_by\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  
module.exports = doc;

/***/ }),

/***/ 57:
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TrackFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Track"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"track_num"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"is_deleted"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"created_at"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"created_by"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"updated_at"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"updated_by"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"album_id"},"arguments":[],"directives":[],"selectionSet":null}]}}],"loc":{"start":0,"end":134}};
    doc.loc.source = {"body":"fragment TrackFields on Track {\n  id\n  name\n  track_num\n  is_deleted\n  created_at\n  created_by\n  updated_at\n  updated_by\n  album_id\n}\n","name":"GraphQL"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  
module.exports = doc;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleCheckBoxBg = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; // Import globals


// Import libraries


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(12);

var _radium2 = _interopRequireDefault(_radium);

var _globals = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  base: {
    WebkitAppearance: 'none',
    backgroundColor: _globals.colors.base6,
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    color: _globals.colors.base1,
    display: 'block',
    height: 37,
    margin: 0,
    outline: 0,
    position: 'relative',
    width: 37,
    cursor: 'pointer'
  },
  checked: {
    backgroundColor: _globals.colors.base7
  }
};

var toggleCheckBoxBg = exports.toggleCheckBoxBg = function toggleCheckBoxBg(checkbox) {
  checkbox.style.backgroundColor = checkbox.checked ? _globals.colors.base7 : _globals.colors.base6;
};

var Checkbox = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'handleChange',
    value: function handleChange(event) {
      if (this.props.onChange) this.props.onChange();
      toggleCheckBoxBg(event.target);
      event.target.defaultChecked = !event.target.checked;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('input', {
        type: 'checkbox',
        name: this.props.name,
        style: [styles.base, this.props.style && this.props.style, this.props.defaultChecked && styles.checked],
        defaultChecked: this.props.defaultChecked,
        onChange: this.handleChange,
        ref: function ref(input) {
          return _this2.Input = input;
        }
      });
    }
  }]);

  return Checkbox;
}(_react.Component), _class2.propTypes = {
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  defaultChecked: _propTypes2.default.bool,
  style: _propTypes2.default.object
}, _temp)) || _class;

exports.default = Checkbox;

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AD.js": 781,
	"./AE.js": 782,
	"./AF.js": 783,
	"./AG.js": 784,
	"./AI.js": 785,
	"./AL.js": 786,
	"./AM.js": 787,
	"./AN.js": 788,
	"./AO.js": 789,
	"./AR.js": 790,
	"./AS.js": 791,
	"./AT.js": 792,
	"./AU.js": 793,
	"./AW.js": 794,
	"./AX.js": 795,
	"./AZ.js": 796,
	"./BA.js": 797,
	"./BB.js": 798,
	"./BD.js": 799,
	"./BE.js": 800,
	"./BF.js": 801,
	"./BG.js": 802,
	"./BH.js": 803,
	"./BI.js": 804,
	"./BJ.js": 805,
	"./BM.js": 806,
	"./BN.js": 807,
	"./BO.js": 808,
	"./BR.js": 809,
	"./BS.js": 810,
	"./BT.js": 811,
	"./BW.js": 812,
	"./BY.js": 813,
	"./BZ.js": 814,
	"./CA.js": 815,
	"./CD.js": 816,
	"./CF.js": 817,
	"./CG.js": 818,
	"./CH.js": 819,
	"./CI.js": 820,
	"./CK.js": 821,
	"./CL.js": 822,
	"./CM.js": 823,
	"./CN.js": 824,
	"./CO.js": 825,
	"./CR.js": 826,
	"./CU.js": 827,
	"./CV.js": 828,
	"./CX.js": 829,
	"./CY.js": 830,
	"./CZ.js": 831,
	"./DE.js": 832,
	"./DJ.js": 833,
	"./DK.js": 834,
	"./DM.js": 835,
	"./DO.js": 836,
	"./DZ.js": 837,
	"./EC.js": 838,
	"./EE.js": 839,
	"./EG.js": 840,
	"./ER.js": 841,
	"./ES.js": 842,
	"./ET.js": 843,
	"./FI.js": 844,
	"./FJ.js": 845,
	"./FK.js": 846,
	"./FM.js": 847,
	"./FO.js": 848,
	"./FR.js": 849,
	"./GA.js": 850,
	"./GB.js": 851,
	"./GD.js": 852,
	"./GE.js": 853,
	"./GF.js": 854,
	"./GG.js": 855,
	"./GH.js": 856,
	"./GI.js": 857,
	"./GL.js": 858,
	"./GM.js": 859,
	"./GN.js": 860,
	"./GP.js": 861,
	"./GQ.js": 862,
	"./GR.js": 863,
	"./GT.js": 864,
	"./GU.js": 865,
	"./GW.js": 866,
	"./GY.js": 867,
	"./HK.js": 868,
	"./HN.js": 869,
	"./HR.js": 870,
	"./HT.js": 871,
	"./HU.js": 872,
	"./ID.js": 873,
	"./IE.js": 874,
	"./IL.js": 875,
	"./IM.js": 876,
	"./IN.js": 877,
	"./IQ.js": 878,
	"./IR.js": 879,
	"./IS.js": 880,
	"./IT.js": 881,
	"./JE.js": 882,
	"./JM.js": 883,
	"./JO.js": 884,
	"./JP.js": 885,
	"./KE.js": 886,
	"./KG.js": 887,
	"./KH.js": 888,
	"./KI.js": 889,
	"./KM.js": 890,
	"./KN.js": 891,
	"./KP.js": 892,
	"./KR.js": 893,
	"./KW.js": 894,
	"./KY.js": 895,
	"./KZ.js": 896,
	"./LA.js": 897,
	"./LB.js": 898,
	"./LC.js": 899,
	"./LI.js": 900,
	"./LK.js": 901,
	"./LR.js": 902,
	"./LS.js": 903,
	"./LT.js": 904,
	"./LU.js": 905,
	"./LV.js": 906,
	"./LY.js": 907,
	"./MA.js": 908,
	"./MC.js": 909,
	"./MD.js": 910,
	"./ME.js": 911,
	"./MG.js": 912,
	"./MH.js": 913,
	"./MK.js": 914,
	"./ML.js": 915,
	"./MM.js": 916,
	"./MN.js": 917,
	"./MO.js": 918,
	"./MP.js": 919,
	"./MQ.js": 920,
	"./MR.js": 921,
	"./MS.js": 922,
	"./MT.js": 923,
	"./MU.js": 924,
	"./MV.js": 925,
	"./MW.js": 926,
	"./MX.js": 927,
	"./MY.js": 928,
	"./MZ.js": 929,
	"./NA.js": 930,
	"./NC.js": 931,
	"./NE.js": 932,
	"./NF.js": 933,
	"./NG.js": 934,
	"./NI.js": 935,
	"./NL.js": 936,
	"./NO.js": 937,
	"./NP.js": 938,
	"./NR.js": 939,
	"./NU.js": 940,
	"./NZ.js": 941,
	"./OM.js": 942,
	"./PA.js": 943,
	"./PE.js": 944,
	"./PF.js": 945,
	"./PG.js": 946,
	"./PH.js": 947,
	"./PK.js": 948,
	"./PL.js": 949,
	"./PM.js": 950,
	"./PN.js": 951,
	"./PR.js": 952,
	"./PS.js": 953,
	"./PT.js": 954,
	"./PW.js": 955,
	"./PY.js": 956,
	"./QA.js": 957,
	"./RE.js": 958,
	"./RO.js": 959,
	"./RS.js": 960,
	"./RU.js": 961,
	"./RW.js": 962,
	"./SA.js": 963,
	"./SB.js": 964,
	"./SC.js": 965,
	"./SD.js": 966,
	"./SE.js": 967,
	"./SG.js": 968,
	"./SH.js": 969,
	"./SI.js": 970,
	"./SK.js": 971,
	"./SL.js": 972,
	"./SM.js": 973,
	"./SN.js": 974,
	"./SO.js": 975,
	"./SR.js": 976,
	"./ST.js": 977,
	"./SV.js": 978,
	"./SY.js": 979,
	"./SZ.js": 980,
	"./TC.js": 981,
	"./TD.js": 982,
	"./TG.js": 983,
	"./TH.js": 984,
	"./TJ.js": 985,
	"./TK.js": 986,
	"./TL.js": 987,
	"./TM.js": 988,
	"./TN.js": 989,
	"./TO.js": 990,
	"./TR.js": 991,
	"./TT.js": 992,
	"./TV.js": 993,
	"./TW.js": 994,
	"./TZ.js": 995,
	"./UA.js": 996,
	"./UG.js": 997,
	"./US.js": 998,
	"./UY.js": 999,
	"./UZ.js": 1000,
	"./VA.js": 1001,
	"./VC.js": 1002,
	"./VE.js": 1003,
	"./VG.js": 1004,
	"./VI.js": 1005,
	"./VN.js": 1006,
	"./VU.js": 1007,
	"./WF.js": 1008,
	"./WS.js": 1009,
	"./YE.js": 1010,
	"./YT.js": 1011,
	"./ZA.js": 1012,
	"./ZM.js": 1013,
	"./ZW.js": 1014,
	"./alt-af.js": 1015,
	"./alt-an.js": 1016,
	"./alt-as.js": 1017,
	"./alt-eu.js": 1018,
	"./alt-na.js": 1019,
	"./alt-oc.js": 1020,
	"./alt-sa.js": 1021,
	"./alt-ww.js": 1022
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 780;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  ITEMS_PER_PAGE: 20,
  CURRENT_USER: 'admin',
  CONSOLELOG_ACTIONS: false
};

var colors = {
  base1: '#002b36',
  base2: '#839496',
  base3: '#073642',
  base4: '#93a1a1',
  base5: '#657b83',
  base6: '#fdf6e3',
  base7: '#b9c567',
  base8: '#3b420a',
  base9: '#a9b55b',
  base10: '#9a3b3b'
};

var artistTypes = ['person', 'group', 'orchestra', 'choir', 'character', 'other'];

var accountNames = ['bandcamp', 'facebook', 'instagram', 'mixcloud', 'musicbrainz', 'songkick', 'soundcloud', 'spotify', 'twitter', 'wikipedia', 'youtube'];

var mediaTypes = ['text', 'image', 'audio', 'video'];

var mediaCategories = ['album cover', 'about', 'bio', 'credits', 'profile photo', 'track'];

var navStructure = [{
  name: 'Manage',
  path: '/manage',
  items: [{
    name: 'Artists',
    items: [{
      name: 'All Artists',
      path: '/manage/artists'
    }, {
      name: 'Selected Artists',
      path: '/manage/artists?isDeleted=0'
    }, {
      name: 'Not Selected Artists',
      path: '/manage/artists?isDeleted=1'
    }, {
      name: 'Deleted Artists',
      path: '/manage/artists?isDeleted=2'
    }]
  }]
}, {
  name: 'Crawl',
  path: '/crawl',
  items: [{
    name: 'Bandcamp',
    items: [{
      name: 'Crawl tag pages',
      path: '/crawl/bandcamp/tag-pages'
    }]
  }]
}];

exports.config = config;
exports.navStructure = navStructure;
exports.colors = colors;
exports.artistTypes = artistTypes;
exports.accountNames = accountNames;
exports.mediaTypes = mediaTypes;
exports.mediaCategories = mediaCategories;

/***/ })

},[375]);