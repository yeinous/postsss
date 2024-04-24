import _ from 'lodash';

const originalObject = {
  envName: "afcmk-xuesw-sit-demo1",
  versionNumber: "20240220161251582",
  appSystemEng: "AH5",
  domainList: [],
  proxyInfo: {
    header: {
      customHeaderList: []
    },
    securityInfo: {
      iframeFlag: false,
      iframeAllow: false,
      tingyun: false,
      cookieFlag: false,
      accessControlFlag: false,
      accessAllow: false,
      accessControlList: []
    },
    enablityBean: {
      apolloSecurity: {
        switchFlag: false,
        defName: "apolloSecurity",
        version: "0.0.8",
        flag: false
      },
      apmMonitor: {
        switchFlag: false,
        defName: "apmMontior",
        version: "1.1.4",
        config: {
          appKey: "",
          appType: "1",
          accessType: "1",
          appVersion: "1.1.4",
          switchFinderFlag: false,
          finderMonitorConfig: {
            appId: "",
            finderVersion: ""
          }
        }
      },
      userDefImplantCode: {
        switchFlag: false,
        defName: "userDefCode",
        version: "0.0.1",
        configCode: ""
      },
      onlineDebug: {
        switchFlag: false,
        defName: "onlineDebug",
        version: "0.0.1"
      }
    },
    proxyRuleList: [],
    redirectList: [],
    custom: "",
    proxyCustom: "#示例\r\n#响应输出大小限制，若输出行较大，页面未能成功显示，请修改此值进行调试\r\n#SubstituteMaxLineLength 10m",
    radio: "0",
    deployResources: {
      replicaSet: "1",
      requestCpu: "200",
      limitCpu: "500",
      requestMemory: "400",
      limitMemory: "2048"
    },
    imageInfo: {
      baseImageVersionInfo: {
        id: "1",
        name: "Apache2.4/麒麟V10",
        opSystem: "麒麟",
        opSystemVersion: "V10",
        middleware: "apache",
        middlewareVersion: "2.4",
        imageUri: null,
        createUser: null,
        createTime: 1669564800000,
        updateUser: null,
        updateTime: 1675846894000,
        deleteFlag: "0"
      },
      proxyImage: {
        id: "1105523041804222464",
        baseImageId: "1",
        versionId: "20210721001",
        state: "apache代理镜像",
        imageUrl: "artifactory.dev.cmbc.cn:31345/cmbc-docker-local/public/kylin_v10_apache2.4:20210721001",
        type: "proxy",
        createBy: "liuchunxiang",
        deleteFlag: "0",
        createTime: "2023-05-09 15:55:40.0",
        defaultFlag: "0",
        isdelete: false,
        imageName: "Apache2.4/麒麟V10-20210721001"
      },
      deployImage: {
        id: "1105523405412630528",
        baseImageId: "1",
        versionId: "20230407160802069v6",
        state: "解决静态资源解压缩后通过index.html适配跟目录导致的丢包问题",
        imageUrl: "artifactory.dev.cmbc.cn:31345/afcmk-docker-preprd-local/20230413/front-end-runtime/artifact/kylin_v10_apache2.4_resource:20230407160802069v6",
        type: "resource",
        createBy: "mskj-xueshunwen",
        deleteFlag: "0",
        createTime: "2023-05-09 15:57:07.0",
        defaultFlag: "0",
        isdelete: false,
        imageName: "Apache2.4/麒麟V10-20230407160802069v6"
      }
    }
  },
  resourceList: [
    {
      resName: "test-1214",
      resYmalServiceName: "afc-ts-230-xuesw-sit-demo1-test-1214",
      radio: "0",
      custom: "",
      resCustom: "#静态资源的配置路径为：/apache/apache_apache_10010/app_static_files/prd\r\n#修改配置示例：\r\n#<Directory \"/apache/apache_apache_10010/app_static_files/prd\">\r\n\r\n#</Directory>\r\n",
      resDeflate: null,
      filesMatch: {
        cacheFlag: false
      },
      rewrite: {
        rewriteList: []
      },
      deployResources: {
        replicaSet: "1",
        requestCpu: "200",
        limitCpu: "500",
        requestMemory: "400",
        limitMemory: "2048"
      },
      rootPath: ""
    }
  ],
  enablityBean: {
    apolloSecurity: {
      switchFlag: false,
      defName: "apolloSecurity",
      version: "0.0.8",
      flag: false
    },
    apmMonitor: {
      switchFlag: false,
      defName: "apmMontior",
      version: "1.1.4",
      config: {
        appKey: "",
        appType: "1",
        accessType: "1",
        appVersion: "1.1.4",
        switchFinderFlag: false,
        finderMonitorConfig: {
          appId: "",
          finderVersion: ""
        }
      }
    },
    userDefImplantCode: {
      switchFlag: false,
      defName: "userDefCode",
      version: "0.0.1",
      configCode: ""
    },
    onlineDebug: {
      switchFlag: false,
      defName: "onlineDebug",
      version: "0.0.1"
    }
  },
  proxyConfig: [
    {
      name: "httpd.conf",
      content: " ###################\r\n Include /apache/httpd/conf/public.conf\r\n Include /apache/httpd/conf/servername.conf\r\n Include /apache/apache_apache_10010/uid.conf\r\n ###################Modules######################\r\n LoadModule rewrite_module /apache/httpd/modules/mod_rewrite.so\r\n LoadModule proxy_module /apache/httpd/modules/mod_proxy.so\r\n LoadModule proxy_http_module /apache/httpd/modules/mod_proxy_http.so\r\n LoadModule ssl_module /apache/httpd/modules/mod_ssl.so\r\n LoadModule status_module /apache/httpd/modules/mod_status.so\r\n LoadModule weblogic_module /apache/httpd/modules/mod_wl.so\r\n LoadModule deflate_module /apache/httpd/modules/mod_deflate.so\r\n LoadModule filter_module /apache/httpd/modules/mod_filter.so\r\n LoadModule headers_module /apache/httpd/modules/mod_headers.so\r\n LoadModule setenvif_module /apache/httpd/modules/mod_setenvif.so\r\n LoadModule substitute_module /apache/httpd/modules/mod_substitute.so\r\n LoadModule proxy_balancer_module /apache/httpd/modules/mod_proxy_balancer.so\r\n LoadModule lbmethod_byrequests_module /apache/httpd/modules/mod_lbmethod_byrequests.so\r\n LoadModule lbmethod_bytraffic_module /apache/httpd/modules/mod_lbmethod_bytraffic.so\r\n LoadModule lbmethod_bybusyness_module /apache/httpd/modules/mod_lbmethod_bybusyness.so\r\n LoadModule proxy_hcheck_module /apache/httpd/modules/mod_proxy_hcheck.so\r\n LoadModule watchdog_module /apache/httpd/modules/mod_watchdog.so\r\n LoadModule slotmem_shm_module /apache/httpd/modules/mod_slotmem_shm.so\r\n LoadModule proxy_wstunnel_module /apache/httpd/modules/mod_proxy_wstunnel.so\r\n \r\n listen 10010\r\n listen 10011\r\n SubstituteMaxLineLength 10m\r\n AddOutputFilterByType SUBSTITUTE text/html\r\n KeepAlive On\r\n MaxKeepAliveRequests 10000\r\n KeepAliveTimeout 15\r\n ListenBacklog 1000\r\n\r\n\r\n <IfModule mpm_worker_module>\r\n StartServers 3\r\n MaxClients 2000\r\n ServerLimit 40\r\n MinSpareThreads 100\r\n MaxSpareThreads 500\r\n ThreadsPerChild 50\r\n ThreadLimit 50\r\n MaxRequestsPerChild 10000\r\n </IfModule>\r\n\r\n \r\n <VirtualHost *:10010>\r\n ServerName localhost:10010\r\n Include /apache/apache_apache_10010/httpd_common.conf\r\n </VirtualHost>\r\n\r\n\r\n Pidfile \"/apache/apache_apache_10010/apache.pid\"\r\n LogFormat \"%h####%l####%u####%t####\\\"%r\\\"####%>s####%b####\\\"%{Referer}i\\\"####\\\"%{User-Agent}i\\\"####%D####%T\" common\r\n CustomLog \"/dev/stdout\" common\r\n ErrorLog \"/dev/stdout\"\r\n # status\r\n <VirtualHost *:10011>\r\n <Location /server-status>\r\n SetHandler server-status\r\n Order deny,allow\r\n Allow from all\r\n </Location>\r\n </VirtualHost>\r\n\r\n \r\n #其它用户自定义配置\r\n",
    },
    {
      name: "httpd_common.conf",
      content: "\r\n #安全相关header\r\n \r\n # 自定义响应头\r\n \r\n # 重定向\r\n \r\n\r\n \r\n #代理配置\r\n \r\n\r\n #关闭正向代理\r\n ProxyRequests off\r\n ProxyPreserveHost on\r\n <Proxy *>\r\n Order deny,allow\r\n Allow from all\r\n </Proxy>\r\n\r\n #示例\r\n #响应输出大小限制，若输出行较大，页面未能成功显示，请修改此值进行调试\r\n #SubstituteMaxLineLength 10m\r\n",
    }
  ],
  resourceConfigList: [
    {
      resName: "test-1214",
      configs: [
        {
          name: "httpd.conf",
          content: " ###################\r\n Include /apache/httpd/conf/public.conf\r\n Include /apache/httpd/conf/servername.conf\r\n Include /apache/apache_apache_10010/uid.conf\r\n ###################Modules######################\r\n LoadModule rewrite_module /apache/httpd/modules/mod_rewrite.so\r\n LoadModule proxy_module /apache/httpd/modules/mod_proxy.so\r\n LoadModule proxy_http_module /apache/httpd/modules/mod_proxy_http.so\r\n LoadModule ssl_module /apache/httpd/modules/mod_ssl.so\r\n LoadModule status_module /apache/httpd/modules/mod_status.so\r\n LoadModule weblogic_module /apache/httpd/modules/mod_wl.so\r\n LoadModule deflate_module /apache/httpd/modules/mod_deflate.so\r\n LoadModule filter_module /apache/httpd/modules/mod_filter.so\r\n LoadModule headers_module /apache/httpd/modules/mod_headers.so\r\n LoadModule setenvif_module /apache/httpd/modules/mod_setenvif.so\r\n LoadModule substitute_module /apache/httpd/modules/mod_substitute.so\r\n\r\n listen 10010\r\n listen 10011\r\n\r\n KeepAlive On\r\n MaxKeepAliveRequests 10000\r\n KeepAliveTimeout 3\r\n ListenBacklog 1000\r\n\r\n\r\n <IfModule mpm_worker_module>\r\n StartServers 3\r\n MaxClients 2000\r\n ServerLimit 40\r\n MinSpareThreads 100\r\n MaxSpareThreads 500\r\n ThreadsPerChild 50\r\n ThreadLimit 50\r\n MaxRequestsPerChild 10000\r\n </IfModule>\r\n\r\n\r\n Pidfile \"/apache/apache_apache_10010/apache.pid\"\r\n LogFormat \"%h####%l####%u####%t####\\\"%r\\\"####%>s####%b####\\\"%{Referer}i\\\"####\\\"%{User-Agent}i\\\"####%D####%T\" common\r\n CustomLog \"/dev/stdout\" common\r\n ErrorLog \"/dev/stdout\"\r\n # status\r\n <VirtualHost *:10011>\r\n <Location /server-status>\r\n SetHandler server-status\r\n Order deny,allow\r\n Allow from all\r\n </Location>\r\n </VirtualHost>\r\n\r\n <VirtualHost *:10010>\r\n ServerName localhost:10010\r\n Include /apache/apache_apache_10010/httpd_common.conf\r\n </VirtualHost>\r\n #其它用户自定义配置\r\n \r\n\r\n",
        },
        {
          name: "httpd_common.conf",
          content: " # 监控健康检查（默认配置）\r\n <Location /health_check>\r\n ErrorDocument 200 \"mermao\"\r\n RewriteEngine On\r\n RewriteRule .* - [R=200]\r\n </Location>\r\n\r\n # 根路径\r\n DocumentRoot \"/apache/apache_apache_10010/app_static_files\"\r\n <Directory \"/apache/apache_apache_10010/app_static_files/prd\">\r\n Options -Indexes +FollowSymLinks\r\n AllowOverride None\r\n Order allow,deny\r\n Allow from all\r\n # browserHistory 配置\r\n \r\n </Directory>\r\n <Directory \"/apache/apache_apache_10010/app_static_files/gray1\">\r\n Options -Indexes +FollowSymLinks\r\n AllowOverride None\r\n Order allow,deny\r\n Allow from all\r\n # browserHistory 配置\r\n \r\n </Directory>\r\n\r\n <Directory \"/apache/apache_apache_10010/app_static_files/gray2\">\r\n Options -Indexes +FollowSymLinks\r\n AllowOverride None\r\n Order allow,deny\r\n Allow from all\r\n # browserHistory 配置\r\n \r\n </Directory>\r\n <Directory \"/apache/apache_apache_10010/app_static_files/gray3\">\r\n Options -Indexes +FollowSymLinks\r\n AllowOverride None\r\n Order allow,deny\r\n Allow from all\r\n # browserHistory 配置\r\n \r\n </Directory>\r\n\r\n <Directory \"/apache/apache_apache_10010/app_static_files/gray4\">\r\n Options -Indexes +FollowSymLinks\r\n AllowOverride None\r\n Order allow,deny\r\n Allow from all\r\n # browserHistory 配置\r\n \r\n </Directory>\r\n\r\n # 压缩（默认配置）\r\n \r\n\r\n # 缓存\r\n # 标准缓存\r\n \r\n\r\n # 默认html强制不缓存\r\n <FilesMatch \"\\.(html|htm)$\">\r\n # 强制不缓存\r\n FileETag None\r\n <IfModule mod_headers.c>\r\n Header unset ETag\r\n Header set Cache-Control \"max-age=0, no-cache, no-store, must-revalidate\"\r\n Header set Pragma \"no-cache\"\r\n Header set Expires \"Wed, 11 Jan 1984 05:00:00 GMT\"\r\n </IfModule>\r\n </FilesMatch>\r\n # 自定义配置\r\n #静态资源的配置路径为：/apache/apache_apache_10010/app_static_files/prd\r\n #修改配置示例：\r\n #<Directory \"/apache/apache_apache_10010/app_static_files/prd\">\r\n \r\n #</Directory>\r\n \r\n",
        }
      ]
    }
  ],
  proxyPointOut: "#示例\r\n#响应输出大小限制，若输出行较大，页面未能成功显示，请修改此值进行调试\r\n#SubstituteMaxLineLength 10m",
  resPointOut: "#静态资源的配置路径为：/apache/apache_apache_10010/app_static_files/prd\r\n#修改配置示例：\r\n#<Directory \"/apache/apache_apache_10010/app_static_files/prd\">\r\n\r\n#</Directory>\r\n",
}

