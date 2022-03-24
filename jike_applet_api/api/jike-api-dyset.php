<?php   if ( ! defined( 'ABSPATH' )  ) { die; } 
/*
 * 即刻取图API
 * Author: CYC
 * WeChat: code0223
 * URL: https://www.wxshare.com/
 * Copyright 2022 www.wxshares.com All rights reserved.
 */
 
require_once 'jike-api-controller.php';
class JikeApiDySet extends JikeApiController
{
	public function __construct()
	{
		parent::__construct();
		$this->module = 'dyset';
	}

	public function register_routes()
	{
		//首页配置
		register_rest_route($this->namespace, '/' . $this->module . '/index', [
			[
			    'methods' => 'GET',
				'callback' => [$this, 'get_index'],
			]
		]);
		//通用配置
		register_rest_route($this->namespace, '/' . $this->module . '/config', [
			[
			    'methods' => 'GET',
				'callback' => [$this, 'get_config'],
			]
		]);
        //外链配置 		
		register_rest_route($this->namespace, '/' . $this->module . '/wlapp', [
			[
			    'methods' => 'GET',
				'callback' => [$this, 'get_wlapp'],
			]
		]);
	}
	/**
	 * 获取配置 首页
	 */
	public function get_index()
	{
		$data['topTextcolor'] = $this->option_value('top-textcolor');
		$data['title'] = $this->option_value('dy-title');
		$setdate['searchPlaceholder'] = $this->option_value('search-placeholder');
		$setdate['indexTags'] = $this->get_c_show('tags',$this->option_value('index-tag-show'));
		$setdate['indexClass'] =  $this->get_c_show('class',$this->option_value('dy-class-show'));
		$setdate['topImage'] = $this->option_value('top-image');
		$data['setdata'] = $setdate;
		return $this->return_success($data);
	}
	/**
	 * 获取一些通用配置
	*/
	public function get_config()
	{
	     $data['xcxColor'] = $this->option_value('xcx-color');
		$data['shareTitle'] = $this->option_value('share-title');
		$data['shareImage'] = $this->option_value('share-image')['url'];
		$data['xcxtitle'] = $this->option_value('dy-title');
		$data['wxewmTmage'] = $this->option_value('wxewm-image')['url'];
		$data['Vague'] = $this->option_value('dy-vague');
		$data['Insetid'] = $this->option_value('dy-insetid');
		$data['Banner'] = $this->option_value('dy-banner');
		$data['Rewarded'] = $this->option_value('dy-rewarded');
		return $this->return_success($data);
	}
	/**
	 * 获取外链配置
	*/
	public function get_wlapp()
	{
		$data['wlapp'] = $this->option_value('dypro-wlapp');
		return $this->return_success($data);
	}
}
