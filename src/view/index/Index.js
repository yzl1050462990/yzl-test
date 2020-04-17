import React, { Component } from 'react'
import './Index.scss';
import Position from '../../components/position/Position';

export default class Index extends Component {
    state = {
        positionList : [{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        },{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ,{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ,{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ,{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ,{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ,{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ,{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ,{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ,{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ,{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ,{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ,{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ,{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ,{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ,{   //假数据
            title : "银泰商业-高级测试专家",
            time : "58分钟",
            city : "杭州",
            href : "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP631277"
        }
        ],
        title : "最新职位",
        morehref : ""
    }
    render() {
        return (
            <div id="zhaopin-box">
                <header className="index-header-wrap">
                    <div className="index-header">
                        <div className="index-logo-box">
                            <a href="https://job.alibaba.com/zhaopin/index.htm">
                                <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" height="20" alt="logo" />
                            </a>
                            <i></i>
                        </div>
                        <nav className="index-nav-menu">
                            <li>社招官网</li>
                            <li><a href="/">首页</a></li>
                            <li><a href="/">社会招聘</a></li>
                            <li><a href="/">校园招聘</a></li>
                            <li><a href="/">了解阿里</a></li>
                            <li><a href="/">个人中心</a></li>
                        </nav>
                        <div className="index-login">
                            <span>欢迎来到阿里巴巴集团招聘！</span>
                            <a href="/">登录</a>
                            |
                            <a href="/">注册</a>
                        </div>
                    </div>

                </header>
                <main className="index-main">
                    <img className="index-banner" src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt=""></img>
                    <div className="index-filter"></div>
                    <div className="index-banner-text-box">
                        <div className="index-banner-text">
                            <p className="index-banner-p">If not now, when?</p>
                            <p className="index-banner-p">If not now, who?</p>
                            <p className="index-banner-lastp">此时此刻，非我莫属！</p>
                            <div  className="index-search-box">
                                <div  className="index-sarch">
                                    <input  type="text" placeholder="请输入职位关键词"/>
                                    <div className="index-submit">搜索</div>
                                </div>
                                <div className="index-search-filter"></div>
                            </div>
                            <div className="hot-text">
                                <li>热门搜索</li>
                                <li><a href="/">JAVA</a></li>
                                <li><a href="/">IOS</a></li>
                                <li><a href="/">数据</a></li>
                                <li><a href="/">安全</a></li>
                                <li><a href="/">搜索</a></li>    
                                <li><a href="/">算法</a></li>    
                                <li><a href="/">运营</a></li>    
                                <li><a href="/">视觉</a></li>    
                                <li><a href="/">交互</a></li>    
                                <li><a href="/">前端</a></li>    
                            </div>
                        </div>
                    </div>
                </main>
                <div className="newPosition">
                    <div className="newPosition-content">
                        <div className="newPosition-list">
                            {/* 该组件需要传递数据，datalist为轮播的数据内容，title为标题，morehref为更多链接的地址 */}
                            <Position datalist={this.state.positionList} title={this.state.list} morehref={this.state.morehref}> </Position>
                        </div>
                        <div className="newPosition-right">
                                <a  className="pic1" href="/">
                                    <img alt="" src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png"></img>
                                </a>                        
                                <a  className="pic2" href="/">
                                    <img alt="" src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg"></img>    
                                </a>                        
                        </div>
                    </div>
                </div>
                <footer className="index-footer">
                    <div className="index-footer-content">
		                    阿里巴巴集团 Copyright ©1999-2020 版权所有
                    </div>
                </footer>
            </div>
        )
    }
}