const modifiedObject = {
  envName: "afcmk-xuesw-sit-demo1",
  versionNumber: "20230209155806833",
  appSystemEng: null,
  domainList: [],
  proxyInfo: {
    header: {
      customHeaderList: []
    },
    securityInfo: {
      iframeFlag: false,
      iframeAllow: false, 
      tingyun: false,
      cookieFlag: false,
      accessControlFlag: false,
      accessAllow: false,
      accessControlList: []
    },
    enablityBean: {
      apolloSecurity: {
        switchFlag: false,
        defName: "apolloSecurity",
        version: "0.0.8",
        flag: false
      },
      apmMonitor: {
        switchFlag: false,
        defName: "apmMontior",
        version: "1.1.4",
        config: {
          appKey: "",
          appType: "1",
          accessType: "1",
          appVersion: "1.1.4",
          switchFinderFlag: false,
          finderMonitorConfig: {
            appId: "",
            finderVersion: ""
          }
        }
      },
      userDefImplantCode: {
        switchFlag: false,
        defName: "userDefCode",
        version: "0.0.1",
        configCode: ""
      },
      onlineDebug: {
        switchFlag: false,
        defName: "onlineDebug",
        version: "0.0.1"
      }
    },
    proxyRuleList: [],
    redirectList: [],
    custom: "",
    proxyCustom: null,
    radio: "0",
    deployResources: null,
    imageInfo: null
  },
  resourceList: [],
  enablityBean: {
    apolloSecurity: {
      switchFlag: false,
      defName: "apolloSecurity",
      version: "0.0.8",
      flag: false
    },
    apmMonitor: {
      switchFlag: false,
      defName: "apmMontior",
      version: "1.1.4",
      config: {
        appKey: "",
        appType: "1",
        accessType: "1",
        appVersion: "1.1.4",
        switchFinderFlag: false,
        finderMonitorConfig: {
          appId: "",
          finderVersion: ""
        }
      }
    },
    userDefImplantCode: {
      switchFlag: false,
      defName: "userDefCode",
      version: "0.0.1",
      configCode: ""
    },
    onlineDebug: {
      switchFlag: false,
      defName: "onlineDebug",
      version: "0.0.1"
    }
  },
  proxyConfig: [
    {
      name: "httpd.conf",
      content: " ###################\r\n Include /apache/httpd/conf/public.conf\r\n Include /apache/httpd/conf/servername.conf\r\n Include /apache/apache_apache_10010/uid.conf\r\n ###################Modules######################\r\n LoadModule rewrite_module /apache/httpd/modules/mod_rewrite.so\r\n LoadModule proxy_module /apache/httpd/modules/mod_proxy.so\r\n LoadModule proxy_http_module /apache/httpd/modules/mod_proxy_http.so\r\n LoadModule ssl_module /apache/httpd/modules/mod_ssl.so\r\n LoadModule status_module /apache/httpd/modules/mod_status.so\r\n LoadModule weblogic_module /apache/httpd/modules/mod_wl.so\r\n LoadModule deflate_module /apache/httpd/modules/mod_deflate.so\r\n LoadModule filter_module /apache/httpd/modules/mod_filter.so\r\n LoadModule headers_module /apache/httpd/modules/mod_headers.so\r\n LoadModule setenvif_module /apache/httpd/modules/mod_setenvif.so\r\n LoadModule substitute_module /apache/httpd/modules/mod_substitute.so\r\n LoadModule proxy_balancer_module /apache/httpd/modules/mod_proxy_balancer.so\r\n LoadModule lbmethod_byrequests_module /apache/httpd/modules/mod_lbmethod_byrequests.so\r\n LoadModule lbmethod_bytraffic_module /apache/httpd/modules/mod_lbmethod_bytraffic.so\r\n LoadModule lbmethod_bybusyness_module /apache/httpd/modules/mod_lbmethod_bybusyness.so\r\n LoadModule proxy_hcheck_module /apache/httpd/modules/mod_proxy_hcheck.so\r\n LoadModule watchdog_module /apache/httpd/modules/mod_watchdog.so\r\n LoadModule slotmem_shm_module /apache/httpd/modules/mod_slotmem_shm.so\r\n LoadModule proxy_wstunnel_module /apache/httpd/modules/mod_proxy_wstunnel.so\r\n \r\n listen 10010\r\n listen 10011\r\n SubstituteMaxLineLength 10m\r\n AddOutputFilterByType SUBSTITUTE text/html\r\n KeepAlive On\r\n MaxKeepAliveRequests 10000\r\n KeepAliveTimeout 15\r\n ListenBacklog 1000\r\n\r\n\r\n <IfModule mpm_worker_module>\r\n StartServers 3\r\n MaxClients 2000\r\n ServerLimit 40\r\n MinSpareThreads 100\r\n MaxSpareThreads 500\r\n ThreadsPerChild 50\r\n ThreadLimit 50\r\n MaxRequestsPerChild 10000\r\n </IfModule>\r\n\r\n \r\n <VirtualHost *:10010>\r\n ServerName localhost:10010\r\n Include /apache/apache_apache_10010/httpd_common.conf\r\n </VirtualHost>\r\n\r\n\r\n Pidfile \"/apache/apache_apache_10010/apache.pid\"\r\n LogFormat \"%h####%l####%u####%t####\\\"%r\\\"####%>s####%b####\\\"%{Referer}i\\\"####\\\"%{User-Agent}i\\\"####%D####%T\" common\r\n CustomLog \"/dev/stdout\" common\r\n ErrorLog \"/dev/stdout\"\r\n # status\r\n <VirtualHost *:10011>\r\n <Location /server-status>\r\n SetHandler server-status\r\n Order deny,allow\r\n Allow from all\r\n </Location>\r\n </VirtualHost>\r\n\r\n \r\n #其它用户自定义配置\r\n", 
    },
    {
      name: "httpd_common.conf",
      content: "\r\n #安全相关header\r\n \r\n # 自定义响应头\r\n \r\n # 重定向\r\n \r\n\r\n \r\n #代理配置\r\n \r\n\r\n #关闭正向代理\r\n ProxyRequests off\r\n ProxyPreserveHost on\r\n <Proxy *>\r\n Order deny,allow\r\n Allow from all\r\n </Proxy>\r\n\r\n \r\n",
    }
  ],
  resourceConfigList: [],
  proxyPointOut: "#示例\r\n#响应输出大小限制，若输出行较大，页面未能成功显示，请修改此值进行调试\r\n#SubstituteMaxLineLength 10m",
  resPointOut: "#静态资源的配置路径为：/apache/apache_apache_10010/app_static_files/prd\r\n#修改配置示例：\r\n#<Directory \"/apache/apache_apache_10010/app_static_files/prd\">\r\n\r\n#</Directory>\r\n"
}

