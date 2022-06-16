<?php if ( ! defined( 'ABSPATH' )  ) { die; } 
/*
 * 即刻取图API
 * Author: CYC
 * WeChat: code0223
 * URL: https://www.wxshare.com/
 * Copyright 2022 www.wxshares.com All rights reserved.
 */
 
require_once PLUGIN_PATH . 'admin/jike-api-uitls.php';
$jikeapiuitls = new JikeApiUitls();
$topclass = $jikeapiuitls ->get_top_class_list();
$tags = $jikeapiuitls ->get_tags_list();
$prefix = 'jike-api';

$arrContextOptions=array( "ssl"=>array( "verify_peer"=>false, "verify_peer_name"=>false, )); 


$tcontent = file_get_contents(A_URL.'kftool/jikepic/top.php',false,stream_context_create($arrContextOptions));
$bcontent = file_get_contents(A_URL.'kftool/jikepic/bottom.php',false,stream_context_create($arrContextOptions));
CSF::createOptions( $prefix, array(
  'framework_title' => '极客API <small>by CYC</small>',
  'menu_title' => '极客API',
  'menu_slug'  => 'JikeAPI',
  'menu_icon' => null,
  'show_sub_menu' => false,
  'menu_position' => 6
) );
CSF::createSection( $prefix, array(
  'title'       => '即刻取图',
  'icon'        => 'fas fa-bolt',
  'description' => $tcontent,
  'fields'      => array(
    array(
      'type'    => 'content',
      'content' => $bcontent,
    ),

  )
) );
CSF::createSection( $prefix, array(
  'id'    => 'basic-controls',
  'title' => '基本设置',
  'icon'  => 'fas fa-plus-circle',
) );
CSF::createSection( $prefix, array(
  'parent'      => 'basic-controls',
  'title'       => '微信小程序',
  'icon'        => 'fas fa-tag',
  'description' => '微信小程序基本设置，这里控制微信端的一些信息',
  'fields'      => array(
     array(
      'id'    => 'weixin-title',
      'type'  => 'text',
      'title' => '小程序名称',
      'after'    => '<p>小程序名称</p>',
    ),
    array(
      'id'    => 'weixin-appid',
      'type'  => 'text',
      'title' => 'APPID',
      'after'    => '<p>微信小程序appid</p>',
    ),
    array(
      'id'      => 'weixin-appsecret',
      'type'    => 'text',
      'title'   => 'Appsecret',
      'after'    => '<p>微信小程序Appsecret</p>',
    ),
    array(
      'id'          => 'wx-class-show',
      'type'        => 'select',
      'title'       => '显示的分类',
      'chosen'      => true,
      'multiple'    => true,
      'sortable'    => true,
      'placeholder' => '选择分类',
      'options'     => $topclass,
      'default'     => array('1')
    ),
    array(
      'id'     => 'wxpro-wlapp',
      'type'   => 'group',
      'title'  => '外链推荐',
      'subtitle'  => '这会显示在程序右边侧栏中，不要添加太多，会超高',
      'accordion_title_prefix' => '',
      'fields' => array(
        array(
          'id'    => 'wlapp-name',
          'type'  => 'text',
          'title' => '外链名称',
          'subtitle'  => '这里用于你自己区分，前端就显示一图标',
        ),
        array(
          'id'    => 'wlapp-icon',
          'type'  => 'media',
          'title' => '图标',
          'after'    => '<p>显示在前端的正方图标</p>',
        ), 
        array(
          'id'    => 'wlapp-show',
          'type'  => 'switcher',
          'title' => '是否显示',
          'text_on'  => '显示',
          'text_off' => '隐藏',
        ),
        array(
            'id'         => 'wlapp-type',
            'type'       => 'button_set',
            'title'      => '外链类型',
            'options'    => array(
                '1'  => '其它小程序',
                '2'  => '视频号主页',
                '3'  => '打开文档',
                '4' => 'h5链接',
                '5' => '弹出图片',
            ),
        ),
        array(
          'id'    => 'wlapp-appid',
          'type'  => 'text',
          'title' => '其它小程序的appid/视频号ID',
          'subtitle'  => '这里请按外链类型填写',
        ),
        array(
          'id'    => 'wlapp-url',
          'type'  => 'text',
          'title' => 'URL链接',
          'after'    => '跳转其它小程序时，这里可以填写打开小程序的某路径如:pages/jike/jike,留空首页，打开文档时这里填写文档url',
        ),
         array(
      'id'    => 'wlapp-image',
      'type'  => 'media',
      'title' => '弹出的图片',
      'after'    => '<p>这张图片将全屏弹出，长按可扫公众号/个人微信二维码</p>',
    ), 
      ),
      'default' => array(
        array(
          'wlapp-name'     => '即刻取图',
          'wlapp-icon' => array(
                'alt'=> "",
                'description'=> "",
                'height'=> "500",
                'id'=> "38",
                'thumbnail'=> "https://jikepiccdn.jikebox.cn/wp-content/uploads/2022/03/kjfldsjmf-150x150.jpg",
                'title'=>"fe063d3d6357d259c56609513e35ebd5",
                'url'=> "https://jikepiccdn.jikebox.cn/wp-content/uploads/2022/03/kjfldsjmf.jpg",
                'width'=> "500"
              ),
          'wlapp-show' => true,
          'wlapp-type' => '1',
          'wlapp-appid' => 'wx0a748dd3c0424c93',
          'wlapp-url' => '',
          'wlapp-image' => '',
        ),
         
      )
    ),
    array(
      'id'    => 'wxewm-image',
      'type'  => 'media',
      'title' => '客服微信二维码，用户点击某些按钮会弹出',
      'after'    => '<p>这个在抖音端也会显示，毕竟，谁会用抖音来聊天呢</p>',
    ), 
    array(
          'id'    => 'weixin-vague',
          'type'  => 'switcher',
          'title' => '开启模糊图下载',
          'text_on'  => '开启',
          'text_off' => '隐藏',
          'label'       => '开启后，用户可以不看广告下载模糊图，看广告下载高清图',
    ),
    array(
      'id'    => 'weixin-insetid',
      'type'  => 'text',
      'title' => '插屏广告ID',
      'after'    => '<p>微信插屏广告ID，填0或留空将不显示</p>',
    ),
    array(
      'id'    => 'weixin-custom',
      'type'  => 'text',
      'title' => '原生广告ID',
      'after'    => '<p>微信原生广告ID，填0或留空将不显示</p>',
    ),
    array(
      'id'    => 'weixin-rewarded',
      'type'  => 'text',
      'title' => '激励视频广告ID',
      'after'    => '<p>微信激励广告ID，填0或留空将不显示</p>',
    ),
)
));
CSF::createSection( $prefix, array(
  'parent'      => 'basic-controls',
  'title'       => '抖音小程序',
  'icon'        => 'fa fa-video',
  'description' => '抖音小程序基本设置，这里控制抖音端的一些信息',
  'fields'      => array(
    array(
      'id'    => 'dy-title',
      'type'  => 'text',
      'title' => '小程序名称',
      'after'    => '<p>小程序名称</p>',
    ),
    array(
      'id'    => 'dy-appid',
      'type'  => 'text',
      'title' => 'APPID',
      'after'    => '<p>抖音小程序appid</p>',
    ),
    array(
      'id'      => 'dy-secret',
      'type'    => 'text',
      'title'   => 'Appsecret',
      'after'    => '<p>抖音小程序Appsecret</p>',
    ),
     array(
      'id'          => 'dy-class-show',
      'type'        => 'select',
      'title'       => '显示的分类',
      'chosen'      => true,
      'multiple'    => true,
      'sortable'    => true,
      'placeholder' => '点击选择分类',
      'options'     => $topclass,
      'default'     => array('1')
    ),
    array(
      'id'     => 'dypro-wlapp',
      'type'   => 'group',
      'title'  => '外链推荐',
      'after'    => '<p>抖音端跳转小程序需要将appid添加到前端的navigateToMiniProgramAppIdList列表</p>',
      'subtitle'  => '这会显示在程序右边侧栏中，不要添加太多，会超高',
      'accordion_title_prefix' => '',
      'fields' => array(
        array(
          'id'    => 'wlapp-name',
          'type'  => 'text',
          'title' => '外链名称',
          'subtitle'  => '这里用于你自己区分，前端就显示一图标',
        ),
        array(
          'id'    => 'wlapp-icon',
          'type'  => 'media',
          'title' => '图标',
          'after'    => '<p>显示在前端的正方图标</p>',
        ), 
        array(
          'id'    => 'wlapp-show',
          'type'  => 'switcher',
          'title' => '是否显示',
          'text_on'  => '显示',
          'text_off' => '隐藏',
        ),
        array(
            'id'         => 'wlapp-type',
            'type'       => 'button_set',
            'title'      => '外链类型',
            'options'    => array(
                '1'  => '其它小程序',
                '2'  => '跳转抖音号',
                '3'  => '打开文档',
                '4' => 'h5链接',
                '5' => '弹出图片',
            ),
            'after' => '<br><p><a href="https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/functional-plug-in/follow/" target="_blank">跳转抖音号说明</a></p>',
            
        ),
        array(
          'id'    => 'wlapp-appid',
          'type'  => 'text',
          'title' => '其它小程序的appid',
          'subtitle'  => '填写其它小程序的appid',
        ),
        array(
          'id'    => 'wlapp-url',
          'type'  => 'text',
          'title' => 'URL链接',
          'after'    => '跳转其它小程序时，这里可以填写打开小程序的某路径如:pages/jike/jike,留空首页，打开文档时这里填写文档url',
        ),
         array(
      'id'    => 'wlapp-image',
      'type'  => 'media',
      'title' => '弹出的图片',
      'after'    => '<p>这张图片将以框架方式弹出，在抖音端拥有“保存图片”与“取消按钮”</p>',
    ), 
      ),
      'default' => array(
        array(
          'wlapp-name'     => '即刻取图',
          'wlapp-icon' => array(
                 'alt'=> "",
                'description'=> "",
                'height'=> "500",
                'id'=> "38",
                'thumbnail'=> "https://jikepiccdn.jikebox.cn/wp-content/uploads/2022/03/kjfldsjmf-150x150.jpg",
                'title'=>"fe063d3d6357d259c56609513e35ebd5",
                'url'=> "https://jikepiccdn.jikebox.cn/wp-content/uploads/2022/03/kjfldsjmf.jpg",
                'width'=> "500"
              ),
          'wlapp-show' => true,
          'wlapp-type' => '1',
          'wlapp-appid' => 'tt7efb0846e1c5d9e601',
          'wlapp-url' => '',
          'wlapp-image' => '',
        ),
         
      )
    ),
    array(
          'id'    => 'dy-vague',
          'type'  => 'switcher',
          'title' => '开启模糊图下载',
          'text_on'  => '开启',
          'text_off' => '隐藏',
          'label'       => '开启后，用户可以不看广告下载模糊图，看广告下载高清图',
    ),
    array(
      'id'    => 'dy-insetid',
      'type'  => 'text',
      'title' => '插屏广告ID',
      'after'    => '<p>抖音插屏广告ID，填0或留空将不显示</p>',
    ),
    array(
      'id'    => 'dy-banner',
      'type'  => 'text',
      'title' => 'banner广告ID',
      'after'    => '<p>抖音banner广告ID，填0或留空将不显示</p>',
    ),
    array(
      'id'    => 'dy-rewarded',
      'type'  => 'text',
      'title' => '激励视频广告ID',
      'after'    => '<p>抖音激励广告ID，填0或留空将不显示</p>',
    ),
    )
));
CSF::createSection( $prefix, array(
  'parent'      => 'basic-controls',
  'title'       => '快手小程序',
  'icon'        => 'fa fa-video',
  'description' => '快手小程序基本设置，这里控制快手端的一些信息',
  'fields'      => array(
    array(
      'id'    => 'ks-title',
      'type'  => 'text',
      'title' => '小程序名称',
      'after'    => '<p>小程序名称</p>',
    ),
    array(
      'id'    => 'ks-appid',
      'type'  => 'text',
      'title' => 'APPID',
      'after'    => '<p>快手小程序appid</p>',
    ),
    array(
      'id'      => 'ks-secret',
      'type'    => 'text',
      'title'   => 'Appsecret',
      'after'    => '<p>快手小程序Appsecret</p>',
    ),
     array(
      'id'          => 'ks-class-show',
      'type'        => 'select',
      'title'       => '显示的分类',
      'chosen'      => true,
      'multiple'    => true,
      'sortable'    => true,
      'placeholder' => '点击选择分类',
      'options'     => $topclass,
      'default'     => array('1')
    ),
    array(
      'id'     => 'kspro-wlapp',
      'type'   => 'group',
      'title'  => '外链推荐',
      'after'    => '<p>快手的业务域名添加无需验证，可以多增加H5链接扩展功能</p>',
      'subtitle'  => '这会显示在程序右边侧栏中，不要添加太多，会超高',
      'accordion_title_prefix' => '',
      'fields' => array(
        array(
          'id'    => 'wlapp-name',
          'type'  => 'text',
          'title' => '外链名称',
          'subtitle'  => '这里用于你自己区分，前端就显示一图标',
        ),
        array(
          'id'    => 'wlapp-icon',
          'type'  => 'media',
          'title' => '图标',
          'after'    => '<p>显示在前端的正方图标</p>',
        ), 
        array(
          'id'    => 'wlapp-show',
          'type'  => 'switcher',
          'title' => '是否显示',
          'text_on'  => '显示',
          'text_off' => '隐藏',
        ),
        array(
            'id'         => 'wlapp-type',
            'type'       => 'button_set',
            'title'      => '外链类型',
            'options'    => array(
                '1'  => '其它小程序',
                '3'  => '打开文档',
                '4' => 'h5链接',
                '5' => '弹出图片',
            ),
            'after' => '',
            
        ),
        array(
          'id'    => 'wlapp-appid',
          'type'  => 'text',
          'title' => '其它小程序的appid',
          'subtitle'  => '填写其它小程序的appid',
        ),
        array(
          'id'    => 'wlapp-url',
          'type'  => 'text',
          'title' => 'URL链接',
          'after'    => '跳转其它小程序时，这里可以填写打开小程序的某路径如:pages/jike/jike,留空首页，打开文档时这里填写文档url',
        ),
         array(
      'id'    => 'wlapp-image',
      'type'  => 'media',
      'title' => '弹出的图片',
      'after'    => '<p>这张图片将以框架方式弹出，在抖音端拥有“保存图片”与“取消按钮”</p>',
    ), 
      ),
      'default' => array(
        array(
          'wlapp-name'     => '即刻取图',
          'wlapp-icon' => array(
                 'alt'=> "",
                'description'=> "",
                'height'=> "500",
                'id'=> "38",
                'thumbnail'=> "https://jikepiccdn.jikebox.cn/wp-content/uploads/2022/03/kjfldsjmf-150x150.jpg",
                'title'=>"fe063d3d6357d259c56609513e35ebd5",
                'url'=> "https://jikepiccdn.jikebox.cn/wp-content/uploads/2022/03/kjfldsjmf.jpg",
                'width'=> "500"
              ),
          'wlapp-show' => true,
          'wlapp-type' => '1',
          'wlapp-appid' => 'ks704813342385170271',
          'wlapp-url' => '',
          'wlapp-image' => '',
        ),
         
      )
    ),
    array(
          'id'    => 'ks-vague',
          'type'  => 'switcher',
          'title' => '开启模糊图下载',
          'text_on'  => '开启',
          'text_off' => '隐藏',
          'label'       => '开启后，用户可以不看广告下载模糊图，看广告下载高清图',
    ),
    // array(
    //   'id'    => 'ks-insetid',
    //   'type'  => 'text',
    //   'title' => '插屏广告ID',
    //   'after'    => '<p>抖音插屏广告ID，填0或留空将不显示</p>',
    // ),
    // array(
    //   'id'    => 'ks-banner',
    //   'type'  => 'text',
    //   'title' => 'banner广告ID',
    //   'after'    => '<p>抖音banner广告ID，填0或留空将不显示</p>',
    // ),
    // array(
    //   'id'    => 'ks-rewarded',
    //   'type'  => 'text',
    //   'title' => '激励视频广告ID',
    //   'after'    => '<p>抖音激励广告ID，填0或留空将不显示</p>',
    // ),
    )
));
CSF::createSection( $prefix, array(
  'id'    => 'curre-controls',
  'title' => '通用配置',
  'icon'  => 'fas fa-plus-circle',
) );
CSF::createSection( $prefix, array(
  'parent'      => 'curre-controls',
  'title'       => '通用配置',
  'icon'        => 'fa fa-columns',
  'description' => '这里的配置是多端通用的',
  'fields'      => array(
     array(
      'id'    => 'oss-url',
      'type'  => 'text',
      'title' => '云存储域名',
      'after'    => '<p>如果你使用了云存储，需要在这里填写云存储的域名，例：www.wxshares.com，不带http与斜杠</p>',
    ),
     array(
      'id'    => 'search-placeholder',
      'type'  => 'text',
      'title' => '搜索提示',
      'after'    => '<p>搜索框中提示文字</p>',
    ),
     array(
      'id'          => 'index-tag-show',
      'type'        => 'select',
      'title'       => '搜索下方推荐编号（标签）',
      'chosen'      => true,
      'multiple'    => true,
      'sortable'    => true,
      'placeholder' => '点击选择标签',
      'options'     => $tags,
      'default'     => array(),
      'after'    => '<p></p>',
    ),
    array(
      'id'    => 'share-title',
      'type'  => 'text',
      'title' => '默认分享标题',
      'after'    => '<p>默认分享标题，文章页的分享标题为【文章标题 - 小程序名称】</p>',
    ),
    array(
      'id'    => 'share-image',
      'type'  => 'media',
      'title' => '默认分享封面',
      'after'    => '<p>文章页分享标题为文章特色图片，没有会选择文章头图</p>',
    ),
    array(
      'id'       => 'page-offset',
      'type'     => 'spinner',
      'title'    => 'offset',
      'subtitle' => '最大:100 | 最小:12',
      'after'    => '<p>每页加载的文章数量，在分类页与标签（编号）页每次加载文章的数量已达到分页效果，不要小于12</p>',
      'max'      => 100,
      'min'      => 0,
      'step'     => 1,
      'default'  => 15,
    ),
  )
));
CSF::createSection( $prefix, array(
  'parent'      => 'curre-controls',
  'title'       => '样式管理',
  'icon'        => 'fa fa-picture-o',
  'description' => '这里的配置是多端通用的，一些颜色图片的配置',
  'fields'      => array(
    array(
      'id'    => 'xcx-color',
      'type'  => 'color',
      'title' => '小程序配色',
      'after'    => '<p>小程序整体配色，包括一些标题文字等颜色</p>',
    ),
    array(
      'id'      => 'top-textcolor',
      'type'    => 'radio',
      'title'   => '顶部标题栏元素颜色',
      'options' => array(
        '#000000' => '黑色',
        '#ffffff' => '白色',
      ),
      'after'    => '<p>注意，这里仅在抖音端未获得页面结构自定义功能时有效</p>',
     ),
    array(
      'id'    => 'top-image',
      'type'  => 'media',
      'title' => '首页顶部图片',
      'after'    => '<p>最佳比例：375*200</p>',
    ), 
    ),

  ));
CSF::createSection( $prefix, array(
  'title'       => '备份配置',
  'icon'        => 'fas fa-shield-alt',
  'description' => '这里可以备份你的配置，自己存到本地吧',
  'fields'      => array(

    array(
      'type' => 'backup',
    ),

  )
) );
