/**
 * Created by tangniye on 17/4/12.
 */
(function () {
  'use strict';

  /** @ngInject */
  function Common($uibModal, $rootScope) {

    /* *
     * 弹出层
     *
     * @param controller string
     * @param templateUrl string
     * @param size string 'md'or 'sm' or'lg'
     * @param backdrop true or false or 'static'. Controls presence of a backdrop
     * @param obj object  传进的scope变量
     * @return 返回处理之后的数据集合
     *
     * */
    function promptModel(controller, templateUrl, size, backdrop, windowClass, obj) {
      var scope = $rootScope.$new(true);
      angular.forEach(obj, function (value, key) {
        scope[key] = value;
      });

      return $uibModal.open({
        animation: true,
        templateUrl: templateUrl || '',
        controller: controller || '',
        size: size || 'md',
        backdrop: backdrop || true,
        windowClass: windowClass || '',
        scope: scope
      });

    }

    /* *
     * 针对table编辑、删除 选择操作处理的公共方法
     *
     * @param obj 数据集合
     * @return 返回处理之后的数据集合
     *
     * */
    function selectIds(dataArr, id_name) {
      var ids = [];

      for (var i = 0; i < dataArr.length; i++) {
        if (dataArr[i].isSelected) {
          ids.push(dataArr[i][id_name]);
        }
      }
      return ids;
    }

    return {
      model: {
        promptModel: promptModel
      },
      table: {
        selectIds: selectIds
      }
    };
  }

  angular.module('app')
    .service('Common', Common);

})();