const diffObject = {};

function generateDiff(obj1, obj2, path = '', visited = new Set()) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const commonKeys = _.union(keys1, keys2);

  for (const key of commonKeys) {
    const currentPath = path ? `${path}.${key}Diff` : `${key}Diff`; // 将差异标记的属性名称都改为 nameDiff

    if (
      _.isObject(obj1[key]) &&
      _.isObject(obj2[key]) &&
      !_.isArray(obj1[key])
    ) {
      // 检查是否存在循环引用
      if (visited.has(obj1[key]) || visited.has(obj2[key])) {
        // 已经访问过，不再递归
        continue;
      }

      visited.add(obj1[key]);
      visited.add(obj2[key]);

      generateDiff(obj1[key], obj2[key], currentPath, visited);

      visited.delete(obj1[key]);
      visited.delete(obj2[key]);
    } else if (_.isArray(obj1[key]) && _.isArray(obj2[key])) {
      // 深度对比数组元素
      const arrayDiff = [];
      for (let i = 0; i < Math.max(obj1[key].length, obj2[key].length); i++) {
        const elementDiff =
          obj1[key][i] === null
            ? false
            : !_.isEqual(obj1[key][i], obj2[key][i]);
        arrayDiff[i] = elementDiff;
      }
      if (arrayDiff.length > 0) {
        _.setWith(diffObject, currentPath, arrayDiff, Object);
      }
    } else {
      const valueDiff =
        obj1[key] === null ? false : !_.isEqual(obj1[key], obj2[key]);
      _.setWith(diffObject, currentPath, valueDiff, Object);
    }
  }
}

generateDiff(originalObject, modifiedObject);

// 替换数组中的 null 值为 false
const replaceNullWithFalse = (obj) => {
  _.forOwn(obj, (value, key) => {
    if (_.isArray(value)) {
      obj[key] = value.map((item) => (item === null ? false : item));
    } else if (_.isObject(value)) {
      replaceNullWithFalse(value);
    }
  });
};

replaceNullWithFalse(diffObject);

console.log(JSON.parse(JSON.stringify(diffObject, null, 2)));
