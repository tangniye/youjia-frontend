/**
 * Created by tangniye on 17/4/6.
 */
(function () {
  'use strict';

  /** @ngInject */
  function reTableCtrl($scope, $attrs, $parse, $filter) {
    var propertyName = $attrs.reTable;
    var displayGetter = $parse(propertyName);
    var displaySetter = displayGetter.assign;
    var safeGetter;
    var orderBy = $filter('orderBy');
    var filter = $filter('filter');
    var tableState = {
      sort: {},
      search: {},
      pagination: {
        page: 1,
        page_size: 20,
        start: 0,
        totalItemCount: 0
      }
    };
    var filtered;
    var pipeAfterSafeCopy = true;
    var ctrl = this;
    var lastSelected;

    var checkedIds = [];


    /**
     * sort the rows
     * @param {Function | String} predicate - function or string which will be used as predicate for the sorting
     * @param [reverse] - if you want to reverse the order
     */
    this.sortBy = function sortBy(predicate, reverse) {
      tableState.sort.predicate = predicate;
      tableState.sort.reverse = reverse === true;

      tableState.pagination.page = 1;

      // return this.pipe();
    };

    /**
     * search matching rows
     * @param {String} input - the input string
     * @param {String} [predicate] - the property name against you want to check the match, otherwise it will search on all properties
     */
    this.search = function search(input, predicate) {
      var predicateObject = tableState.search.predicateObject || {};
      var prop = predicate ? predicate : '$';

      input = ng.isString(input) ? input.trim() : input;
      $parse(prop).assign(predicateObject, input);
      // to avoid to filter out null value
      if (!input) {
        deepDelete(predicateObject, prop);
      }
      tableState.search.predicateObject = predicateObject;
      tableState.pagination.start = 0;
      return this.pipe();
    };

    /**
     * this will chain the operations of sorting and filtering based on the current table state (sort options, filtering, ect)
     */
    this.pipe = function pipe() {
      var pagination = tableState.pagination;
      var output;
      // filtered = tableState.search.predicateObject ? filter(safeCopy, tableState.search.predicateObject) : safeCopy;
      if (tableState.sort.predicate) {
        filtered = orderBy(filtered, tableState.sort.predicate, tableState.sort.reverse);
        console.log(filtered)
        debugger;
      }
      pagination.totalItemCount = filtered.length;
      if (pagination.number !== undefined) {
        pagination.numberOfPages = filtered.length > 0 ? Math.ceil(filtered.length / pagination.number) : 1;
        pagination.start = pagination.start >= filtered.length ? (pagination.numberOfPages - 1) * pagination.number : pagination.start;
        output = filtered.slice(pagination.start, pagination.start + parseInt(pagination.number));
      }
      displaySetter($scope, output || filtered);
    };

    this.toggleItem = function toggleItem(id) {
      var idx = checkedIds.indexOf(id);
      if (idx > -1) {
        checkedIds.splice(idx, 1);
      }
      else {
        checkedIds.push(id);
      }
    };

    this.toggleAll = function (ids) {
      checkedIds = ids;
      console.log(checkedIds)
    };

    /**
     * return the current state of the table
     * @returns {{sort: {}, search: {}, pagination: {start: number}}}
     */
    this.tableState = function getTableState() {
      return tableState;
    };

    /**
     * return the current checkedIds ids array
     * @returns {{sort: {}, search: {}, pagination: {start: number}}}
     */
    this.checkedIds = function getCheckedIds() {
      return checkedIds;
    }

  }

  angular.module('app').controller('reTableCtrl', reTableCtrl);
})();
