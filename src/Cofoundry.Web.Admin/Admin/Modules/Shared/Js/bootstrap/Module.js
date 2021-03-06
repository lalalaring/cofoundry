﻿angular
    .module('cms.shared', [
        'ngRoute',
        'ngSanitize',
        'angularModalService',
        'angularFileUpload',
        'ui.tinymce',
        'ang-drag-drop',
        'ui.select'
    ])
    .constant('shared.internalModulePath', '/Admin/Modules/Shared/Js/')
    .constant('shared.pluginModulePath', '/Plugins/Admin/Modules/Shared/Js/')
    .constant('shared.modulePath', '/Cofoundry/Admin/Modules/Shared/Js/')
    .constant('shared.serviceBase', '/Admin/Api/')
    .constant('shared.pluginServiceBase', '/Admin/Api/Plugins/')
    .constant('shared.urlBaseBase', '/Admin/')
    .constant('shared.contentPath', '/Admin/Modules/Shared/Content/');
