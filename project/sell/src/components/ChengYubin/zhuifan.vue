<template>
  <div class="zhuifsn">
    <div class="m-head">
      <div class="suspension" style="display:;">
        <div class="suspension-box">
          <div class="m-navbar">
            <a href="/" class="logo router-link-active">
              <i class="iconfont Navbar_logo"></i>
            </a>
            <div class="right">
              <a href="/search" class="search">
                <i class="iconfont ic_search_tab"></i>
                <span>这就是真正的纸片人？</span>
              </a>
              <a href="/space?from=headline" class="face">
                <img src="//static.hdslb.com/images/member/noface.gif" class="bfs-img" />
              </a>
            </div>
          </div>
          <div class="channel-menu">
            <div class="v-switcher">
              <div class="v-affix">
                <div style="display:none;"></div>
                <div class>
                  <div class="v-switcher__header">
                    <div class="v-switcher__header__before"></div>
                    <div class="v-switcher__header__after">
                      <i class="iconfont general_pulldown_s"></i>
                    </div>
                    <div class="v-switcher__header__tabs__wrap">
                      <ul
                        class="v-switcher__header__tabs__list v-switcher__header--start"
                        style="transition-duration: 300ms; transform: translateX(0px);"
                      >
                        <a href="/" class="v-switcher__header__tabs__item router-link-active">
                          <!---->
                          <span>首页</span>
                        </a>
                        <a href="/channel/1" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>动画</span>
                        </a>
                        <a
                          href="/channel/13"
                          class="v-switcher__header__tabs__item router-link-exact-active router-link-active is-active"
                        >
                          <!---->
                          <span>追番</span>
                        </a>
                        <a href="/channel/167" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>国创</span>
                        </a>
                        <a href="/channel/3" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>音乐</span>
                        </a>
                        <a href="/channel/129" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>舞蹈</span>
                        </a>
                        <a href="/channel/4" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>游戏</span>
                        </a>
                        <a href="/channel/36" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>知识</span>
                        </a>
                        <a href="/channel/188" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>数码</span>
                        </a>
                        <a href="/channel/160" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>生活</span>
                        </a>
                        <a href="/channel/119" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>鬼畜</span>
                        </a>
                        <a href="/channel/155" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>时尚</span>
                        </a>
                        <a href="/channel/5" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>娱乐</span>
                        </a>
                        <a href="/channel/181" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>影视</span>
                        </a>
                        <a href="/channel/177" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>纪录片</span>
                        </a>
                        <a href="/channel/23" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>电影</span>
                        </a>
                        <a href="/channel/11" class="v-switcher__header__tabs__item">
                          <!---->
                          <span>电视剧</span>
                        </a>
                        <a
                          href="https://live.bilibili.com/h5/"
                          class="v-switcher__header__tabs__item"
                        >
                          <!---->
                          <span>直播</span>
                        </a>
                        <a
                          href="https://h.bilibili.com/ywh/h5/home"
                          class="v-switcher__header__tabs__item"
                        >
                          <!---->
                          <span>相簿</span>
                        </a>
                        <div
                          class="v-switcher__header__anchor"
                          style="width: 34.2188px; transform: translateX(148.438px); transition-duration: 300ms;"
                        ></div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!---->
            </div>
            <div class="v-drawer v-drawer--top" style="top:48px;">
              <!---->
            </div>
          </div>
        </div>
      </div>
      <div class="m-channel-view">
        <div class="sub-channel-menu">
          <div class="sub-channel-box">
            <div class="v-switcher">
              <div class="v-affix">
                <div style="display: none;"></div>
                <div class>
                  <!-- <div class="v-switcher__header" style="hight:0px'">
                    <div class="v-switcher__header__before"></div>
                    <div class="v-switcher__header__after"></div>
                  </div> -->
                </div>
              </div>
              <!---->
            </div>
          </div>
        </div>
        <ul class="list111">
          <li class="zflist">
           <img src="img/icon1.png" alt="">
            番剧
          </li>
          <li class="zflist">
            <img src="img/icon2.png" alt="">
            国创
          </li>
          <li class="zflist">
            <img src="./img/icon3.png" alt="">
            时间表
          </li>
          <li class="zflist">
            <img src="img/icon4.png" alt="">
            索引表
          </li>
          <li class="zflist">
            <img src="img/icon5.png" alt="">
            免费看
          </li>
        </ul>
        <div class="channel-page">
          <div class="fl-box">
            <div class="flow-loader">
              <div class="video-list-box">
                <div class="video-list">
                  <div class="video-list-bar">
                    <span class="bt">番剧推荐</span>
                    <a href="/ranking/13" class="rank-more">
                      <i class="iconfont icon_fenqudaohang_paihangbang"></i> 排行榜
                      <i class="iconfont gengduo1"></i>
                    </a>
                  </div>
                  <div class="card-box">
                    <a href="/video/BV1ht4y1y7w6" class="v-card" index="0">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/111.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/111.jpg"
                            alt="【4月】辉夜大小姐想让我告白？～天才们的恋爱头脑战～  10【独家正版】"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 340.9万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 11.4万
                          </span>
                        </div>
                      </div>
                      <p class="title">【4月】辉夜大小姐想让我告白？～天才们的恋爱头脑战～ 10【独家正版】</p>
                    </a>
                    <a href="/video/BV1DC4y1a7Dm" class="v-card" index="1">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/222.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/222.jpg"
                            alt="【4月】转生成为了只有乙女游戏破灭Flag的邪恶大小姐 11"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 140.5万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 4.4万
                          </span>
                        </div>
                      </div>
                      <p class="title">【4月】转生成为了只有乙女游戏破灭Flag的邪恶大小姐 11</p>
                    </a>
                    <a href="/video/BV1ma4y1Y7jW" class="v-card" index="2">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/333.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/333.jpg"
                            alt="【4月】公主连结Re:Dive 11【独家正版】"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 89.5万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 2.7万
                          </span>
                        </div>
                      </div>
                      <p class="title">【4月】公主连结Re:Dive 11【独家正版】</p>
                    </a>
                    <a href="/video/BV1nv41167MP" class="v-card" index="3">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/444.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/444.jpg"
                            alt="ReLIFE 01"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 57.3万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 6414
                          </span>
                        </div>
                      </div>
                      <p class="title">ReLIFE 01</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="flow-loader-state" style="text-align: center; min-height: 1px;">
                <div class="flow-loader-state-no-more">
                  <!---->
                </div>
              </div>
            </div>
            <div class="flow-loader">
              <div class="video-list-box">
                <div class="video-list">
                  <div class="video-list-bar">
                    <span class="bt">连载动画</span>
                    <a href="/channel/13/33" class="more">
                      查看更多
                      <i class="iconfont gengduo1"></i>
                    </a>
                  </div>
                  <div class="card-box">
                    <a href="/video/BV1ht4y1y7w6" class="v-card" index="0">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/555.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/555.jpg"
                            alt="【4月】辉夜大小姐想让我告白？～天才们的恋爱头脑战～  10【独家正版】"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 340.9万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 11.4万
                          </span>
                        </div>
                      </div>
                      <p class="title">【4月】辉夜大小姐想让我告白？～天才们的恋爱头脑战～ 10【独家正版】</p>
                    </a>
                    <a href="/video/BV1DC4y1a7Dm" class="v-card" index="1">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/111.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/111.jpg"
                            alt="【4月】转生成为了只有乙女游戏破灭Flag的邪恶大小姐 11"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 140.5万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 4.4万
                          </span>
                        </div>
                      </div>
                      <p class="title">【4月】转生成为了只有乙女游戏破灭Flag的邪恶大小姐 11</p>
                    </a>
                    <a href="/video/BV1ma4y1Y7jW" class="v-card" index="2">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/222.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/222.jpg"
                            alt="【4月】公主连结Re:Dive 11【独家正版】"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 89.5万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 2.7万
                          </span>
                        </div>
                      </div>
                      <p class="title">【4月】公主连结Re:Dive 11【独家正版】</p>
                    </a>
                    <a href="/video/BV1BZ4y1H7b8" class="v-card" index="3">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/333.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/333.jpg"
                            alt="【4月】格莱普尼尔 11【独家正版】"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 46万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 8362
                          </span>
                        </div>
                      </div>
                      <p class="title">【4月】格莱普尼尔 11【独家正版】</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="flow-loader-state" style="text-align: center; min-height: 1px;">
                <div class="flow-loader-state-no-more">
                  <!---->
                </div>
              </div>
            </div>
            <div class="flow-loader">
              <div class="video-list-box">
                <div class="video-list">
                  <div class="video-list-bar">
                    <span class="bt">完结动画</span>
                    <a href="/channel/13/32" class="more">
                      查看更多
                      <i class="iconfont gengduo1"></i>
                    </a>
                  </div>
                  <div class="card-box">
                    <a href="/video/BV1nv41167MP" class="v-card" index="0">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/444.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/444.jpg"
                            alt="ReLIFE 01"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 57.3万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 6414
                          </span>
                        </div>
                      </div>
                      <p class="title">ReLIFE 01</p>
                    </a>
                    <a href="/video/BV17Z4y1W7Wd" class="v-card" index="1">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/555.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/555.jpg"
                            alt="ReLIFE 13"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 16.5万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 2872
                          </span>
                        </div>
                      </div>
                      <p class="title">ReLIFE 13</p>
                    </a>
                    <a href="/video/BV1Ja4y1v73X" class="v-card" index="2">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/111.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/111.jpg"
                            alt="ReLIFE 02"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 13.7万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 2675
                          </span>
                        </div>
                      </div>
                      <p class="title">ReLIFE 02</p>
                    </a>
                    <a href="/video/BV1FK411p7RX" class="v-card" index="3">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/222.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/222.jpg"
                            alt="ReLIFE 03"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 12万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 2184
                          </span>
                        </div>
                      </div>
                      <p class="title">ReLIFE 03</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="flow-loader-state" style="text-align: center; min-height: 1px;">
                <div class="flow-loader-state-no-more">
                  <!---->
                </div>
              </div>
            </div>
            <div class="flow-loader">
              <div class="video-list-box">
                <div class="video-list">
                  <div class="video-list-bar">
                    <span class="bt">资讯</span>
                    <a href="/channel/13/51" class="more">
                      查看更多
                      <i class="iconfont gengduo1"></i>
                    </a>
                  </div>
                  <div class="card-box">
                    <a href="/video/BV1aV411r7Pr" class="v-card" index="0">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/333.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/333.jpg"
                            alt="【7月】我的青春恋爱物语果然有问题。完 PV"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 12.4万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 221
                          </span>
                        </div>
                      </div>
                      <p class="title">【7月】我的青春恋爱物语果然有问题。完 PV</p>
                    </a>
                    <a href="/video/BV1vz4y197Xk" class="v-card" index="1">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/444.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/444.jpg"
                            alt="【4月】公主连结Re:Dive 第11话 预告【尽梨了字幕组】"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 7.1万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 54
                          </span>
                        </div>
                      </div>
                      <p class="title">【4月】公主连结Re:Dive 第11话 预告【尽梨了字幕组】</p>
                    </a>
                    <a href="/video/BV1XK4y1x7d3" class="v-card" index="2">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/555.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/555.jpg"
                            alt="【4月】辉夜大小姐想让我告白？～天才们的恋爱头脑战～伊井野弥子 PV"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 6.4万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 133
                          </span>
                        </div>
                      </div>
                      <p class="title">【4月】辉夜大小姐想让我告白？～天才们的恋爱头脑战～伊井野弥子 PV</p>
                    </a>
                    <a href="/video/BV1yV411r7L1" class="v-card" index="3">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/111.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/111.jpg"
                            alt="【TV动画】《通灵王》完全新作TV动画正式公布，将于2021年4月开播！"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 5.6万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 108
                          </span>
                        </div>
                      </div>
                      <p class="title">【TV动画】《通灵王》完全新作TV动画正式公布，将于2021年4月开播！</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="flow-loader-state" style="text-align: center; min-height: 1px;">
                <div class="flow-loader-state-no-more">
                  <!---->
                </div>
              </div>
            </div>
            <div class="flow-loader">
              <div class="video-list-box">
                <div class="video-list">
                  <div class="video-list-bar">
                    <span class="bt">官方延伸</span>
                    <a href="/channel/13/152" class="more">
                      查看更多
                      <i class="iconfont gengduo1"></i>
                    </a>
                  </div>
                  <div class="card-box">
                    <a href="/video/BV1W54y1Q7nN" class="v-card" index="0">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/222.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/222.jpg"
                            alt="关于我转生变成史莱姆这档事·下：我是一只不会吹口哨的史莱姆"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 9.4万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 337
                          </span>
                        </div>
                      </div>
                      <p class="title">关于我转生变成史莱姆这档事·下：我是一只不会吹口哨的史莱姆</p>
                    </a>
                    <a href="/video/BV1hz4y1Q7oB" class="v-card" index="1">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/333.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/333.jpg"
                            alt="【熟肉】假面骑士伊藤美来"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 4.7万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 43
                          </span>
                        </div>
                      </div>
                      <p class="title">【熟肉】假面骑士伊藤美来</p>
                    </a>
                    <a href="/video/BV1hp4y1D7WS" class="v-card" index="2">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/444.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/444.jpg"
                            alt="【中字】穷到赊账雨宫天，富可敌国悠木碧，援力满满东山闹，欠债地狱李依李"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 3.6万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 108
                          </span>
                        </div>
                      </div>
                      <p class="title">【中字】穷到赊账雨宫天，富可敌国悠木碧，援力满满东山闹，欠债地狱李依李</p>
                    </a>
                    <a href="/video/BV1HV411r7mn" class="v-card" index="3">
                      <div class="card">
                        <picture>
                          <source
                            type="image/webp"
                            srcset="img/555.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="img/555.jpg"
                            alt="【字幕】内田找松冈要情报 &amp; 内田：我才不是你姐！"
                            onload
                            class="pic"
                          />
                        </picture>
                        <div class="count">
                          <span>
                            <i class="iconfont icon_shipin_bofangshu"></i> 3.2万
                          </span>
                          <span>
                            <i class="iconfont icon_shipin_danmushu"></i> 68
                          </span>
                        </div>
                      </div>
                      <p class="title">【字幕】内田找松冈要情报 &amp; 内田：我才不是你姐！</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="flow-loader-state" style="text-align: center; min-height: 1px;">
                <div class="flow-loader-state-no-more">
                  <!---->
                </div>
              </div>
            </div>
          </div>
          <div class="m-footer">
            <p>信息网络传播视听节目许可证：0910417</p>
            <p>网络文化经营许可证 沪网文【2019】3804-274号</p>
            <p>广播电视节目制作经营许可证：（沪）字第01248号</p>
            <p>增值电信业务经营许可证 沪B2-20100043</p>
          </div>
        </div>
        <!---->
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "zhuifsn",
  data() {
    return {};
  },
  methods: {},
  mounted: function() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style scoped>
</style>
