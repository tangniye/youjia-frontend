/**
 * Created by tangniye on 17/4/6.
 */
(function () {
  'use strict';

  /** @ngInject */
  function reTableCtrl($scope) {

    var vm = $scope;
    var tableState = vm.tableState;
    var lastSelected;

    /*
     * sort the rows
     * @param {Function | String} predicate - function or string which will be used as predicate for the sorting
     * @param [reverse] - if you want to reverse the order
     */
    this.sortBy = function sortBy(predicate, reverse) {
      tableState.sort.predicate = predicate;
      tableState.sort.reverse = reverse === true;

      tableState.pagination.page = 1;

      return this.pipe();
    };

    /*
     * pagination matching page & page_size
     * @param {Integer} page - the current page index
     */
    this.pagination = function pagination(page) {
      page = page >= tableState.pagination.page_total ? tableState.pagination.page_total : (page <= 1 ? 1 : page);
      tableState.pagination.page = page;
      return this.pipe();
    };

    /*
     * this will chain the operations of sorting and filtering based on the current table state (sort options, filtering, ect)
     */
    this.pipe = function pipe() {
      var _sort = {};
      if (tableState.sort && tableState.sort.predicate) {
        _sort[tableState.sort.predicate] = tableState.sort.reverse ? 'desc' : 'asc';
      }
      var _pagination = _.pick(tableState.pagination, ['page', 'page_size']);

      var _search = {};
      if (tableState.search) {
        for (var key in tableState.search) {
          if (tableState.search[key] || tableState.search[key] === 0 || typeof tableState.search[key] == 'boolean') {
            _search[key] = tableState.search[key];
          }
        }
      }

      var queryStr = Object.assign(_sort, _search, _pagination);

      console.log(queryStr)

      vm.callServer(queryStr);

    };

    /**
     * select a dataRow (it will add the attribute isSelected to the row object)
     * @param {Object} row - the row to select
     * @param {String} mode - "single" or "multiple" (multiple by default)
     * @param {Boolean} selectedAll - undefined or boolean (undefined by default)
     */
    this.select = function select(row, mode, selectedAll) {

      var rows = vm.tableData;
      var len = rows.length;
      var count = 0;
      var index = rows.indexOf(row);

      if (!angular.isDefined(selectedAll)) {
        if (index !== -1) {
          if (mode === 'multiple') {
            rows[index].isSelected = !rows[index].isSelected;
          } else {
            row.isSelected = row.isSelected !== true;
            if (lastSelected) {
              lastSelected.isSelected = false;
            }
            lastSelected = row.isSelected === true ? row : undefined;
          }
        }
        for (var i = 0; i < len; i++) {
          if (rows[i].isSelected) {
            count++;
          }
        }
        this.selectedAll = (count === len);
      }
      else {
        rows[index].isSelected = selectedAll;
      }

    };


    /**
     * return the current state of the table
     * @returns {{sort: {}, search: {}, pagination: {start: number}}}
     */
    this.getTableState = function getTableState() {
      return tableState;
    };

    this.pipe();

  }

  angular.module('app').controller('reTableCtrl', reTableCtrl);
})();
