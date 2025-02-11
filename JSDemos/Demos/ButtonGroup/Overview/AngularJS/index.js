const DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', ($scope) => {
  $scope.singleButtonGroupOptions = {
    items: alignments,
    keyExpr: 'alignment',
    stylingMode: 'outlined',
    selectedItemKeys: ['left'],
    onItemClick(e) {
      DevExpress.ui.notify({ message: `The "${e.itemData.hint}" button was clicked`, width: 320 }, 'success', 1000);
    },
  };

  $scope.multipleButtonGroupOptions = {
    items: fontStyles,
    keyExpr: 'style',
    stylingMode: 'outlined',
    selectionMode: 'multiple',
    onItemClick(e) {
      DevExpress.ui.notify({ message: `The "${e.itemData.hint}" button was clicked`, width: 320 }, 'success', 1000);
    },
  };

  $scope.singleStylingModeButtonGroupOptions = {
    items: alignments,
    keyExpr: 'alignment',
    stylingMode: 'text',
    selectedItemKeys: ['left'],
    onItemClick(e) {
      DevExpress.ui.notify({ message: `The "${e.itemData.hint}" button was clicked`, width: 320 }, 'success', 1000);
    },
  };

  $scope.multipleStylingModeButtonGroupOptions = {
    items: fontStyles,
    keyExpr: 'style',
    stylingMode: 'text',
    selectionMode: 'multiple',
    onItemClick(e) {
      DevExpress.ui.notify({ message: `The "${e.itemData.hint}" button was clicked`, width: 320 }, 'success', 1000);
    },
  };
});
