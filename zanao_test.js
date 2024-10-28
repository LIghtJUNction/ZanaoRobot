Url: javascript:var HB_f45b941 = function() {
    function _getType(args) {
        var type = 0;
        if (typeof args === 'string') {
            type = 2;
        } else if (typeof args === 'number') {
            if (Math.floor(args) === args) {
                type = 6;
            } else {
                type = 7;
            }
        } else if (typeof args === 'boolean') {
            type = 1;
        } else if (typeof args === 'function') {
            type = 3;
        } else if (args instanceof Array) {
            type = 5;
        } else if (typeof args === 'object') {
            type = 4;
        }
        return type;
    };
    function _parseFunction(obj, name, callback) {
        if (typeof obj === 'function') {
            callback[name] = obj;
            obj = '[Function]::' + name;
            return;
        }
        if (typeof obj !== 'object') {
            return;
        }
        for (var p in obj) {
            switch (typeof obj[p]) {
                case 'object':
                    var ret = name ? name + '_' + p : p;
                    _parseFunction(obj[p], ret, callback);
                    break;
                case 'function':
                    var ret = name ? name + '_' + p : p;
                    callback[ret] = (obj[p]);
                    obj[p] = '[Function]::' + ret;
                    break;
                default:
                    break;
            }
        }
    };
    function _err(s) {
        console.error(s);
    };
    function _log(s) {
        console.log(s);
    };
    function _getId() {
        return Math.floor(Math.random() * (1 << 12));
    };
    function _callJava(id, module, method, args) {
        if(typeof args === 'object' && args.length > 0) {
           if(args[0].value.success == undefined)
               args[0].value.success = '[Function]::' + args[0].name + '_success';
           if(args[0].value.fail == undefined)
               args[0].value.fail = '[Function]::' + args[0].name + '_fail';
           if(args[0].value.complete == undefined)
               args[0].value.complete = '[Function]::' + args[0].name + '_complete';
        }
        var req = {
            id: id,
            module: module,
            method: method,
            parameters: args
        };
        var ttest = ((window[module])[method])(JSON.stringify(req));
        var tttest = JSON.parse(ttest);
        return tttest;
    };
    this.onHBReady = function() {
        try {
            var ready = window.onHBReady;
            if (ready && typeof(ready) === 'function') {
                ready();
            } else {
                var readyEvent = document.createEvent('Events');
                readyEvent.initEvent('onHBReady');
                document.dispatchEvent(readyEvent);
            }
        } catch (e) {
            console.error(e);
        };
    };
    HB_f45b941.prototype.Network = {
        decryptSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Network.decryptSyncCallback)
                    HB.Network.decryptSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Network.decryptSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Network', 'decryptSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        downloadFile: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Network.downloadFileCallback)
                    HB.Network.downloadFileCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Network.downloadFileCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Network', 'downloadFile', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        easyRequest: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Network.easyRequestCallback)
                    HB.Network.easyRequestCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Network.easyRequestCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Network', 'easyRequest', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        encryptSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Network.encryptSyncCallback)
                    HB.Network.encryptSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Network.encryptSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Network', 'encryptSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getNetworkState: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Network.getNetworkStateCallback)
                    HB.Network.getNetworkStateCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Network.getNetworkStateCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Network', 'getNetworkState', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getSign: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Network.getSignCallback)
                    HB.Network.getSignCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Network.getSignCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Network', 'getSign', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getSignSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Network.getSignSyncCallback)
                    HB.Network.getSignSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Network.getSignSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Network', 'getSignSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        request: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Network.requestCallback)
                    HB.Network.requestCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Network.requestCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Network', 'request', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        uploadFile: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Network.uploadFileCallback)
                    HB.Network.uploadFileCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Network.uploadFileCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Network', 'uploadFile', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
    };
    HB_f45b941.prototype.Device = {
        appInit: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.appInitCallback)
                    HB.Device.appInitCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.appInitCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'appInit', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        appInitSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.appInitSyncCallback)
                    HB.Device.appInitSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.appInitSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'appInitSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        checkNotifySetting: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.checkNotifySettingCallback)
                    HB.Device.checkNotifySettingCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.checkNotifySettingCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'checkNotifySetting', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        checkNotifySettingSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.checkNotifySettingSyncCallback)
                    HB.Device.checkNotifySettingSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.checkNotifySettingSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'checkNotifySettingSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        checkPermission: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.checkPermissionCallback)
                    HB.Device.checkPermissionCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.checkPermissionCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'checkPermission', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        checkPermissionSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.checkPermissionSyncCallback)
                    HB.Device.checkPermissionSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.checkPermissionSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'checkPermissionSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        checkPermissions: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.checkPermissionsCallback)
                    HB.Device.checkPermissionsCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.checkPermissionsCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'checkPermissions', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        checkPermissionsSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.checkPermissionsSyncCallback)
                    HB.Device.checkPermissionsSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.checkPermissionsSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'checkPermissionsSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        cleanHyBridge: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.cleanHyBridgeCallback)
                    HB.Device.cleanHyBridgeCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.cleanHyBridgeCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'cleanHyBridge', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        floatingToast: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.floatingToastCallback)
                    HB.Device.floatingToastCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.floatingToastCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'floatingToast', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getAppInfo: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.getAppInfoCallback)
                    HB.Device.getAppInfoCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.getAppInfoCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'getAppInfo', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getAppInfoSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.getAppInfoSyncCallback)
                    HB.Device.getAppInfoSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.getAppInfoSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'getAppInfoSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getClipboard: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.getClipboardCallback)
                    HB.Device.getClipboardCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.getClipboardCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'getClipboard', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getClipboardSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.getClipboardSyncCallback)
                    HB.Device.getClipboardSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.getClipboardSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'getClipboardSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getDisplayMetrics: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.getDisplayMetricsCallback)
                    HB.Device.getDisplayMetricsCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.getDisplayMetricsCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'getDisplayMetrics', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getLatestHyBridge: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.getLatestHyBridgeCallback)
                    HB.Device.getLatestHyBridgeCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.getLatestHyBridgeCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'getLatestHyBridge', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        injectJs: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.injectJsCallback)
                    HB.Device.injectJsCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.injectJsCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'injectJs', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        isNetworkAvailable: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.isNetworkAvailableCallback)
                    HB.Device.isNetworkAvailableCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.isNetworkAvailableCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'isNetworkAvailable', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        isX5: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.isX5Callback)
                    HB.Device.isX5Callback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.isX5Callback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'isX5', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        isX5Sync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.isX5SyncCallback)
                    HB.Device.isX5SyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.isX5SyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'isX5Sync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        navigateToNotificationSettings: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.navigateToNotificationSettingsCallback)
                    HB.Device.navigateToNotificationSettingsCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.navigateToNotificationSettingsCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'navigateToNotificationSettings', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        phoneCall: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.phoneCallCallback)
                    HB.Device.phoneCallCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.phoneCallCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'phoneCall', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        requestPermissions: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.requestPermissionsCallback)
                    HB.Device.requestPermissionsCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.requestPermissionsCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'requestPermissions', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        restartApp: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.restartAppCallback)
                    HB.Device.restartAppCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.restartAppCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'restartApp', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setClipboard: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.setClipboardCallback)
                    HB.Device.setClipboardCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.setClipboardCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'setClipboard', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setClipboardSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.setClipboardSyncCallback)
                    HB.Device.setClipboardSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.setClipboardSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'setClipboardSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setHyBridgeVersion: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.setHyBridgeVersionCallback)
                    HB.Device.setHyBridgeVersionCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.setHyBridgeVersionCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'setHyBridgeVersion', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        updateHyBridge: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.updateHyBridgeCallback)
                    HB.Device.updateHyBridgeCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.updateHyBridgeCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'updateHyBridge', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        updateNativeApp: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Device.updateNativeAppCallback)
                    HB.Device.updateNativeAppCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Device.updateNativeAppCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Device', 'updateNativeApp', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
    };
    HB_f45b941.prototype.Interface = {
        checkLevel: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.checkLevelCallback)
                    HB.Interface.checkLevelCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.checkLevelCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'checkLevel', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        dialog: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.dialogCallback)
                    HB.Interface.dialogCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.dialogCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'dialog', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        exitApp: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.exitAppCallback)
                    HB.Interface.exitAppCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.exitAppCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'exitApp', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getCurRefreshBgImage: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.getCurRefreshBgImageCallback)
                    HB.Interface.getCurRefreshBgImageCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.getCurRefreshBgImageCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'getCurRefreshBgImage', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getCurRefreshBgImageSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.getCurRefreshBgImageSyncCallback)
                    HB.Interface.getCurRefreshBgImageSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.getCurRefreshBgImageSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'getCurRefreshBgImageSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getCurrentUrl: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.getCurrentUrlCallback)
                    HB.Interface.getCurrentUrlCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.getCurrentUrlCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'getCurrentUrl', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getCurrentUrlSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.getCurrentUrlSyncCallback)
                    HB.Interface.getCurrentUrlSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.getCurrentUrlSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'getCurrentUrlSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getNightMode: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.getNightModeCallback)
                    HB.Interface.getNightModeCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.getNightModeCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'getNightMode', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getNightModeSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.getNightModeSyncCallback)
                    HB.Interface.getNightModeSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.getNightModeSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'getNightModeSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getPageObject: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.getPageObjectCallback)
                    HB.Interface.getPageObjectCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.getPageObjectCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'getPageObject', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        homeDestroy: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.homeDestroyCallback)
                    HB.Interface.homeDestroyCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.homeDestroyCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'homeDestroy', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        homeDestroySync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.homeDestroySyncCallback)
                    HB.Interface.homeDestroySyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.homeDestroySyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'homeDestroySync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        hrefTest: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.hrefTestCallback)
                    HB.Interface.hrefTestCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.hrefTestCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'hrefTest', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        isHomePage: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.isHomePageCallback)
                    HB.Interface.isHomePageCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.isHomePageCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'isHomePage', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        isHomePageSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.isHomePageSyncCallback)
                    HB.Interface.isHomePageSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.isHomePageSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'isHomePageSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        lengthTest: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.lengthTestCallback)
                    HB.Interface.lengthTestCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.lengthTestCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'lengthTest', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        motionHide: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.motionHideCallback)
                    HB.Interface.motionHideCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.motionHideCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'motionHide', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        motionShow: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.motionShowCallback)
                    HB.Interface.motionShowCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.motionShowCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'motionShow', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        navigateBack: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.navigateBackCallback)
                    HB.Interface.navigateBackCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.navigateBackCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'navigateBack', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        navigateTo: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.navigateToCallback)
                    HB.Interface.navigateToCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.navigateToCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'navigateTo', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        navigateToCourse: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.navigateToCourseCallback)
                    HB.Interface.navigateToCourseCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.navigateToCourseCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'navigateToCourse', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        navigateToMarket: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.navigateToMarketCallback)
                    HB.Interface.navigateToMarketCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.navigateToMarketCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'navigateToMarket', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        navigateToMarketSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.navigateToMarketSyncCallback)
                    HB.Interface.navigateToMarketSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.navigateToMarketSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'navigateToMarketSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        nightFollowSystem: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.nightFollowSystemCallback)
                    HB.Interface.nightFollowSystemCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.nightFollowSystemCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'nightFollowSystem', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        nightFollowSystemSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.nightFollowSystemSyncCallback)
                    HB.Interface.nightFollowSystemSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.nightFollowSystemSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'nightFollowSystemSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        redirectTo: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.redirectToCallback)
                    HB.Interface.redirectToCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.redirectToCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'redirectTo', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        saveImage: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.saveImageCallback)
                    HB.Interface.saveImageCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.saveImageCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'saveImage', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        saveImageBlobToPhotosAlbum: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.saveImageBlobToPhotosAlbumCallback)
                    HB.Interface.saveImageBlobToPhotosAlbumCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.saveImageBlobToPhotosAlbumCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'saveImageBlobToPhotosAlbum', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        saveImageUrlToPhotosAlbum: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.saveImageUrlToPhotosAlbumCallback)
                    HB.Interface.saveImageUrlToPhotosAlbumCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.saveImageUrlToPhotosAlbumCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'saveImageUrlToPhotosAlbum', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setAppBadge: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setAppBadgeCallback)
                    HB.Interface.setAppBadgeCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setAppBadgeCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setAppBadge', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setBackCallback: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setBackCallbackCallback)
                    HB.Interface.setBackCallbackCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setBackCallbackCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setBackCallback', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setBackCallbackSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setBackCallbackSyncCallback)
                    HB.Interface.setBackCallbackSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setBackCallbackSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setBackCallbackSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setMenu: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setMenuCallback)
                    HB.Interface.setMenuCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setMenuCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setMenu', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setNightMode: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setNightModeCallback)
                    HB.Interface.setNightModeCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setNightModeCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setNightMode', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setNightModeCallback: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setNightModeCallbackCallback)
                    HB.Interface.setNightModeCallbackCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setNightModeCallbackCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setNightModeCallback', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setNightModeCallbackSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setNightModeCallbackSyncCallback)
                    HB.Interface.setNightModeCallbackSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setNightModeCallbackSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setNightModeCallbackSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setNightModeSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setNightModeSyncCallback)
                    HB.Interface.setNightModeSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setNightModeSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setNightModeSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setPrefersColorScheme: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setPrefersColorSchemeCallback)
                    HB.Interface.setPrefersColorSchemeCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setPrefersColorSchemeCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setPrefersColorScheme', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setPrefersColorSchemeSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setPrefersColorSchemeSyncCallback)
                    HB.Interface.setPrefersColorSchemeSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setPrefersColorSchemeSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setPrefersColorSchemeSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setPullAble: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setPullAbleCallback)
                    HB.Interface.setPullAbleCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setPullAbleCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setPullAble', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setPullAbleSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setPullAbleSyncCallback)
                    HB.Interface.setPullAbleSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setPullAbleSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setPullAbleSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setPullDownRefreshCallback: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setPullDownRefreshCallbackCallback)
                    HB.Interface.setPullDownRefreshCallbackCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setPullDownRefreshCallbackCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setPullDownRefreshCallback', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setRefreshBgImage: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setRefreshBgImageCallback)
                    HB.Interface.setRefreshBgImageCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setRefreshBgImageCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setRefreshBgImage', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setRefreshBgImageSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setRefreshBgImageSyncCallback)
                    HB.Interface.setRefreshBgImageSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setRefreshBgImageSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setRefreshBgImageSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setTab: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setTabCallback)
                    HB.Interface.setTabCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setTabCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setTab', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setTabBarBadge: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setTabBarBadgeCallback)
                    HB.Interface.setTabBarBadgeCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setTabBarBadgeCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setTabBarBadge', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setTopBar: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setTopBarCallback)
                    HB.Interface.setTopBarCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setTopBarCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setTopBar', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setTopBarCallBackInHome: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setTopBarCallBackInHomeCallback)
                    HB.Interface.setTopBarCallBackInHomeCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setTopBarCallBackInHomeCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setTopBarCallBackInHome', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setTopBarCallback: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setTopBarCallbackCallback)
                    HB.Interface.setTopBarCallbackCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setTopBarCallbackCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setTopBarCallback', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setTopBarInHome: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.setTopBarInHomeCallback)
                    HB.Interface.setTopBarInHomeCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.setTopBarInHomeCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'setTopBarInHome', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        stopPullDownRefresh: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.stopPullDownRefreshCallback)
                    HB.Interface.stopPullDownRefreshCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.stopPullDownRefreshCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'stopPullDownRefresh', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        switchTab: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.switchTabCallback)
                    HB.Interface.switchTabCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.switchTabCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'switchTab', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        toast: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.toastCallback)
                    HB.Interface.toastCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.toastCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'toast', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        wxLaunchMiniProgram: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Interface.wxLaunchMiniProgramCallback)
                    HB.Interface.wxLaunchMiniProgramCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Interface.wxLaunchMiniProgramCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Interface', 'wxLaunchMiniProgram', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
    };
    HB_f45b941.prototype.user = {
        WXShare: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.user.WXShareCallback)
                    HB.user.WXShareCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.user.WXShareCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'user', 'WXShare', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        isWXInstalledSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.user.isWXInstalledSyncCallback)
                    HB.user.isWXInstalledSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.user.isWXInstalledSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'user', 'isWXInstalledSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        launchMiniApp: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.user.launchMiniAppCallback)
                    HB.user.launchMiniAppCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.user.launchMiniAppCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'user', 'launchMiniApp', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        requestPayment: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.user.requestPaymentCallback)
                    HB.user.requestPaymentCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.user.requestPaymentCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'user', 'requestPayment', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        wxCustomerServiceChat: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.user.wxCustomerServiceChatCallback)
                    HB.user.wxCustomerServiceChatCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.user.wxCustomerServiceChatCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'user', 'wxCustomerServiceChat', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        wxLogin: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.user.wxLoginCallback)
                    HB.user.wxLoginCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.user.wxLoginCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'user', 'wxLogin', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        wxPay: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.user.wxPayCallback)
                    HB.user.wxPayCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.user.wxPayCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'user', 'wxPay', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        wxShare: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.user.wxShareCallback)
                    HB.user.wxShareCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.user.wxShareCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'user', 'wxShare', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
    };
    HB_f45b941.prototype.Storage = {
        clearCache: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.clearCacheCallback)
                    HB.Storage.clearCacheCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.clearCacheCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'clearCache', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        clearDownloadFile: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.clearDownloadFileCallback)
                    HB.Storage.clearDownloadFileCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.clearDownloadFileCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'clearDownloadFile', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        clearMemory: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.clearMemoryCallback)
                    HB.Storage.clearMemoryCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.clearMemoryCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'clearMemory', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        clearMemorySync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.clearMemorySyncCallback)
                    HB.Storage.clearMemorySyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.clearMemorySyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'clearMemorySync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        clearStorage: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.clearStorageCallback)
                    HB.Storage.clearStorageCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.clearStorageCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'clearStorage', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        clearStorageSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.clearStorageSyncCallback)
                    HB.Storage.clearStorageSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.clearStorageSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'clearStorageSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getMemory: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.getMemoryCallback)
                    HB.Storage.getMemoryCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.getMemoryCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'getMemory', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getMemorySync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.getMemorySyncCallback)
                    HB.Storage.getMemorySyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.getMemorySyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'getMemorySync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getPreLoadData: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.getPreLoadDataCallback)
                    HB.Storage.getPreLoadDataCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.getPreLoadDataCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'getPreLoadData', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getPreLoadDataSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.getPreLoadDataSyncCallback)
                    HB.Storage.getPreLoadDataSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.getPreLoadDataSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'getPreLoadDataSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getSDStorage: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.getSDStorageCallback)
                    HB.Storage.getSDStorageCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.getSDStorageCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'getSDStorage', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getStorage: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.getStorageCallback)
                    HB.Storage.getStorageCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.getStorageCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'getStorage', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        getStorageSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.getStorageSyncCallback)
                    HB.Storage.getStorageSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.getStorageSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'getStorageSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setMemory: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.setMemoryCallback)
                    HB.Storage.setMemoryCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.setMemoryCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'setMemory', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setMemorySync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.setMemorySyncCallback)
                    HB.Storage.setMemorySyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.setMemorySyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'setMemorySync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setStorage: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.setStorageCallback)
                    HB.Storage.setStorageCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.setStorageCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'setStorage', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setStorageSync: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Storage.setStorageSyncCallback)
                    HB.Storage.setStorageSyncCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Storage.setStorageSyncCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Storage', 'setStorageSync', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
    };
    HB_f45b941.prototype.Photo = {
        downloadImage: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Photo.downloadImageCallback)
                    HB.Photo.downloadImageCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Photo.downloadImageCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Photo', 'downloadImage', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        qrScan: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Photo.qrScanCallback)
                    HB.Photo.qrScanCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Photo.qrScanCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Photo', 'qrScan', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        selectImages: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Photo.selectImagesCallback)
                    HB.Photo.selectImagesCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Photo.selectImagesCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Photo', 'selectImages', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        showImages: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Photo.showImagesCallback)
                    HB.Photo.showImagesCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Photo.showImagesCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Photo', 'showImages', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        takePhoto: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Photo.takePhotoCallback)
                    HB.Photo.takePhotoCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Photo.takePhotoCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Photo', 'takePhoto', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        uploadImageToServer: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Photo.uploadImageToServerCallback)
                    HB.Photo.uploadImageToServerCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Photo.uploadImageToServerCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Photo', 'uploadImageToServer', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
    };
    HB_f45b941.prototype.Event = {
        X5Test: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Event.X5TestCallback)
                    HB.Event.X5TestCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Event.X5TestCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Event', 'X5Test', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        emit: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Event.emitCallback)
                    HB.Event.emitCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Event.emitCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Event', 'emit', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        off: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Event.offCallback)
                    HB.Event.offCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Event.offCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Event', 'off', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        on: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Event.onCallback)
                    HB.Event.onCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Event.onCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Event', 'on', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setAppOnHide: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Event.setAppOnHideCallback)
                    HB.Event.setAppOnHideCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Event.setAppOnHideCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Event', 'setAppOnHide', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setAppOnShow: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Event.setAppOnShowCallback)
                    HB.Event.setAppOnShowCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Event.setAppOnShowCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Event', 'setAppOnShow', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setOnShow: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Event.setOnShowCallback)
                    HB.Event.setOnShowCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Event.setOnShowCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Event', 'setOnShow', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setPageOnHide: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Event.setPageOnHideCallback)
                    HB.Event.setPageOnHideCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Event.setPageOnHideCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Event', 'setPageOnHide', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        setPageOnShow: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Event.setPageOnShowCallback)
                    HB.Event.setPageOnShowCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Event.setPageOnShowCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Event', 'setPageOnShow', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        unsetAppOnHide: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Event.unsetAppOnHideCallback)
                    HB.Event.unsetAppOnHideCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Event.unsetAppOnHideCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Event', 'unsetAppOnHide', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        unsetAppOnShow: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Event.unsetAppOnShowCallback)
                    HB.Event.unsetAppOnShowCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Event.unsetAppOnShowCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Event', 'unsetAppOnShow', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        unsetOnShow: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Event.unsetOnShowCallback)
                    HB.Event.unsetOnShowCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Event.unsetOnShowCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Event', 'unsetOnShow', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        unsetPageOnHide: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Event.unsetPageOnHideCallback)
                    HB.Event.unsetPageOnHideCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Event.unsetPageOnHideCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Event', 'unsetPageOnHide', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        unsetPageOnShow: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.Event.unsetPageOnShowCallback)
                    HB.Event.unsetPageOnShowCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.Event.unsetPageOnShowCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'Event', 'unsetPageOnShow', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
    };
    HB_f45b941.prototype.InputHistory = {
        addHistory: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.InputHistory.addHistoryCallback)
                    HB.InputHistory.addHistoryCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.InputHistory.addHistoryCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'InputHistory', 'addHistory', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
        deleteHistory: function() {
            try {
                var id = _getId(),
                    args = [];
                if (!HB.InputHistory.deleteHistoryCallback)
                    HB.InputHistory.deleteHistoryCallback = {};
                for (var i in arguments) {
                    var name = id + '_p_' + i,
                        item = arguments[i],
                        l = {};
                    _parseFunction(item, name, l);
                    for (var k in l) {
                       HB.InputHistory.deleteHistoryCallback[k] = l[k];
                    };
                    args.push({
                        type: _getType(item),
                        name: name,
                        value: item
                    })
                };

                var r = _callJava(id, 'InputHistory', 'deleteHistory', args);
                if (r && r.success) {
                    return r.msg;
                } else {
                    _err(r.msg);
                }
            } catch (e) {
                _err(e);
            };
        },
    };
};


window.HB = new HB_f45b941();
HB.onHBReady();
