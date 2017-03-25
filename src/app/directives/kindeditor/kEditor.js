/**
 * Created by tangniye on 2016/10/12.
 */
(function () {
  function kEditor() {
    'ngInject';
    var linkFn = function (scope, elm, attr, ctrl) {

      if (typeof window.KindEditor === 'undefined') {
        throw new Error('Please import the local resources of kindeditor!');
      }
      var editor,
        editorId = elm[0],
        _config = {
          height: '490px',
          width: '100%',
          items: [
            'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
            'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
            'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', '|',
            'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
            'italic', 'underline', 'strikethrough', 'lineheight', '|','fullscreen'
          ],
          basePath: '/bower_components/kindeditor/',
          themeType: 'simple'
        },
        isReady = false,
        editorConfig = angular.extend(_config, scope.config);

      editor = new KindEditor.create(editorId, editorConfig);
      KindEditor.ready(function () {
        isReady = true;
        var _content = ctrl.$isEmpty(ctrl.$viewValue) ? "" : ctrl.$viewValue;
        editor.html(_content);
      });

      // 正则
      var regObj = scope.pattern ? new RegExp(scope.pattern) : false;
      if (regObj) {
        ctrl.$parsers.push(function (value) {
          if (regObj.test(value)) {
            ctrl.$setValidity(attr.ngModel, true)
          } else {
            ctrl.$setValidity(attr.ngModel, false)
          }

        })
      }

      ctrl.$render = function () {
        if (isReady && editor) {
          var _content = ctrl.$isEmpty(ctrl.$viewValue) ? "" : ctrl.$viewValue;
          editor.html(_content);
        }
      }

    };
    return {
      restrict: 'AC',
      require: '^ngModel',
      scope: {
        config: '=',
        pattern: '='
      },
      link: linkFn
    };
  }

  angular.module('app').directive('kEditor', kEditor);
})();
