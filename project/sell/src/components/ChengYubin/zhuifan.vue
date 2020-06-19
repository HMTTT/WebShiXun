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
            <img src="./img/icon2.png" alt="">
            国创
          </li>
          <li class="zflist">
            <img src="./img/icon3.png" alt="">
            时间表
          </li>
          <li class="zflist">
            <img src="./img/icon4.png" alt="">
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
                            srcset="./img/111.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/111.jpg"
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
                            srcset="./img/222.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/222.jpg"
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
                            srcset="./img/333.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/333.jpg"
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
                            srcset="./img/444.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/444.jpg"
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
                            srcset="./img/555.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/555.jpg"
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
                            srcset="./img/111.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/111.jpg"
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
                            srcset="./img/222.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/222.jpg"
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
                            srcset="./img/333.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/333.jpg"
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
                            srcset="./img/444.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/444.jpg"
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
                            srcset="./img/555.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/555.jpg"
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
                            srcset="./img/111.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/111.jpg"
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
                            srcset="./img/222.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/222.jpg"
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
                            srcset="./img/333.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/333.jpg"
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
                            srcset="./img/444.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/444.jpg"
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
                            srcset="./img/555.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/555.jpg"
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
                            srcset="./img/111.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/111.jpg"
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
                            srcset="./img/222.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/222.jpg"
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
                            srcset="./img/333.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/333.jpg"
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
                            srcset="./img/444.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/444.jpg"
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
                            srcset="./img/555.jpg"
                            onload
                            class="pic"
                          />
                          <img
                            src="./img/555.jpg"
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
<style>
* {
    box-sizing: border-box;
}

body,
html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
    background-color: #fff;
    margin: 0 auto;
    font-family: PingFangSC-Regular;
}

body.no-scroll {
    position: fixed;
    overflow: hidden;
}

a {
    text-decoration: none;
}

.zflist {
    width: 50px;
    height: 60px;
    float: left;
    margin-left: 32px;
    font-size: 12px;
    text-align: center;
    border-radius: 50px;
}

.zflist img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
}

.list111 {
    width: 100%;
    height: 50px;
    margin-left: -4px;
    margin-top: 30px;
    margin-bottom: 30px;
}

* {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
}

.svg-icon {
    fill: currentColor;
}

button,
input {
    outline: none;
}

.bfs-img {
    background: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/loading.png) no-repeat 50%;
    background-size: contain;
    background-color: #e7e7e7;
}

.m-navbar-new {
    height: 11.73333vw;
    line-height: 11.73333vw;
    padding: 0 3.2vw 0 4.8vw;
    font-size: 0;
    background: #fff;
}

.m-navbar-new .logo {
    float: left;
    height: 11.73333vw;
}

.m-navbar-new .logo i {
    color: #fb7299;
    font-size: 7.46667vw;
}

.m-navbar-new .right {
    float: right;
    height: 11.73333vw;
}

.m-navbar-new .right .search {
    margin-right: 5.86667vw;
    width: 5.86667vw;
    height: 5.86667vw;
    display: inline-block;
    margin-top: 0.53333vw;
}

.m-navbar-new .right .search i {
    color: #ccc;
    font-size: 5.86667vw;
}

.m-navbar-new .right .face {
    vertical-align: top;
    width: 6.4vw;
    height: 6.4vw;
    display: inline-block;
    margin-top: 2.66667vw;
}

.m-navbar-new .right .face img {
    width: 100%;
    height: 100%;
    border-radius: 3.2vw;
}

.m-navbar-new .right .openapp {
    margin-left: 3.2vw;
    width: 21.33333vw;
    height: 6.4vw;
    margin-top: 2.66667vw;
    color: #fb7299;
    border: 1px solid #fb7299;
    background: #fff;
    border-radius: 1.06667vw;
    font-size: 3.46667vw;
    vertical-align: top;
}

.v-card-single {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 1.6vw;
}

.v-card-single:first-child {
    padding-top: 3.2vw;
}

.v-card-single .rank-num {
    width: 8.53333vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #666;
    text-indent: 1.33333vw;
}

.v-card-single .rank-num.rank-cup {
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: 0;
}

.v-card-single .rank-num.rank-1 {
    background-image: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/rank1.png);
}

.v-card-single .rank-num.rank-2 {
    background-image: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/rank2.png);
}

.v-card-single .rank-num.rank-3 {
    background-image: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/rank3.png);
}

.v-card-single .card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

.v-card-single .card .pic-box {
    position: relative;
    width: 37.33333vw;
    background-color: #f3f3f3;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=);
    background-size: 36%;
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 1.06667vw;
    overflow: hidden;
}

.v-card-single .card .pic-box:before {
    display: block;
    width: 100%;
    padding-bottom: 56.25%;
    content: "";
}

.v-card-single .card .pic-box .pic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.v-card-single .card .pic-box .duration {
    position: absolute;
    right: 1.06667vw;
    bottom: 1.06667vw;
    font-size: 3.2vw;
    padding: 0 0.53333vw;
    color: #fff;
    border-radius: 0.53333vw;
    background: rgba(0, 0, 0, 0.5);
}

.v-card-single .card .info {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 3.2vw;
    color: #999;
    margin-left: 2.66667vw;
}

.v-card-single .card .info .title {
    font-size: 3.73333vw;
    color: #222;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /*! autoprefixer: ignore next */
    -webkit-box-orient: vertical;
    margin-bottom: 2.13333vw;
}

.v-card-single .card .info .title em {
    color: #fb7299;
    font-style: normal;
}

.v-card-single .card .info .author {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 1.06667vw;
}

.v-card-single .card .info .author,
.v-card-single .card .info .count,
.v-card-single .card .info .count span {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.v-card-single .card .info .count span {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.v-card-single .card .info .count span:first-child {
    margin-right: 2.66667vw;
}

.v-card-single .card .info .iconfont {
    margin-right: 1.33333vw;
}

.m-error-page {
    background: #f4f4f4;
}

.m-error-page .error-info {
    padding: 12vw 0 18.66667vw;
    text-align: center;
}

.m-error-page .error-info img {
    display: block;
    margin: 0 auto;
    width: 40vw;
}

.m-error-page .error-info .reason {
    margin-top: 8vw;
    color: #999;
    font-size: 3.2vw;
    line-height: 4.8vw;
}

.m-error-page .error-info .open-app-btn {
    margin-top: 6.66667vw;
}

.m-error-page .error-info .open-app-btn button {
    width: 56vw;
    height: 9.6vw;
    line-height: 9.6vw;
    color: #fff;
    background: #fb7299;
    border: none;
    border-radius: 1.06667vw;
    font-size: 3.73333vw;
    font-weight: 700;
}

.m-error-page .reco-title {
    padding-left: 3.2vw;
    font-size: 4vw;
    font-weight: 400;
    line-height: 5.6vw;
    height: 5.6vw;
}

.m-error-page .reco-list {
    margin-top: 2.4vw;
    padding: 0 1.6vw;
}

.m-error-page .bottom-open-app {
    margin-top: 3.2vw;
    height: 10.66667vw;
    line-height: 10.66667vw;
    color: #fb7299;
    background: #e7e7e7;
    text-align: center;
    font-size: 3.46667vw;
}

.m-video-player {
    position: relative;
    width: 100%;
    height: 0;
    background-color: #f4f4f4;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    padding-top: 56.25%;
}

.m-video-player .pic,
.m-video-player .player {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.m-video-player {
    position: relative;
    width: 100%;
    height: 0;
    background-color: #f4f4f4;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    padding-top: 56.25%;
}

.m-video-player .pic,
.m-video-player .player {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.m-video2-openapp {
    height: 9.6vw;
    width: 93.6vw;
    line-height: 9.6vw;
    background: #fb7299;
    border: none;
    border-radius: 4.8vw;
    color: #fff;
    font-size: 3.73333vw;
    text-align: center;
    margin: 4vw auto 0;
}

.m-video-info-new {
    margin-top: 4vw;
    padding: 0 3.2vw;
    font-size: 0;
}

.m-video-info-new.gameMode {
    margin-bottom: 2.93333vw;
}

.m-video-info-new .title .left {
    width: 86.66667vw;
    float: left;
    position: relative;
}

.m-video-info-new .title .left .label {
    position: absolute;
    display: inline-block;
    font-size: 0;
    padding: 0 1.6vw;
    height: 5.33333vw;
    line-height: 5.33333vw;
    color: #fb7299;
    background: #f4f4f4;
    border-radius: 3.2vw;
    vertical-align: middle;
    margin-top: 0.53333vw;
}

.m-video-info-new .title .left .label i {
    font-size: 4.26667vw;
    margin-left: -1.06667vw;
}

.m-video-info-new .title .left .label span {
    font-size: 3.2vw;
}

.m-video-info-new .title .left .label i,
.m-video-info-new .title .left .label span {
    vertical-align: middle;
}

.m-video-info-new .title .left h1 {
    font-size: 4.26667vw;
    font-weight: 400;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 86.66667vw;
    height: 6.4vw;
    line-height: 6.4vw;
}

.m-video-info-new .title .left h1.spread {
    white-space: normal;
    height: auto;
}

.m-video-info-new .title .left h1.has-activity {
    padding-left: 12.26667vw;
}

.m-video-info-new .title .left h1.isHot {
    padding-left: 14.66667vw;
}

.m-video-info-new .title .right {
    float: right;
    transition: -webkit-transform 0.1s;
    -webkit-transition: -webkit-transform 0.1s;
    transition: transform 0.1s;
    transition: transform 0.1s, -webkit-transform 0.1s;
    -webkit-transform-origin: center;
    transform-origin: center;
}

.m-video-info-new .title .right.spread {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.m-video-info-new .title .right i {
    color: #999;
    font-size: 5.33333vw;
}

.m-video-info-new .title .clear {
    clear: both;
}

.m-video-info-new .data {
    font-size: 3.2vw;
    margin-top: 2.13333vw;
    color: #999;
}

.m-video-info-new .data span {
    display: inline-block;
    vertical-align: middle;
}

.m-video-info-new .data .up {
    color: #212121;
    margin-right: 4.8vw;
}

.m-video-info-new .data .up .ic_up,
.m-video-info-new .data .up span {
    vertical-align: middle;
}

.m-video-info-new .data .danmaku,
.m-video-info-new .data .view {
    margin-right: 2.13333vw;
}

.m-video-info-new .fold-container {
    height: 0;
    overflow: hidden;
    -webkit-transition: height 0.3s;
    transition: height 0.3s;
}

.m-video-info-new .fold-container .fold-area .copyright {
    font-size: 3.2vw;
    color: #999;
    line-height: 4.8vw;
    margin-top: 1.33333vw;
}

.m-video-info-new .fold-container .fold-area .copyright i {
    font-size: 3.73333vw;
    color: #fb7299;
    vertical-align: middle;
    margin-right: 0.8vw;
}

.m-video-info-new .fold-container .fold-area .copyright span {
    vertical-align: middle;
}

.m-video-info-new .fold-container .fold-area .desc {
    font-size: 3.2vw;
    line-height: 4.8vw;
    color: #999;
    padding-top: 1.33333vw;
    white-space: pre-wrap;
}

.m-video-info-new .fold-container .fold-area .channel {
    margin-top: 2.13333vw;
    font-size: 3.2vw;
}

.m-video-info-new .fold-container .fold-area .channel a {
    color: #fb7299;
    margin-right: 1.33333vw;
}

.m-video-info-new .fold-container .fold-area .channel span {
    color: #ccc;
    margin-right: 1.33333vw;
}

.m-video-info-new .fold-container .fold-area .tags {
    margin-top: 2.93333vw;
}

.m-video-info-new .fold-container .fold-area .tags a {
    display: inline-block;
    padding: 2.13333vw 4.8vw;
    font-size: 3.2vw;
    color: #505050;
    background: #f4f4f4;
    margin-bottom: 1.6vw;
    margin-right: 2.66667vw;
    border-radius: 26.66667vw;
}

.sub-channel-menu {
    height: 11.73333vw
}

.sub-channel-box {
    position: fixed;
    z-index: 99;
    top: 22.4vw;
    left: 0;
    right: 0
}

body.hideMenu .sub-channel-box {
    top: 0
}

.channel-page {
    padding-top: 2.66667vw
}

.channel-page .fl-box {
    min-height: 266.66667vw
}

.channel-page .fl-box .video-list-box {
    padding: 0 1.33333vw
}

.video-list-bar {
    padding: 1.33333vw 2.66667vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: 3.73333vw
}

.video-list-bar .bt {
    font-size: 4vw
}

.video-list-bar .rank-more {
    color: #ffa726
}

.video-list-bar .more {
    color: #999
}

.float-bottom-bar {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .8);
    color: #fff;
    padding: 2.66667vw;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.float-bottom-bar,
.float-bottom-bar .info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.float-bottom-bar .info img {
    width: 9.33333vw;
    height: 9.33333vw;
    margin: 0 2.66667vw
}

.float-bottom-bar .info .txt {
    font-size: 3.73333vw
}

.float-bottom-bar .info .txt p:last-child {
    font-size: 3.2vw;
    color: #999
}

.float-bottom-bar .btn {
    background-color: #fb7299;
    color: #fff;
    font-size: 3.73333vw;
    border-radius: 1.06667vw;
    padding: 1.06667vw 2.13333vw
}


/*# sourceMappingURL=mstation.6.f738f064759e5c15b8aefd31083c38878a6552ac.css.map*/

.m-video2-toolbar {
    padding: 2.93333vw 3.2vw;
    color: #999;
    font-size: 0;
}

.m-video2-toolbar .left {
    float: left;
}

.m-video2-toolbar .left .toolbar-item {
    margin-right: 5.33333vw;
}

.m-video2-toolbar .right {
    float: right;
}

.m-video2-toolbar .toolbar-item i {
    margin-right: 1.33333vw;
    font-size: 5.33333vw;
    color: #757575;
    vertical-align: middle;
}

.m-video2-toolbar .toolbar-item span {
    font-size: 2.66667vw;
    vertical-align: middle;
}

.m-video2-toolbar .clear {
    clear: both;
}

.v-card {
    display: block;
}

.v-card .card {
    position: relative;
    background-color: #f3f3f3;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=);
    background-size: 36%;
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 0.53333vw;
    overflow: hidden;
}

.v-card .card:before {
    display: block;
    width: 100%;
    padding-bottom: 56.25%;
    content: "";
}

.v-card .card .pic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.v-card .card .count {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 3.2vw;
    padding: 1.33333vw 1.6vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: #fff;
    background: -webkit-gradient( linear, left bottom, left top, from(rgba(0, 0, 0, 0.85)), to(transparent));
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
}

.v-card .card .count .iconfont {
    margin-right: 1.33333vw;
}

.v-card .card .count span {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.v-card .title {
    font-size: 3.2vw;
    color: #212121;
    margin-top: 1.6vw;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /*! autoprefixer: ignore next */
    -webkit-box-orient: vertical;
}

.v-card-toapp {
    display: block;
}

.v-card-toapp .card {
    position: relative;
    background-color: #f3f3f3;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=);
    background-size: 36%;
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 1.6vw;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.v-card-toapp .card:before {
    display: block;
    width: 100%;
    padding-bottom: 56.25%;
    content: "";
}

.v-card-toapp .card .pic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.v-card-toapp .card .count {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 3.2vw;
    padding: 1.33333vw 1.6vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: #fff;
    background: -webkit-gradient( linear, left bottom, left top, from(rgba(0, 0, 0, 0.85)), to(transparent));
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
}

.v-card-toapp .card .count .iconfont {
    font-size: 5.06667vw;
}

.v-card-toapp .card .count .left {
    -webkit-transform: scale(0.88);
    transform: scale(0.88);
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
}

.v-card-toapp .card .count .left .item {
    margin-right: 1.33333vw;
    height: 5.33333vw;
    line-height: 5.33333vw;
}

.v-card-toapp .card .count .left i {
    vertical-align: sub;
}

.v-card-toapp .card .count .left .num {
    vertical-align: baseline;
    vertical-align: initial;
}

.v-card-toapp .card .count .duration {
    position: absolute;
    height: 5.6vw;
    line-height: 5.6vw;
    right: 1.6vw;
    -webkit-transform: scale(0.88);
    transform: scale(0.88);
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
}

.v-card-toapp .title {
    font-size: 3.2vw;
    color: #212121;
    margin-top: 1.6vw;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /*! autoprefixer: ignore next */
    -webkit-box-orient: vertical;
}

.v-card-toapp .open-app {
    position: absolute;
    right: 1.6vw;
    top: 1.6vw;
    padding: 1px 1.06667vw;
    display: inline-block;
    border-radius: 0.53333vw;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 2.66667vw;
}

.v-card-toapp-old {
    display: block;
}

.v-card-toapp-old .card {
    position: relative;
    background-color: #f3f3f3;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=);
    background-size: 36%;
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 1.6vw;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.v-card-toapp-old .card:before {
    display: block;
    width: 100%;
    padding-bottom: 56.25%;
    content: "";
}

.v-card-toapp-old .card .pic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.v-card-toapp-old .card .count {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 3.2vw;
    padding: 1.33333vw 1.6vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: #fff;
    background: -webkit-gradient( linear, left bottom, left top, from(rgba(0, 0, 0, 0.85)), to(transparent));
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
}

.v-card-toapp-old .card .count .iconfont {
    margin-right: 0.8vw;
    vertical-align: bottom;
}

.v-card-toapp-old .card .count .left {
    -webkit-transform: scale(0.88);
    transform: scale(0.88);
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
}

.v-card-toapp-old .card .count .left .item {
    margin-right: 1.33333vw;
}

.v-card-toapp-old .card .count .left .num,
.v-card-toapp-old .card .count .left i {
    vertical-align: middle;
}

.v-card-toapp-old .card .count .duration {
    position: absolute;
    right: 1.6vw;
    bottom: 1.33333vw;
    -webkit-transform: scale(0.88);
    transform: scale(0.88);
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
}

.v-card-toapp-old .title {
    font-size: 3.2vw;
    color: #212121;
    line-height: 4.53333vw;
    height: 9.06667vw;
    margin-top: 1.6vw;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /*! autoprefixer: ignore next */
    -webkit-box-orient: vertical;
}

.v-card-toapp-old .open-app {
    margin-top: 1.33333vw;
    padding: 0.53333vw 1.6vw;
    display: inline-block;
    border: 1px solid #fb7299;
    border-radius: 0.53333vw;
    color: #fb7299;
    font-size: 2.66667vw;
    -webkit-transform: scale(0.77);
    transform: scale(0.77);
    -webkit-transform-origin: left top;
    transform-origin: left top;
}

.m-search-bangumi-item {
    display: block;
    padding: 3.2vw;
}

.m-search-bangumi-item .cover {
    display: inline-block;
    width: 20.8vw;
    height: 27.73333vw;
    float: left;
}

.m-search-bangumi-item .cover img {
    width: 100%;
    height: 100%;
    border-radius: 1.06667vw;
}

.m-search-bangumi-item .info {
    display: inline-block;
    margin-left: 3.2vw;
    color: #212121;
    width: 69.33333vw;
    font-size: 0;
}

.m-search-bangumi-item .info .label svg {
    width: 5.33333vw;
    height: 5.33333vw;
}

.m-search-bangumi-item .info .label span,
.m-search-bangumi-item .info .label svg {
    font-size: 3.73333vw;
    vertical-align: middle;
}

.m-search-bangumi-item .info .label span {
    margin-left: 0.8vw;
}

.m-search-bangumi-item .info .title {
    margin-top: 2.66667vw;
    font-size: 3.73333vw;
}

.m-search-bangumi-item .info .title em {
    color: #fb7299;
    font-style: normal;
}

.m-search-bangumi-item .clear {
    clear: both;
}

.m-search-user-item {
    display: block;
    padding: 3.2vw;
}

.m-search-user-item .cover {
    display: inline-block;
    width: 16vw;
    height: 16vw;
    float: left;
}

.m-search-user-item .cover img {
    width: 100%;
    height: 100%;
    border-radius: 8vw;
}

.m-search-user-item .info {
    display: inline-block;
    margin-left: 3.2vw;
    color: #212121;
    width: 69.33333vw;
    font-size: 0;
}

.m-search-user-item .info .name {
    font-size: 3.73333vw;
    height: 5.33333vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.m-search-user-item .info .sign,
.m-search-user-item .info .stat {
    font-size: 3.2vw;
    height: 3.2vw;
    line-height: 3.2vw;
    overflow: visible;
    margin-top: 1.6vw;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.m-search-user-item .clear {
    clear: both;
}

.m-search-film-item {
    display: block;
    padding: 3.2vw;
}

.m-search-film-item .cover {
    display: inline-block;
    width: 20.8vw;
    height: 27.73333vw;
    float: left;
}

.m-search-film-item .cover img {
    width: 100%;
    height: 100%;
    border-radius: 1.06667vw;
}

.m-search-film-item .info {
    display: inline-block;
    margin-left: 3.2vw;
    color: #212121;
    width: 69.33333vw;
    font-size: 0;
}

.m-search-film-item .info .label svg {
    width: 5.33333vw;
    height: 5.33333vw;
}

.m-search-film-item .info .label span,
.m-search-film-item .info .label svg {
    font-size: 3.73333vw;
    vertical-align: middle;
}

.m-search-film-item .info .label span {
    margin-left: 0.8vw;
}

.m-search-film-item .info .title {
    font-size: 3.73333vw;
    height: 5.33333vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.m-search-film-item .info .title em {
    color: #fb7299;
    font-style: normal;
}

.m-search-film-item .info .area,
.m-search-film-item .info .cv,
.m-search-film-item .info .staff {
    font-size: 3.2vw;
    height: 3.2vw;
    line-height: 3.2vw;
    overflow: visible;
    margin-top: 2.13333vw;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.m-search-film-item .clear {
    clear: both;
}

.video-list .card-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.video-list .card-box .v-card,
.video-list .card-box .v-card-toapp,
.video-list .card-box .v-card-toapp-old {
    width: 50%;
    padding: 2.13333vw 1.33333vw;
    display: inline-block;
}

.video-list .card-box .v-card-toapp {
    padding: 1.86667vw 1.33333vw;
}

.video-list-skeleton {
    padding: 0 1.33333vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.video-list-skeleton .video-item-skeleton {
    padding: 1.33333vw;
    width: 50%;
}

.video-list-skeleton .video-item-skeleton div {
    width: 100%;
    padding-bottom: 56.25%;
    background-color: #eee;
}

.video-list-skeleton .video-item-skeleton p {
    height: 4.26667vw;
    background-color: #eee;
    margin: 1.33333vw 0;
    width: 80%;
}

.video-list-skeleton .video-item-skeleton p:last-child {
    width: 50%;
}

.single-card-skeleton {
    padding: 2.66667vw 1.33333vw;
}

.single-card-skeleton .video-item-skeleton {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 1.33333vw;
}

.single-card-skeleton .video-item-skeleton .m1 {
    width: 40%;
    background-color: #eee;
    border-radius: 0.53333vw;
}

.single-card-skeleton .video-item-skeleton .m2 {
    width: 60%;
    padding-left: 2.66667vw;
}

.single-card-skeleton .video-item-skeleton .m2 p {
    height: 5.33333vw;
    background-color: #eee;
    margin-bottom: 2.66667vw;
    width: 96%;
}

.single-card-skeleton .video-item-skeleton .m2 .p2 {
    width: 40%;
}

.single-card-skeleton .video-item-skeleton .m2 .p3 {
    width: 70%;
}

.pgc-card-skeleton {
    padding: 0 3.2vw;
}

.pgc-card-skeleton .pgc-item-skeleton {
    padding: 3.2vw 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.pgc-card-skeleton .pgc-item-skeleton .m1 {
    width: 20.8vw;
    height: 27.73333vw;
    background-color: #eee;
    border-radius: 0.53333vw;
}

.pgc-card-skeleton .pgc-item-skeleton .m2 {
    margin-left: 3.2vw;
    width: 69.33333vw;
}

.pgc-card-skeleton .pgc-item-skeleton .m2 p {
    height: 5.33333vw;
    background-color: #eee;
    margin-bottom: 2.66667vw;
}

.pgc-card-skeleton .pgc-item-skeleton .m2 .p1 {
    width: 16vw;
}

.user-card-skeleton {
    padding: 0 3.2vw;
}

.user-card-skeleton .user-item-skeleton {
    padding: 3.2vw 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.user-card-skeleton .user-item-skeleton .m1 {
    width: 16vw;
    height: 16vw;
    background-color: #eee;
    border-radius: 8vw;
}

.user-card-skeleton .user-item-skeleton .m2 {
    margin-left: 3.2vw;
    width: 72vw;
}

.user-card-skeleton .user-item-skeleton .m2 p {
    background-color: #eee;
    margin-bottom: 2.66667vw;
}

.user-card-skeleton .user-item-skeleton .m2 .p1 {
    height: 4.26667vw;
    width: 21.33333vw;
}

.user-card-skeleton .user-item-skeleton .m2 .p2,
.user-card-skeleton .user-item-skeleton .m2 .p3 {
    height: 3.2vw;
}

.user-card-skeleton .user-item-skeleton .m2 .p2 {
    width: 48vw;
    margin-bottom: 1.6vw;
}

.user-card-skeleton .user-item-skeleton .m2 .p3 {
    margin-bottom: 0;
}

.video-list-box {
    margin-bottom: 5.33333vw;
}

.flow-loader {
    min-height: 53.33333vw;
}

.flow-loader-state-nothing span {
    font-size: 3.73333vw;
    color: #999;
}

.m-video-related {
    padding-top: 1.6vw;
    padding-bottom: 4vw;
}

.m-video-related .no-more-comment {
    text-align: left;
}

.m-video-related .video-list-box {
    padding: 0 1.33333vw;
}

.m-video-related .empty {
    line-height: 53.33333vw;
    font-size: 3.73333vw;
    color: #999;
    text-align: center;
}

.m-video-related .m-related-openapp {
    height: 9.6vw;
    width: 93.6vw;
    margin: 0 auto;
    line-height: 9.6vw;
    background: #f4f4f4;
    border: none;
    border-radius: 4.8vw;
    color: #212121;
    font-size: 3.73333vw;
    text-align: center;
}

.m-sub-reply-preview {
    margin-left: 12vw;
    margin-top: 2.66667vw;
    background: #f4f4f4;
    padding: 2.66667vw;
    border-radius: 1.06667vw;
}

.m-sub-reply-preview .sub-preview-item {
    color: #212121;
    margin: 1.6vw 0 0;
    font-size: 3.46667vw;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.m-sub-reply-preview .sub-preview-item:first-child {
    margin-top: 0;
}

.m-sub-reply-preview .sub-preview-item a {
    color: #5090cc;
}

.m-sub-reply-preview .sub-preview-item a,
.m-sub-reply-preview .sub-preview-item span {
    vertical-align: middle;
    text-decoration: none;
    word-break: break-all;
}

.m-sub-reply-preview .show-more {
    display: block;
    margin-top: 2.13333vw;
    font-size: 3.2vw;
    color: #5090cc;
}

.m-sub-reply-preview .show-more i {
    vertical-align: text-top;
}

.m-video-comment .title {
    height: 11.73333vw;
    line-height: 11.73333vw;
    font-size: 4.26667vw;
    color: #212121;
}

.m-video-comment .title .count {
    color: #999;
}

.m-video-comment .list .skeleton {
    height: 100vh;
}

.m-video-comment .list ul li.comment-item {
    clear: both;
    padding: 3.2vw;
    border-bottom: 1px solid #e7e7e7;
    font-size: 0;
}

.m-video-comment .list ul li.comment-item:last-child {
    border-bottom: none;
}

.m-video-comment .list ul li.comment-item .head {
    float: left;
    margin-top: 0.53333vw;
}

.m-video-comment .list ul li.comment-item .head img {
    float: left;
    width: 8vw;
    height: 8vw;
    border-radius: 4vw;
}

.m-video-comment .list ul li.comment-item .detail {
    margin-left: 12vw;
}

.m-video-comment .list ul li.comment-item .detail .user .name {
    font-size: 3.46667vw;
    color: #757575;
}

.m-video-comment .list ul li.comment-item .detail .user .like {
    float: right;
    font-size: 2.66667vw;
    color: #999;
    margin-top: 1.86667vw;
}

.m-video-comment .list ul li.comment-item .detail .user .like i,
.m-video-comment .list ul li.comment-item .detail .user .like span {
    vertical-align: middle;
}

.m-video-comment .list ul li.comment-item .detail .time {
    margin-top: 1.86667vw;
    font-size: 3.2vw;
    height: 3.2vw;
    line-height: 3.2vw;
    color: #999;
}

.m-video-comment .list ul li.comment-item .detail .content {
    margin-top: 2.4vw;
    font-size: 3.46667vw;
    color: #212121;
    white-space: pre-line;
    word-break: break-word;
}

.m-video-comment .list .empty {
    background: #f4f4f4;
    height: 94.13333vw;
    line-height: 94.13333vw;
    font-size: 3.73333vw;
    color: #999;
    text-align: center;
}

.m-video-comment .openapp {
    margin-top: 5.6vw;
    text-align: center;
}

.m-video-comment .openapp button {
    height: 9.6vw;
    width: 93.6vw;
    line-height: 9.6vw;
    background: #f4f4f4;
    border: none;
    border-radius: 4.8vw;
    color: #212121;
    font-size: 3.73333vw;
    text-align: center;
    margin: 0 auto 4vw;
}

.m-video-comment .openapp button i,
.m-video-comment .openapp button span {
    vertical-align: middle;
}

.m-video-bottom-tab .v-switcher__header:before {
    top: 0;
}

.m-video-bottom-tab .v-switcher__content__item {
    overflow-y: visible;
    overflow-y: initial;
}

.m-video-season-new {
    border-top: 1px solid #e7e7e7;
    padding: 0 3.2vw;
    margin-bottom: 2.66667vw;
}

.m-video-season-new .info {
    height: 11.73333vw;
    line-height: 11.73333vw;
}

.m-video-season-new .info .title {
    float: left;
}

.m-video-season-new .info .title .label {
    font-size: 2.66667vw;
    padding: 1px 1.06667vw;
    color: #fff;
    background: #fb7299;
    margin-right: 1.06667vw;
    border-radius: 0.53333vw;
    vertical-align: bottom;
}

.m-video-season-new .info .title .name {
    font-size: 3.73333vw;
    color: #212121;
    font-weight: 700;
}

.m-video-season-new .info .spread {
    float: right;
    font-size: 3.46667vw;
    color: #999;
}

.m-video-season-new .info .spread span {
    vertical-align: middle;
}

.m-video-season-new .info .spread .iconfont {
    font-size: 5.33333vw;
    vertical-align: middle;
    margin-left: 0.53333vw;
}

.m-video-season-new .list {
    clear: both;
    white-space: nowrap;
    overflow-x: auto;
    padding-bottom: 3.2vw;
    width: 93.6vw;
}

.m-video-season-new .list .video-card {
    display: inline-block;
    margin-right: 2.66667vw;
    width: 31.2vw;
    vertical-align: top;
    font-size: 0;
}

.m-video-season-new .list .video-card .cover {
    width: 31.2vw;
    height: 19.46667vw;
    position: relative;
    border-radius: 1.6vw;
}

.m-video-season-new .list .video-card .cover img {
    width: 31.2vw;
    height: 19.46667vw;
    border-radius: 1.6vw;
}

.m-video-season-new .list .video-card .cover .gradient {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    opacity: 0.4;
    background-image: -webkit-gradient( linear, left top, left bottom, from(transparent), to(#000));
    background-image: linear-gradient(-180deg, transparent, #000);
    border-radius: 1.6vw;
}

.m-video-season-new .list .video-card .cover .pubdate {
    position: absolute;
    right: 1.6vw;
    bottom: 0.53333vw;
    font-size: 3.2vw;
    color: #fff;
}

.m-video-season-new .list .video-card .title {
    margin-top: 2.13333vw;
    font-size: 3.2vw;
    color: #505050;
    line-height: 4.26667vw;
    height: 8.53333vw;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
}

.m-video-season-new .list .video-card .title.current {
    color: #fb7299;
}

.m-video-season-new .list .video-card .open-app {
    margin-top: 1.33333vw;
    padding: 0.53333vw 1.6vw;
    display: inline-block;
    border: 1px solid #fb7299;
    border-radius: 0.53333vw;
    color: #fb7299;
    font-size: 2.66667vw;
    margin-bottom: -2.66667vw;
    -webkit-transform: scale(0.77);
    transform: scale(0.77);
    -webkit-transform-origin: left top;
    transform-origin: left top;
}

.m-video-season-panel {
    position: fixed;
    top: 68vw;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 15;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.m-video-season-panel .panel-title {
    height: 11.73333vw;
    line-height: 11.73333vw;
    position: fixed;
    left: 0;
    right: 0;
    padding: 0 3.2vw;
    background: #fff;
    z-index: 15;
    border-top: 1px solid #e7e7e7;
}

.m-video-season-panel .panel-title .name {
    float: left;
    font-size: 4vw;
    color: #212121;
}

.m-video-season-panel .panel-title .close {
    float: right;
}

.m-video-season-panel .panel-title .close .iconfont {
    color: #999;
}

.m-video-season-panel .panel-content {
    position: absolute;
    top: 11.73333vw;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.m-video-season-panel .season-info {
    position: relative;
    padding: 0 3.2vw;
}

.m-video-season-panel .season-info .season-title {
    font-size: 3.73333vw;
    color: #212121;
    font-weight: 700;
    line-height: 5.33333vw;
}

.m-video-season-panel .season-info .season-desc {
    margin-top: 1.6vw;
    font-size: 3.46667vw;
    color: #999;
    line-height: 5.33333vw;
}

.m-video-season-panel .season-info .season-desc.folded {
    max-height: 16vw;
    overflow: hidden;
}

.m-video-season-panel .season-info .spread-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    display: inline-block;
    background: #fff;
    height: 5.33333vw;
    line-height: 5.33333vw;
    width: 10.66667vw;
    text-align: center;
    font-size: 3.46667vw;
    color: #1389bf;
}

.m-video-season-panel .season-tabs {
    height: 11.73333vw;
    line-height: 10.13333vw;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    background: #fff;
    padding: 0 3.2vw;
    overflow: auto;
    white-space: nowrap;
    z-index: 2;
}

.m-video-season-panel .season-tabs .tab-item {
    font-size: 3.73333vw;
    color: #505050;
    margin-right: 8.8vw;
    display: inline-block;
}

.m-video-season-panel .season-tabs .tab-item.on {
    color: #fb7299;
    border-bottom: 0.53333vw solid #fb7299;
}

.m-video-season-panel .video-list .season-video-item {
    clear: both;
    padding: 2.66667vw 3.2vw;
}

.m-video-season-panel .video-list .season-video-item .cover {
    float: left;
    width: 31.2vw;
    height: 19.46667vw;
}

.m-video-season-panel .video-list .season-video-item .cover img {
    width: 100%;
    height: 100%;
    border-radius: 1.06667vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.m-video-season-panel .video-list .season-video-item .info {
    margin-left: 33.86667vw;
    font-size: 0;
}

.m-video-season-panel .video-list .season-video-item .info .title {
    font-size: 3.73333vw;
    color: #212121;
    line-height: 4.53333vw;
    height: 9.06667vw;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
}

.m-video-season-panel .video-list .season-video-item .info .detail {
    margin-top: 0.8vw;
    font-size: 3.2vw;
    line-height: 3.2vw;
    height: 3.2vw;
    color: #999;
}

.m-video-season-panel .video-list .season-video-item .info .open-app {
    margin-top: 1.33333vw;
    padding: 0.53333vw 1.6vw;
    display: inline-block;
    border: 1px solid #fb7299;
    border-radius: 0.53333vw;
    color: #fb7299;
    font-size: 2.66667vw;
    -webkit-transform: scale(0.77);
    transform: scale(0.77);
    -webkit-transform-origin: left top;
    transform-origin: left top;
}

.m-video-season-panel .video-list .season-video-item.current {
    background: #f4f4f4;
}

.m-video-season-panel .video-list .season-video-item.current .cover img {
    border: 0.53333vw solid #fb7299;
}

.m-video-season-panel .video-list .season-video-item.current .info .title {
    color: #fb7299;
}

.m-video-season-panel.season-slide-enter-active,
.m-video-season-panel.season-slide-leave-active {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    transition: -webkit-transform 0.3s;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
}

.m-video-season-panel.season-slide-enter,
.m-video-season-panel.season-slide-leave-to {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
}

.m-video-part-new {
    padding: 3.2vw;
    border-top: 1px solid #e7e7e7;
    font-size: 0;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.m-video-part-new,
.m-video-part-new .list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.m-video-part-new .list {
    white-space: nowrap;
    list-style-type: none;
    width: 84vw;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}

.m-video-part-new .list .part-item {
    padding: 1.33333vw 2.4vw;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    font-size: 3.2vw;
    color: #212121;
    border: 1px solid #ccc;
    border-radius: 1.06667vw;
    margin-right: 2.13333vw;
}

.m-video-part-new .list .part-item span {
    width: 29.86667vw;
    height: 9.06667vw;
    line-height: 4.53333vw;
    display: block;
    white-space: normal;
    word-break: break-all;
    overflow: hidden;
}

.m-video-part-new .list .part-item.on {
    color: #fb7299;
    border: 1px solid #fb7299;
}

.m-video-part-new .spread {
    height: 11.73333vw;
    line-height: 11.73333vw;
}

.m-video-part-new .spread i {
    color: #757575;
    font-size: 5.33333vw;
}

.m-video-part-panel {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 15;
}

.m-video-part-panel .m-video-part-panel-content {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 96vw;
    background: #f4f4f4;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.m-video-part-panel .m-video-part-panel-content .title {
    font-size: 4vw;
    height: 11.73333vw;
    line-height: 11.73333vw;
    padding: 0 4.26667vw;
}

.m-video-part-panel .m-video-part-panel-content .title i {
    float: right;
    color: #bcbcbc;
}

.m-video-part-panel .m-video-part-panel-content .list {
    list-style-type: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: left;
    -ms-flex-align: left;
    align-items: left;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: baseline;
    align-content: baseline;
    overflow: auto;
    height: 84.26667vw;
    padding: 0 4.26667vw;
}

.m-video-part-panel .m-video-part-panel-content .list .part-item {
    padding: 4.26667vw 2.93333vw;
    height: 9.06667vw;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    font-size: 3.2vw;
    color: #212121;
    border: 1px solid #ccc;
    border-radius: 1.06667vw;
    background: #fff;
    margin-bottom: 3.2vw;
}

.m-video-part-panel .m-video-part-panel-content .list .part-item span {
    width: 37.33333vw;
    height: 9.06667vw;
    line-height: 4.53333vw;
    white-space: normal;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.m-video-part-panel .m-video-part-panel-content .list .part-item.on {
    color: #fb7299;
    border: 1px solid #fb7299;
}

.m-video-part-panel .m-video-part-panel-content.part-slide-enter-active,
.m-video-part-panel .m-video-part-panel-content.part-slide-leave-active {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    transition: -webkit-transform 0.3s;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
}

.m-video-part-panel .m-video-part-panel-content.part-slide-enter,
.m-video-part-panel .m-video-part-panel-content.part-slide-leave-to {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
}

.m-video-text-ad {
    width: 100%;
    padding: 3.2vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.m-video-text-ad .notice-content {
    display: block;
    background: #fffbf0;
    padding: 1.6vw 2.13333vw;
    font-size: 3.73333vw;
}

.m-video-text-ad .notice-content .notice {
    color: #faab4b;
    font-size: 6.4vw;
    margin-right: 1.33333vw;
    vertical-align: middle;
}

.m-video-text-ad .notice-content a {
    color: #faab4b;
    vertical-align: middle;
}

.m-video-text-ad .notice-content .guanbi {
    line-height: 6.4vw;
    color: #faab4b;
    float: right;
    vertical-align: middle;
}

.m-video-img-ad {
    width: 100%;
    padding: 3.2vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-top: 1px solid #e7e7e7;
}

.m-video-img-ad a {
    display: block;
}

.m-video-img-ad a img {
    width: 100%;
    border-radius: 1.6vw;
}

.m-video2-float-openapp {
    position: fixed;
    bottom: 8vw;
    z-index: 15;
    width: 93.6vw;
    height: 9.6vw;
    line-height: 9.6vw;
    border-radius: 6.66667vw;
    background: #fb7299;
    color: #fff;
    left: 3.2vw;
    text-align: center;
    font-size: 3.73333vw;
    -webkit-box-shadow: 0 0.53333vw 2.66667vw rgba(0, 0, 0, 0.2);
    box-shadow: 0 0.53333vw 2.66667vw rgba(0, 0, 0, 0.2);
}

.m-video2-float-openapp i {
    margin-right: 1.33333vw;
    vertical-align: middle;
}

.m-video2-float-openapp.float-show-enter-active,
.m-video2-float-openapp.float-show-leave-active {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    transition: -webkit-transform 0.5s;
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
    transition: transform 0.5s, -webkit-transform 0.5s;
}

.m-video2-float-openapp.float-show-enter,
.m-video2-float-openapp.float-show-leave-to {
    -webkit-transform: translateY(40vw);
    transform: translateY(40vw);
}

.m-footer {
    text-align: center;
    background-color: #f4f4f4;
    padding: 3.2vw 1.33333vw;
}

.m-footer p {
    color: #999;
    font-size: 3.2vw;
    line-height: 6.4vw;
}

.play-page-gotop {
    position: fixed;
    right: 1.06667vw;
    bottom: 4.53333vw;
    z-index: 15;
}

.play-page-gotop img {
    width: 13.86667vw;
    height: 13.86667vw;
}

.m-video-new .m-footer {
    background: #fff;
    margin-bottom: 18.66667vw;
}

.m-video-new .play-page-gotop {
    bottom: 16.8vw;
}

.m-navbar {
    height: 11.73333vw;
    line-height: 11.73333vw;
    padding: 0 3.2vw 0 4.8vw;
    font-size: 0;
    background: #fff;
}

.m-navbar .logo {
    float: left;
    height: 11.73333vw;
}

.m-navbar .logo i {
    color: #fb7299;
    font-size: 7.46667vw;
}

.m-navbar .right {
    float: right;
    height: 11.73333vw;
}

.m-navbar .right .search {
    display: inline-block;
    width: 29.33333vw;
    height: 6.4vw;
    margin-top: 2.66667vw;
    line-height: 6.4vw;
    border-radius: 3.2vw;
    margin-right: 4vw;
    padding: 0 2.93333vw;
    background: #f4f4f4;
    white-space: nowrap;
    color: #999;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}

.m-navbar .right .search i {
    vertical-align: middle;
    margin-right: 1.06667vw;
    font-size: 3.2vw;
}

.m-navbar .right .search span {
    vertical-align: middle;
    display: inline-block;
    width: 21.86667vw;
    font-size: 2.66667vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.m-navbar .right .face {
    vertical-align: top;
    width: 6.4vw;
    height: 6.4vw;
    display: inline-block;
    margin-top: 2.66667vw;
}

.m-navbar .right .face img {
    width: 100%;
    height: 100%;
    border-radius: 3.2vw;
}

.m-navbar .right .openapp {
    margin-left: 3.2vw;
    width: 21.33333vw;
    height: 6.4vw;
    margin-top: 2.66667vw;
    background: #fb7299;
    border: none;
    border-radius: 0.53333vw;
    color: #fff;
    font-size: 3.46667vw;
    vertical-align: top;
}

.svga-container {
    position: absolute;
    width: 100%;
    height: 13.33333vw;
    background: #fff;
    overflow: hidden;
}

.m-video-openapp {
    position: relative;
    height: 16vw;
}

.m-video-openapp .text {
    position: absolute;
    top: 5.33333vw;
    font-size: 4.26667vw;
    width: 100%;
    text-align: center;
    z-index: 10;
}

.m-video-info {
    margin-top: 1.6vw;
    padding: 0 3.2vw;
    font-size: 0;
}

.m-video-info.gameMode {
    margin-top: 2.93333vw;
    margin-bottom: 2.93333vw;
}

.m-video-info .title .left {
    width: 86.66667vw;
    float: left;
    position: relative;
}

.m-video-info .title .left .label {
    position: absolute;
    display: inline-block;
    font-size: 0;
    padding: 0 1.6vw;
    height: 5.86667vw;
    line-height: 5.86667vw;
    color: #fb7299;
    background: #f4f4f4;
    border-radius: 3.2vw;
    vertical-align: middle;
    margin-top: 0.53333vw;
}

.m-video-info .title .left .label i {
    font-size: 4.26667vw;
    margin-left: -1.06667vw;
}

.m-video-info .title .left .label span {
    font-size: 3.2vw;
}

.m-video-info .title .left .label i,
.m-video-info .title .left .label span {
    vertical-align: middle;
}

.m-video-info .title .left h1 {
    font-size: 4.26667vw;
    font-weight: 400;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 86.66667vw;
    height: 6.4vw;
    line-height: 6.4vw;
}

.m-video-info .title .left h1.spread {
    white-space: normal;
    height: auto;
}

.m-video-info .title .left h1.has-activity {
    padding-left: 12.26667vw;
}

.m-video-info .title .left h1.isHot {
    padding-left: 14.66667vw;
}

.m-video-info .title .right {
    float: right;
    transition: -webkit-transform 0.1s;
    -webkit-transition: -webkit-transform 0.1s;
    transition: transform 0.1s;
    transition: transform 0.1s, -webkit-transform 0.1s;
    -webkit-transform-origin: center;
    transform-origin: center;
}

.m-video-info .title .right.spread {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.m-video-info .title .right i {
    color: #999;
    font-size: 5.33333vw;
}

.m-video-info .title .clear {
    clear: both;
}

.m-video-info .data {
    font-size: 3.2vw;
    margin-top: 2.13333vw;
    color: #999;
}

.m-video-info .data span {
    display: inline-block;
    vertical-align: middle;
}

.m-video-info .data .up {
    color: #212121;
    margin-right: 4.8vw;
}

.m-video-info .data .danmaku,
.m-video-info .data .view {
    margin-right: 2.13333vw;
}

.m-video-info .fold-container {
    height: 0;
    overflow: hidden;
    -webkit-transition: height 0.3s;
    transition: height 0.3s;
}

.m-video-info .fold-container .fold-area .copyright {
    font-size: 3.2vw;
    color: #999;
    line-height: 4.8vw;
    margin-top: 1.33333vw;
}

.m-video-info .fold-container .fold-area .copyright i {
    font-size: 3.73333vw;
    color: #fb7299;
    vertical-align: middle;
    margin-right: 0.8vw;
}

.m-video-info .fold-container .fold-area .copyright span {
    vertical-align: middle;
}

.m-video-info .fold-container .fold-area .desc {
    font-size: 3.2vw;
    line-height: 4.8vw;
    color: #999;
    padding-top: 1.33333vw;
    white-space: pre-line;
}

.m-video-info .fold-container .fold-area .channel {
    margin-top: 2.13333vw;
    font-size: 3.2vw;
}

.m-video-info .fold-container .fold-area .channel a {
    color: #fb7299;
    margin-right: 1.33333vw;
}

.m-video-info .fold-container .fold-area .channel span {
    color: #ccc;
    margin-right: 1.33333vw;
}

.m-video-info .fold-container .fold-area .tags {
    margin-top: 2.93333vw;
}

.m-video-info .fold-container .fold-area .tags a {
    display: inline-block;
    padding: 2.13333vw 4.8vw;
    font-size: 3.2vw;
    color: #505050;
    background: #f4f4f4;
    margin-bottom: 1.6vw;
    margin-right: 2.66667vw;
    border-radius: 26.66667vw;
}

.m-video-toolbar {
    padding: 2.93333vw 4.8vw;
    color: #999;
    font-size: 0;
}

.m-video-toolbar .left {
    float: left;
}

.m-video-toolbar .left .toolbar-item {
    margin-right: 5.33333vw;
}

.m-video-toolbar .right {
    float: right;
}

.m-video-toolbar .toolbar-item i {
    margin-right: 1.33333vw;
    font-size: 5.33333vw;
    color: #757575;
    vertical-align: middle;
}

.m-video-toolbar .toolbar-item span {
    font-size: 2.66667vw;
    vertical-align: middle;
}

.m-video-toolbar .clear {
    clear: both;
}

.play-page-comment {
    margin: 5.33333vw 0;
    padding: 0 3.2vw;
}

.play-page-comment .title {
    height: 11.73333vw;
    line-height: 11.73333vw;
    font-size: 4.26667vw;
    color: #212121;
}

.play-page-comment .title .count {
    color: #999;
}

.play-page-comment .send {
    margin-top: 1.6vw;
}

.play-page-comment .send img {
    float: left;
    width: 8vw;
    height: 8vw;
    border-radius: 4vw;
}

.play-page-comment .send .input {
    margin-left: 12vw;
    height: 8vw;
    line-height: 8vw;
    display: block;
    border-radius: 4vw;
    padding: 0 2.66667vw;
    background: #f4f4f4;
    color: silver;
    font-size: 3.73333vw;
}

.play-page-comment .list ul li.comment-item {
    clear: both;
    margin-top: 4vw;
    padding-bottom: 3.73333vw;
    border-bottom: 1px solid #e7e7e7;
    font-size: 0;
}

.play-page-comment .list ul li.comment-item:first-child {
    margin-top: 5.6vw;
}

.play-page-comment .list ul li.comment-item:last-child {
    border-bottom: none;
}

.play-page-comment .list ul li.comment-item .head {
    float: left;
}

.play-page-comment .list ul li.comment-item .head img {
    float: left;
    width: 9.6vw;
    height: 9.6vw;
    border-radius: 4.8vw;
}

.play-page-comment .list ul li.comment-item .detail {
    margin-left: 12vw;
}

.play-page-comment .list ul li.comment-item .detail .user .name {
    font-size: 3.46667vw;
    color: #757575;
}

.play-page-comment .list ul li.comment-item .detail .user .time {
    float: right;
    font-size: 2.66667vw;
    color: #999;
}

.play-page-comment .list ul li.comment-item .detail .content {
    margin-top: 2.4vw;
    font-size: 3.46667vw;
    color: #212121;
    white-space: pre-line;
    word-break: break-word;
}

.play-page-comment .openapp {
    margin-top: 5.6vw;
}

.play-page-comment .openapp button {
    display: block;
    width: 100%;
    background: #fb7299;
    height: 9.33333vw;
    border: none;
    border-radius: 4.8vw;
    color: #fff;
    font-size: 3.73333vw;
}

.m-video-related {
    padding-top: 1.6vw;
}

.m-video-related .video-list-box {
    padding: 0 1.33333vw;
}

.m-video-related .flow-loader {
    min-height: 0;
}

.m-video-season {
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    padding: 0 3.2vw;
    margin-bottom: 2.66667vw;
}

.m-video-season .info {
    height: 11.73333vw;
    line-height: 11.73333vw;
}

.m-video-season .info .title {
    float: left;
}

.m-video-season .info .title .label {
    font-size: 2.66667vw;
    padding: 1px 1.06667vw;
    color: #fff;
    background: #fb7299;
    margin-right: 1.06667vw;
    border-radius: 0.53333vw;
    vertical-align: bottom;
}

.m-video-season .info .title .name {
    font-size: 3.73333vw;
    color: #212121;
    font-weight: 700;
}

.m-video-season .info .spread {
    float: right;
    font-size: 3.46667vw;
    color: #999;
}

.m-video-season .info .spread span {
    vertical-align: middle;
}

.m-video-season .info .spread .iconfont {
    font-size: 5.33333vw;
    vertical-align: middle;
    margin-left: 0.53333vw;
}

.m-video-season .list {
    clear: both;
    white-space: nowrap;
    overflow-x: auto;
    padding-bottom: 3.2vw;
    width: 93.6vw;
}

.m-video-season .list .video-card {
    display: inline-block;
    margin-right: 2.66667vw;
    width: 31.2vw;
    vertical-align: top;
    font-size: 0;
}

.m-video-season .list .video-card .cover {
    position: relative;
}

.m-video-season .list .video-card .cover,
.m-video-season .list .video-card .cover img {
    width: 31.2vw;
    height: 19.46667vw;
    border-radius: 1.6vw;
}

.m-video-season .list .video-card .cover .gradient {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    opacity: 0.4;
    background-image: -webkit-gradient( linear, left top, left bottom, from(transparent), to(#000));
    background-image: linear-gradient(-180deg, transparent, #000);
    border-radius: 1.6vw;
}

.m-video-season .list .video-card .cover .pubdate {
    position: absolute;
    right: 1.6vw;
    bottom: 0.53333vw;
    font-size: 3.2vw;
    color: #fff;
}

.m-video-season .list .video-card .title {
    margin-top: 2.13333vw;
    font-size: 3.2vw;
    color: #505050;
    line-height: 4.26667vw;
    height: 8.53333vw;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
}

.m-video-season .list .video-card .title.current {
    color: #fb7299;
}

.m-video-season .list .video-card .open-app {
    margin-top: 1.33333vw;
    padding: 0.53333vw 1.6vw;
    display: inline-block;
    border: 1px solid #fb7299;
    border-radius: 0.53333vw;
    color: #fb7299;
    font-size: 2.66667vw;
    margin-bottom: -2.66667vw;
    -webkit-transform: scale(0.77);
    transform: scale(0.77);
    -webkit-transform-origin: left top;
    transform-origin: left top;
}

.m-video-season-panel {
    position: fixed;
    top: 68vw;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 15;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.m-video-season-panel .panel-title {
    height: 11.73333vw;
    line-height: 11.73333vw;
    position: fixed;
    left: 0;
    right: 0;
    padding: 0 3.2vw;
    background: #fff;
    z-index: 15;
    border-top: 1px solid #e7e7e7;
}

.m-video-season-panel .panel-title .name {
    float: left;
    font-size: 4vw;
    color: #212121;
}

.m-video-season-panel .panel-title .close {
    float: right;
}

.m-video-season-panel .panel-title .close .iconfont {
    color: #999;
}

.m-video-season-panel .panel-content {
    position: absolute;
    top: 11.73333vw;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.m-video-season-panel .season-info {
    position: relative;
    padding: 0 3.2vw;
}

.m-video-season-panel .season-info .season-title {
    font-size: 3.73333vw;
    color: #212121;
    font-weight: 700;
    line-height: 5.33333vw;
}

.m-video-season-panel .season-info .season-desc {
    margin-top: 1.6vw;
    font-size: 3.46667vw;
    color: #999;
    line-height: 5.33333vw;
}

.m-video-season-panel .season-info .season-desc.folded {
    max-height: 16vw;
    overflow: hidden;
}

.m-video-season-panel .season-info .spread-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    display: inline-block;
    background: #fff;
    height: 5.33333vw;
    line-height: 5.33333vw;
    width: 10.66667vw;
    text-align: center;
    font-size: 3.46667vw;
    color: #1389bf;
}

.m-video-season-panel .season-tabs {
    height: 11.73333vw;
    line-height: 10.13333vw;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    background: #fff;
    padding: 0 3.2vw;
    overflow: auto;
    white-space: nowrap;
    z-index: 2;
}

.m-video-season-panel .season-tabs .tab-item {
    font-size: 3.73333vw;
    color: #505050;
    margin-right: 8.8vw;
    display: inline-block;
}

.m-video-season-panel .season-tabs .tab-item.on {
    color: #fb7299;
    border-bottom: 0.53333vw solid #fb7299;
}

.m-video-season-panel .video-list .season-video-item {
    clear: both;
    padding: 2.66667vw 3.2vw;
}

.m-video-season-panel .video-list .season-video-item .cover {
    float: left;
    width: 31.2vw;
    height: 19.46667vw;
}

.m-video-season-panel .video-list .season-video-item .cover img {
    width: 100%;
    height: 100%;
    border-radius: 1.06667vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.m-video-season-panel .video-list .season-video-item .info {
    margin-left: 33.86667vw;
    font-size: 0;
}

.m-video-season-panel .video-list .season-video-item .info .title {
    font-size: 3.73333vw;
    color: #212121;
    line-height: 4.53333vw;
    height: 9.06667vw;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
}

.m-video-season-panel .video-list .season-video-item .info .detail {
    margin-top: 0.8vw;
    font-size: 3.2vw;
    line-height: 3.2vw;
    height: 3.2vw;
    color: #999;
}

.m-video-season-panel .video-list .season-video-item .info .open-app {
    margin-top: 1.33333vw;
    padding: 0.53333vw 1.6vw;
    display: inline-block;
    border: 1px solid #fb7299;
    border-radius: 0.53333vw;
    color: #fb7299;
    font-size: 2.66667vw;
    -webkit-transform: scale(0.77);
    transform: scale(0.77);
    -webkit-transform-origin: left top;
    transform-origin: left top;
}

.m-video-season-panel .video-list .season-video-item.current {
    background: #f4f4f4;
}

.m-video-season-panel .video-list .season-video-item.current .cover img {
    border: 0.53333vw solid #fb7299;
}

.m-video-season-panel .video-list .season-video-item.current .info .title {
    color: #fb7299;
}

.m-video-season-panel.season-slide-enter-active,
.m-video-season-panel.season-slide-leave-active {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    transition: -webkit-transform 0.3s;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
}

.m-video-season-panel.season-slide-enter,
.m-video-season-panel.season-slide-leave-to {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
}

.m-video-part {
    padding: 3.2vw 3.2vw 0;
    border-top: 1px solid #e7e7e7;
    font-size: 0;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.m-video-part,
.m-video-part .list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.m-video-part .list {
    white-space: nowrap;
    list-style-type: none;
    width: 84vw;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}

.m-video-part .list .part-item {
    padding: 1.33333vw 2.4vw;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    font-size: 3.2vw;
    color: #212121;
    border: 1px solid #ccc;
    border-radius: 1.06667vw;
    margin-right: 2.13333vw;
}

.m-video-part .list .part-item span {
    width: 29.86667vw;
    height: 9.06667vw;
    line-height: 4.53333vw;
    display: block;
    white-space: normal;
    word-break: break-all;
    overflow: hidden;
}

.m-video-part .list .part-item.on {
    color: #fb7299;
    border: 1px solid #fb7299;
}

.m-video-part .spread {
    height: 11.73333vw;
    line-height: 11.73333vw;
}

.m-video-part .spread i {
    color: #757575;
    font-size: 5.33333vw;
}

.m-video-part-panel {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 15;
}

.m-video-part-panel .m-video-part-panel-content {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 96vw;
    background: #f4f4f4;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.m-video-part-panel .m-video-part-panel-content .title {
    font-size: 4vw;
    height: 11.73333vw;
    line-height: 11.73333vw;
    padding: 0 4.26667vw;
}

.m-video-part-panel .m-video-part-panel-content .title i {
    float: right;
    color: #bcbcbc;
}

.m-video-part-panel .m-video-part-panel-content .list {
    list-style-type: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: left;
    -ms-flex-align: left;
    align-items: left;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: baseline;
    align-content: baseline;
    overflow: auto;
    height: 84.26667vw;
    padding: 0 4.26667vw;
}

.m-video-part-panel .m-video-part-panel-content .list .part-item {
    padding: 4.26667vw 2.93333vw;
    height: 9.06667vw;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    font-size: 3.2vw;
    color: #212121;
    border: 1px solid #ccc;
    border-radius: 1.06667vw;
    background: #fff;
    margin-bottom: 3.2vw;
}

.m-video-part-panel .m-video-part-panel-content .list .part-item span {
    width: 37.33333vw;
    height: 9.06667vw;
    line-height: 4.53333vw;
    white-space: normal;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.m-video-part-panel .m-video-part-panel-content .list .part-item.on {
    color: #fb7299;
    border: 1px solid #fb7299;
}

.m-video-part-panel .m-video-part-panel-content.part-slide-enter-active,
.m-video-part-panel .m-video-part-panel-content.part-slide-leave-active {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    transition: -webkit-transform 0.3s;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
}

.m-video-part-panel .m-video-part-panel-content.part-slide-enter,
.m-video-part-panel .m-video-part-panel-content.part-slide-leave-to {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
}

.m-video-text-ad {
    width: 100%;
    padding: 3.2vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.m-video-text-ad .notice-content {
    display: block;
    background: #fffbf0;
    padding: 1.6vw 2.13333vw;
    font-size: 3.73333vw;
}

.m-video-text-ad .notice-content .notice {
    color: #faab4b;
    font-size: 6.4vw;
    margin-right: 1.33333vw;
    vertical-align: middle;
}

.m-video-text-ad .notice-content a {
    color: #faab4b;
    vertical-align: middle;
}

.m-video-text-ad .notice-content .guanbi {
    line-height: 6.4vw;
    color: #faab4b;
    float: right;
    vertical-align: middle;
}

.m-video-img-ad {
    width: 100%;
    padding: 3.2vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-top: 1px solid #e7e7e7;
}

.m-video-img-ad a {
    display: block;
}

.m-video-img-ad a img {
    width: 100%;
    border-radius: 1.6vw;
}

.m-video-download-dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 15;
}

.m-video-download-dialog .dialog-content {
    width: 85.33333vw;
    height: 66.66667vw;
    text-align: center;
    background: #fff;
    position: absolute;
    left: 7.2vw;
    top: 50%;
    margin-top: -33.33333vw;
    border-radius: 2.13333vw;
    font-size: 0;
}

.m-video-download-dialog .dialog-content img {
    width: 64vw;
    height: 37.33333vw;
    text-align: center;
    margin: -13.33333vw auto 0;
    display: block;
}

.m-video-download-dialog .dialog-content .title {
    margin-top: 6.4vw;
    font-size: 4.8vw;
    color: #212121;
}

.m-video-download-dialog .dialog-content .subtitle {
    margin-top: 3.2vw;
    font-size: 3.73333vw;
    color: #757575;
}

.m-video-download-dialog .dialog-content .btns {
    margin-top: 6.4vw;
}

.m-video-download-dialog .dialog-content .btns button {
    width: 35.2vw;
    height: 11.73333vw;
    border-radius: 1.06667vw;
    font-size: 4.26667vw;
}

.m-video-download-dialog .dialog-content .btns .cancel {
    border: 1px solid #ccc;
    color: #757575;
    background: #fff;
    margin-right: 4.8vw;
}

.m-video-download-dialog .dialog-content .btns .download {
    border: 1px solid #fb7299;
    color: #fff;
    background: #fb7299;
}

.reply-toast {
    position: fixed;
    background: #000;
    color: #fff;
    opacity: 0.8;
    padding: 2.4vw 2.13333vw;
    border-radius: 1.06667vw;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 1000;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.reply-toast.reply-toast-fade-enter,
.reply-toast.reply-toast-fade-leave-active {
    -webkit-transform: translateY(50%) translateX(-50%);
    transform: translateY(50%) translateX(-50%);
    opacity: 0;
}

.m-video-share-panel {
    z-index: 15;
}

.m-video-share-panel .panel-content {
    background: #fff;
    padding: 3.73333vw 4.26667vw 5.33333vw;
    font-size: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.m-video-share-panel .panel-content .title {
    font-size: 3.73333vw;
    color: #505050;
    text-align: center;
}

.m-video-share-panel .panel-content .share-list {
    margin-top: 4.26667vw;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
}

.m-video-share-panel .panel-content .share-list::-webkit-scrollbar {
    width: 0;
}

.m-video-share-panel .panel-content .share-list .share-item {
    margin-left: 5.33333vw;
    text-align: center;
    display: inline-block;
}

.m-video-share-panel .panel-content .share-list .share-item .share-icon {
    width: 11.73333vw;
    height: 11.73333vw;
    border-radius: 5.86667vw;
}

.m-video-share-panel .panel-content .share-list .share-item .share-name {
    margin-top: 1.33333vw;
    font-size: 3.2vw;
    color: #999;
}

.m-video-float-openapp {
    position: fixed;
    bottom: 7.46667vw;
    z-index: 15;
    width: 32.26667vw;
    height: 10.13333vw;
    line-height: 10.13333vw;
    border-radius: 6.66667vw;
    left: 30.66667vw;
    background: #fb7299;
    color: #fff;
    text-align: center;
    font-size: 4vw;
}

.m-video-float-openapp.float-show-enter-active,
.m-video-float-openapp.float-show-leave-active {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    transition: -webkit-transform 0.5s;
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
    transition: transform 0.5s, -webkit-transform 0.5s;
}

.m-video-float-openapp.float-show-enter,
.m-video-float-openapp.float-show-leave-to {
    -webkit-transform: translateY(40vw);
    transform: translateY(40vw);
}

body.no-scroll {
    position: fixed;
    overflow: hidden;
}

@font-face {
    font-family: iconfont;
    src: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/iconfont.eot);
    src: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/iconfont.eot#iefix) format("embedded-opentype"), url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2"), url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/iconfont.woff) format("woff"), url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/iconfont.ttf) format("truetype"), url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/iconfont.svg#iconfont) format("svg");
}

.iconfont {
    font-family: iconfont !important;
    font-size: 4.26667vw;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.like2:before {
    content: "\e636";
}

.Blocked:before {
    content: "\e635";
}

.dianying:before {
    content: "\e634";
}

.huancun:before {
    content: "\e631";
}

.qingxidu:before {
    content: "\e632";
}

.dianzan:before {
    content: "\e633";
}

.Like:before {
    content: "\e630";
}

.History:before {
    content: "\e68d";
}

.fanju:before {
    content: "\e62f";
}

.ic_up:before {
    content: "\e741";
}

.notice:before {
    content: "\e62e";
}

.loading:before {
    content: "\eee3";
}

.guanbi:before {
    content: "\e62d";
}

.icon_fenqudaohang_paihangbang:before {
    content: "\e737";
}

.gengduo1:before {
    content: "\e602";
}

.live:before {
    content: "\e62c";
}

.ic_vip_badge:before {
    content: "\e62b";
}

.ic_popular:before {
    content: "\e62a";
}

.general_pulldown_s:before {
    content: "\e6eb";
}

.general_pullup_s:before {
    content: "\e6ec";
}

.icon_comment:before {
    content: "\e629";
}

.icon_download:before {
    content: "\e626";
}

.icon_share:before {
    content: "\e627";
}

.icon_fav:before {
    content: "\e628";
}

.general_complete:before {
    content: "\e625";
}

.ic_add1:before {
    content: "\e624";
}

.ic_female:before {
    content: "\e623";
}

.ic_male:before {
    content: "\e622";
}

.info_warning:before {
    content: "\e621";
}

.ic_userlevel_3:before {
    content: "\e61a";
}

.ic_userlevel_2:before {
    content: "\e61b";
}

.ic_userlevel_5:before {
    content: "\e61c";
}

.ic_userlevel_4:before {
    content: "\e61d";
}

.ic_userlevel_1:before {
    content: "\e61e";
}

.ic_userlevel_6:before {
    content: "\e61f";
}

.error:before {
    content: "\e620";
}

.icon_xinxi_pinglunshu:before {
    content: "\e618";
}

.icon_xinxi_yuedushu:before {
    content: "\e619";
}

.icon_shipin_danmushu:before {
    content: "\e616";
}

.icon_shipin_bofangshu:before {
    content: "\e617";
}

.ic_search_tab:before {
    content: "\e615";
}

.Navbar_logo:before {
    content: "\e614";
}

.v-switcher {
    height: 100%;
    overflow: hidden;
    position: relative;
    color: #fb7299;
    background-color: #fb7299;
}

body.night-mode .v-switcher {
    color: #eb7093;
    background-color: #eb7093;
}


/* .v-switcher__header {
    height: 10.66667vw;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, PingFang SC, Source Han Sans SC, Helvetica Neue, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
    background-color: #fff;
} */

body.night-mode .v-switcher__header {
    background-color: #141414;
}

.v-switcher__header:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background-color: #e7e7e7;
}

body.night-mode .v-switcher__header:before {
    background-color: #2a2a2a;
}

.v-switcher__header__after,
.v-switcher__header__before {
    position: relative;
    flex-shrink: 0;
    z-index: 1;
}

.v-switcher__header__before {
    float: left;
    order: 0;
}

.v-switcher__header__after {
    float: right;
    order: 3;
}

.v-switcher__header__tabs__wrap {
    overflow: hidden;
    height: 100%;
    flex: 1;
    order: 1;
}

.v-switcher__header__tabs__list {
    position: relative;
    font-size: 0;
    z-index: 1;
    padding: 0;
    margin: 0;
    flex: 1;
    white-space: nowrap;
}

.v-switcher__header__tabs__item {
    height: 10.66667vw;
    line-height: 10.66667vw;
    display: inline-block;
    text-align: center;
    font-size: 3.73333vw;
    vertical-align: middle;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    padding: 0 4.26667vw;
    color: #505050;
}

body.night-mode .v-switcher__header__tabs__item {
    color: #b5b5b5;
}

.v-switcher__header__tabs__item.is-active {
    color: inherit !important;
}

.v-switcher__header__tabs__item i,
.v-switcher__header__tabs__item span {
    vertical-align: middle;
}

.v-switcher__header__anchor {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.53333vw;
    border-radius: 0.53333vw;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-property: width, height, transform;
    pointer-events: none;
    background: currentColor;
}

.v-switcher__header--start {
    text-align: left;
    display: flex;
    flex-direction: row;
}

.v-switcher__header--start .v-switcher__header__tabs__item {
    flex-shrink: 0;
}

.v-switcher__header--center {
    text-align: center;
}

.v-switcher__header--around {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 4.26667vw;
}

.v-switcher__header--end {
    text-align: right;
}

.v-switcher__content {
    box-sizing: border-box;
    height: 100%;
    z-index: 0;
    color: #212121;
    background-color: #fff;
}

body.night-mode .v-switcher__content {
    color: #e1e1e1;
    background-color: #141414;
}

.v-switcher__content--multi {
    padding-top: 10.66667vw;
    margin-top: -10.66667vw;
}

.v-switcher__content__wrap {
    position: relative;
    height: 100%;
}

.v-switcher__content__item {
    height: 100%;
    display: none;
    overflow-y: auto;
}

.v-switcher__content__item i,
.v-switcher__content__item span {
    vertical-align: middle;
}

.v-switcher__content__item.is-active {
    display: block;
}

.v-switcher__content--swipe .v-switcher__content__item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
}

.v-switcher__content--swipe .v-switcher__content__item.is-current {
    position: relative;
    z-index: 1;
}

.v-switcher__content--swipe .v-switcher__content__item.is-active {
    will-change: transform;
}

.v-switcher--fluid {
    height: auto;
}

.v-affix--fixed {
    position: fixed;
    z-index: 1001;
}

@font-face {
    font-family: bili-font;
    src: url(data:application/vnd.ms-fontobject;base64,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AAEECQALACYB7QpDcmVhdGVkIGJ5IGljb25mb250CmJpbGliaWxpX3dlYl9tb2JpbGVSZWd1bGFyYmlsaWJpbGlfd2ViX21vYmlsZWJpbGliaWxpX3dlYl9tb2JpbGVWZXJzaW9uIDEuMGJpbGliaWxpX3dlYl9tb2JpbGVHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQAKAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQACgBiAGkAbABpAGIAaQBsAGkAXwB3AGUAYgBfAG0AbwBiAGkAbABlAFIAZQBnAHUAbABhAHIAYgBpAGwAaQBiAGkAbABpAF8AdwBlAGIAXwBtAG8AYgBpAGwAZQBiAGkAbABpAGIAaQBsAGkAXwB3AGUAYgBfAG0AbwBiAGkAbABlAFYAZQByAHMAaQBvAG4AIAAxAC4AMABiAGkAbABpAGIAaQBsAGkAXwB3AGUAYgBfAG0AbwBiAGkAbABlAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESAAVodWZlbgZzZWFyY2gHc3VjY2VzcwVlcnJvcgtpbnB1dF9jbG9zZQdkZXNjZW5kBmFzY2VuZANhZGQEaW50bwRtb3JlBmZpbHRlcgZjaGFuZ2UGZm9sbG93CHB1bGxkb3duBnB1bGx1cApjb2xsZWN0aW9uAAAA);
    src: url(data:application/vnd.ms-fontobject;base64,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AAEECQALACYB7QpDcmVhdGVkIGJ5IGljb25mb250CmJpbGliaWxpX3dlYl9tb2JpbGVSZWd1bGFyYmlsaWJpbGlfd2ViX21vYmlsZWJpbGliaWxpX3dlYl9tb2JpbGVWZXJzaW9uIDEuMGJpbGliaWxpX3dlYl9tb2JpbGVHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQAKAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQACgBiAGkAbABpAGIAaQBsAGkAXwB3AGUAYgBfAG0AbwBiAGkAbABlAFIAZQBnAHUAbABhAHIAYgBpAGwAaQBiAGkAbABpAF8AdwBlAGIAXwBtAG8AYgBpAGwAZQBiAGkAbABpAGIAaQBsAGkAXwB3AGUAYgBfAG0AbwBiAGkAbABlAFYAZQByAHMAaQBvAG4AIAAxAC4AMABiAGkAbABpAGIAaQBsAGkAXwB3AGUAYgBfAG0AbwBiAGkAbABlAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESAAVodWZlbgZzZWFyY2gHc3VjY2VzcwVlcnJvcgtpbnB1dF9jbG9zZQdkZXNjZW5kBmFzY2VuZANhZGQEaW50bwRtb3JlBmZpbHRlcgZjaGFuZ2UGZm9sbG93CHB1bGxkb3duBnB1bGx1cApjb2xsZWN0aW9uAAAA#iefix) format("embedded-opentype"), url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2"), url(data:font/woff;base64,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) format("woff"), url(data:font/ttf;base64,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aQBjAG8AbgBmAG8AbgB0AAoAYgBpAGwAaQBiAGkAbABpAF8AdwBlAGIAXwBtAG8AYgBpAGwAZQBSAGUAZwB1AGwAYQByAGIAaQBsAGkAYgBpAGwAaQBfAHcAZQBiAF8AbQBvAGIAaQBsAGUAYgBpAGwAaQBiAGkAbABpAF8AdwBlAGIAXwBtAG8AYgBpAGwAZQBWAGUAcgBzAGkAbwBuACAAMQAuADAAYgBpAGwAaQBiAGkAbABpAF8AdwBlAGIAXwBtAG8AYgBpAGwAZQBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgAFaHVmZW4Gc2VhcmNoB3N1Y2Nlc3MFZXJyb3ILaW5wdXRfY2xvc2UHZGVzY2VuZAZhc2NlbmQDYWRkBGludG8EbW9yZQZmaWx0ZXIGY2hhbmdlBmZvbGxvdwhwdWxsZG93bgZwdWxsdXAKY29sbGVjdGlvbgAAAA==) format("truetype"), url(data:image/svg+xml;base64,PHN2Zz48ZGVmcz48Zm9udCBpZD0iYmlsaWJpbGlfd2ViX21vYmlsZSIgaG9yaXotYWR2LXg9IjEwMjQiPjxmb250LWZhY2UgZm9udC1mYW1pbHk9ImJpbGliaWxpX3dlYl9tb2JpbGUiIGZvbnQtd2VpZ2h0PSI1MDAiIHVuaXRzLXBlci1lbT0iMTAyNCIgYXNjZW50PSI4OTYiIGRlc2NlbnQ9Ii0xMjgiLz48Z2x5cGggZ2x5cGgtbmFtZT0iaHVmZW4iIHVuaWNvZGU9Iu6bkCIgZD0iTTgyOC44IDU5Ni41NDRhMzIgMzIgMCAwMDQ4Ljk2LTQwLjgzMmwtMy43MTItNC40MTYtNDUyLjU0NC00NTIuNDhhMzIgMzIgMCAwMC00MC44MzItMy43NzZsLTQuNDggMy43MTJMMTUwLjAxNiAzMjUuMTJhMzIgMzIgMCAwMDQwLjgzMiA0OC45Nmw0LjQ4LTMuNzEyTDM5OC45MTIgMTY2LjcybDQyOS45NTIgNDI5Ljg4OHoiIGhvcml6LWFkdi14PSIxMDI0Ii8+PGdseXBoIGdseXBoLW5hbWU9InNlYXJjaCIgdW5pY29kZT0i7puPIiBkPSJNNjYxLjc2IDE3NS43NDRhMzM2LjI1NiAzMzYuMjU2IDAgMDAtNDYwLjM1MiAxNS43NDQgMzM2LjM4NCAzMzYuMzg0IDAgMDAwIDQ3Ny4yNDggMzM2LjM4NCAzMzYuMzg0IDAgMDA0NzcuMTg0IDAgMzM2LjI1NiAzMzYuMjU2IDAgMDAyNy4yNjQtNDQ2LjU5MmwxOTUuMi0xOTUuMmEzMiAzMiAwIDEwLTQ1LjMxMi00NS4xODRsLTE5My45MiAxOTMuOTJ6bS0yOC4wOTYgNjAuODY0YTI3Mi43MDQgMjcyLjcwNCAwIDAxMCAzODYuOTQ0IDI3Mi43MDQgMjcyLjcwNCAwIDAxLTM4Ni45NDQgMCAyNzIuNzA0IDI3Mi43MDQgMCAwMTAtMzg2Ljk0NCAyNzIuNzA0IDI3Mi43MDQgMCAwMTM4Ni45NDQgMHoiIGhvcml6LWFkdi14PSIxMDI0Ii8+PGdseXBoIGdseXBoLW5hbWU9InN1Y2Nlc3MiIHVuaWNvZGU9Iu6YtSIgZD0iTTk1Ljc3OCAzNjQuODE3Yy0xMS43NDIgMTAuMzc3LTEzLjI0NCAyOC43NC0zLjI3NyA0MS4wOTdsMjYuMTQ2IDMyLjQ5NWM5LjkgMTIuMjg4IDI5LjA4MiAxNi4yNDcgNDMuMDc3IDguNjdMMzg2LjM4OSAzMjUuMjljMTMuODU4LTcuNTEgMzQuOTUzLTUuNTk4IDQ3LjEwNCA0LjM2OWw1MDguMzE0IDQxNS40N2MxMi4xNTEgOS45IDMwLjMxIDguNDY2IDQwLjgyMy0zLjQxM2wtLjg4Ny45NTZjMTAuMzc2LTExLjgxIDEwLjc4Ni0zMS4zMzQuOTU2LTQzLjQ4NmwtNTEwLjc3Mi02MzAuMWMtOS44OTgtMTIuMTUyLTI3LjQ0My0xMy41ODUtMzkuMTE2LTMuMjA5TDk1Ljc3OCAzNjQuODE3eiIgaG9yaXotYWR2LXg9IjEwMjQiLz48Z2x5cGggZ2x5cGgtbmFtZT0iZXJyb3IiIHVuaWNvZGU9Iu6ZmCIgZD0iTTE4Mi45MzggNzc5LjUwOGwtNjQuODY0LTU0LjU4YzExNS40ODktODYuMjIxIDIyMy4wNjctMTg1LjA5OCAzMTcuNTkzLTI4My45NzVDMjkwLjkxMSAyOTUuMDExIDE3Ny40IDE1MS40NDEgMTE3LjY3OSA5My42OTdMMjQxLjA3Ny05LjUzYzQzLjkwMyA5MC41NyAxMzkuMjE5IDIyNy44MTIgMjY2Ljk2OCAzNzEuNzc3QzYzNS43OTQgMjE3LjQ5MSA3MzEuNTA3IDc5LjQ2IDc3NS40MDgtMTEuNTA4YzAgMCAxMjAuMjM1IDEyNy43NSAxMzAuOTEzIDEwNy45NzQtNDYuMjc0IDUyLjIwNy0xNTkuMzkgMjA0LjA4Mi0zMTEuMjY0IDM1OS41MTYgODcuMDExIDg5LjM4NSAxODQuNzAyIDE3Ny45NzkgMjg5LjExNiAyNTUuODk0bC0yOC40NzcgNTIuOTk4QzczNy40NCA3MDUuOTQ0IDYyNC43MiA2MTguNTM2IDUyMy40NyA1MjUuNTkyYy0xMDIuMDQxIDk2LjktMjE3LjUzIDE4OS4wNTMtMzQwLjUzMyAyNTMuOTE2eiIgaG9yaXotYWR2LXg9IjEwMjQiLz48Z2x5cGggZ2x5cGgtbmFtZT0iaW5wdXRfY2xvc2UiIHVuaWNvZGU9Iu6bjiIgZD0iTTU0NCA3NjhhMzg0IDM4NCAwIDEwMC03NjggMzg0IDM4NCAwIDAwMCA3Njh6TTQwOC43MDQgNTY1LjE4NGEzMiAzMiAwIDExLTQ1LjMxMi00NS4yNDhMNDk5LjIgMzg0LjE5MiAzNjMuMzkyIDI0OC40NDhhMzIgMzIgMCAwMS0zLjY0OC00MC44MzJsMy42NDgtNC40OGEzMiAzMiAwIDAxNDUuMzEyIDBsMTM1Ljc0NCAxMzUuODA4TDY4MC4xOTIgMjAzLjJhMzIgMzIgMCAwMTQwLjgzMi0zLjcxMmw0LjQ4IDMuNzEyYTMyIDMyIDAgMDEwIDQ1LjI0OEw1ODkuNjMyIDM4NC4xOTJsMTM1Ljc0NCAxMzUuNzQ0YTMyIDMyIDAgMDEzLjcxMiA0MC44MzJsLTMuNzEyIDQuNDhhMzIgMzIgMCAwMS00NS4yNDggMEw1NDQuNDQ4IDQyOS40NHoiIGhvcml6LWFkdi14PSIxMDI0Ii8+PGdseXBoIGdseXBoLW5hbWU9ImRlc2NlbmQiIHVuaWNvZGU9Iu6bhyIgZD0iTTM3Ny42IDc1NS4ybC0yODgtMzEzLjZjLTEyLjgtMTIuOC0xMi44LTMyIDAtNDQuOCAxMi44LTEyLjggMzItMTIuOCA0NC44IDBsMjM2LjggMjYyLjRWMzJjMC0xOS4yIDEyLjgtMzIgMjUuNi0zMnMzMiAxMi44IDMyIDMydjcwNGM2LjQgMTkuMi0xMi44IDMyLTMyIDMyLTYuNCAwLTE5LjIgMC0xOS4yLTEyLjh6IiBob3Jpei1hZHYteD0iMTAyNCIvPjxnbHlwaCBnbHlwaC1uYW1lPSJhc2NlbmQiIHVuaWNvZGU9Iu6bjSIgZD0iTTg4OS42IDM3MS4yTDY1OS4yIDEwOC44VjczNmMwIDEyLjgtMTkuMiAzMi0zMiAzMnMtMzItMTkuMi0zMi0zMlYzMmMwLTEyLjggMTIuOC0zMiAzMi0zMiA2LjQgMCAxOS4yIDYuNCAxOS4yIDEyLjhsMjg4IDMyMGMxMi44IDEyLjggMTIuOCAzMiAwIDQ0LjgtMTIuOCA2LjQtMzIgNi40LTQ0LjgtNi40eiIgaG9yaXotYWR2LXg9IjEwMjQiLz48Z2x5cGggZ2x5cGgtbmFtZT0iYWRkIiB1bmljb2RlPSLum4IiIGQ9Ik01MTIgNzM2YTMyIDMyIDAgMDAzMi0zMlY0MTZoMjg4YTMyIDMyIDAgMTAwLTY0SDU0NFY2NGEzMiAzMiAwIDEwLTY0IDB2Mjg4SDE5MmEzMiAzMiAwIDAwMCA2NGgyODh2Mjg4YTMyIDMyIDAgMDAzMiAzMnoiIGhvcml6LWFkdi14PSIxMDI0Ii8+PGdseXBoIGdseXBoLW5hbWU9ImludG8iIHVuaWNvZGU9Iu6bgyIgZD0iTTY0Mi41NiAzODIuNTkyTDMxNS41MiA1My4xMmEzMS4xMDQgMzEuMTA0IDAgMDEuOTYtNDQuMTYgMzIuMzg0IDMyLjM4NCAwIDAxNDUuMjQ4LjY0bDM1MC4yMDggMzUyLjk2YzEyLjIyNCAxMi4zNTIgOS43OTIgMzAuMzM2LTIuMzY4IDQyLjYyNEwzNTguOTc2IDc1OC40YTMyLjM4NCAzMi4zODQgMCAwMS00NS4zMTIuNjQgMzEuMTA0IDMxLjEwNCAwIDAxLS45Ni00NC4wOTZsMzI5Ljc5Mi0zMzIuMzUyeiIgaG9yaXotYWR2LXg9IjEwMjQiLz48Z2x5cGggZ2x5cGgtbmFtZT0ibW9yZSIgdW5pY29kZT0i7puFIiBkPSJNODMyIDE2MGEzMiAzMiAwIDEwMC02NEgxOTJhMzIgMzIgMCAxMDAgNjRoNjQwem0wIDI1NmEzMiAzMiAwIDEwMC02NEgxOTJhMzIgMzIgMCAwMDAgNjRoNjQwem0wIDI1NmEzMiAzMiAwIDEwMC02NEgxOTJhMzIgMzIgMCAwMDAgNjRoNjQweiIgaG9yaXotYWR2LXg9IjEwMjQiLz48Z2x5cGggZ2x5cGgtbmFtZT0iZmlsdGVyIiB1bmljb2RlPSLum4YiIGQ9Ik04MjguMDMyIDczNmgtNjMzLjZjLTEyLjggMC0yMi40LTE2LTEyLjgtMjUuNmwyNzItMzIwYzYuNC02LjQgOS42LTE2IDkuNi0yMi40VjE2YzAtMjIuNCAyNS42LTQ4IDQ4LTQ4czQ4IDI1LjYgNDggNDh2MzUyYzAgOS42IDMuMiAxNiA5LjYgMjIuNGwyNzIgMzIwYzkuNiA5LjYgMCAyNS42LTEyLjggMjUuNm0tMzE2LjgtODMyYy01Ny42IDAtMTEyIDU0LjQtMTEyIDExMnYzNDIuNGwtMjg0LjggMzMyLjhjLTE2IDE5LjItMjIuNCA0MS42LTE2IDY0IDkuNiAyOC44IDMyIDQ0LjggNjAuOCA0NC44aDY5Ny42YzIyLjQgMCA0OC05LjYgNjAuOC0zMiAxNi0yNS42IDEyLjgtNTQuNC02LjQtNzMuNmwtMjg4LTMzOS4yVjEyLjhjMC01NC40LTU0LjQtMTA4LjgtMTEyLTEwOC44IiBob3Jpei1hZHYteD0iMTAyNCIvPjxnbHlwaCBnbHlwaC1uYW1lPSJjaGFuZ2UiIHVuaWNvZGU9Iu6biCIgZD0iTTgxOS4wNzIgNzAwLjU0NGg4OC42NGMxOC45NDQgMCAzMS42MTYgMTIuNjcyIDMxLjYxNiAzMS42OCAwIDE4Ljk0NC0xMi42NzIgMzEuNjE2LTMxLjYxNiAzMS42MTZINzQ5LjQ0Yy0xMi43MzYgMC0yNS4zNDQgMC0zOC4wMTYtMTIuNjcyLTkuNDcyLTkuNDcyLTkuNDcyLTIyLjE0NC05LjQ3Mi0zNC44MTZWNTU4LjA4YzAtMTguOTQ0IDEyLjYwOC0zMS42MTYgMzEuNjE2LTMxLjYxNiAxOC45NDQgMCAzMS42OCAxMi42NzIgMzEuNjggMzEuNjE2djExMC43ODRjODIuMjQtNzIuNzY4IDEyOS43MjgtMTc0LjA4IDEyOS43MjgtMjg0Ljg2NEEzODIuMjcyIDM4Mi4yNzIgMCAwMDUxMiAuOTZhMzYzLjI2NCAzNjMuMjY0IDAgMDAtMTE3LjEyIDE5LjAwOGMtMTUuODA4IDMuMi0zMS42OC0zLjItMzguMDE2LTE5LjAwOC02LjI3Mi0xNS44MDggMy4yLTMxLjYxNiAxOS4wMDgtMzcuOTUyQTQ4Ny41NTIgNDg3LjU1MiAwIDAxNTEyLTU2YTQzOS4wNCA0MzkuMDQgMCAwMTQ0MCA0NDBjMCAxMjAuMzItNDcuNDg4IDIzNC4yNC0xMzIuOTI4IDMxNi41NDRtLTUyOC42NC00NTkuMDA4Yy0xOS4wMDggMC0zMS42OC0xMi42NzItMzEuNjgtMzEuNjE2Vjk5LjEzNkMxNzYuNDQ4IDE2OC43NjggMTI4Ljk2IDI3My4yMTYgMTI4Ljk2IDM4NEEzODIuMzM2IDM4Mi4zMzYgMCAwMDUxMiA3NjcuMDRjMzguMDE2IDAgNzUuOTY4LTYuNCAxMTMuOTItMTkuMDA4IDE1LjgwOC02LjMzNiAzMS42OCAzLjIgMzguMDE2IDE5LjAwOCA2LjMzNiAxNS44MDgtMy4yIDMxLjYxNi0xOS4wMDggMzcuOTUyQTQ4MS45MiA0ODEuOTIgMCAwMTUxMiA4MjQgNDM5LjA0IDQzOS4wNCAwIDAxNzIgMzg0YzAtMTIwLjMyIDUwLjYyNC0yMzQuMjQgMTM2LjEyOC0zMTYuNTQ0aC05MS44NGMtMTguOTQ0IDAtMzEuNjE2LTEyLjY3Mi0zMS42MTYtMzEuNjggMC0xOC45NDQgMTIuNjcyLTMxLjYxNiAzMS42MTYtMzEuNjE2SDI3Ny43NmM5LjQ3MiAwIDIyLjE0NCAwIDMxLjY4IDEyLjY3MiAxMi42MDggMTIuNjA4IDEyLjYwOCAyNS4yOCAxMi42MDggMzQuODE2VjIwOS45MmMwIDE4Ljk0NC0xMi42MDggMzEuNjE2LTMxLjYxNiAzMS42MTYiIGhvcml6LWFkdi14PSIxMDI0Ii8+PGdseXBoIGdseXBoLW5hbWU9ImZvbGxvdyIgdW5pY29kZT0i7puJIiBkPSJNNTEyLTU5LjA3MmE2My44NzIgNjMuODcyIDAgMDAtMjQuMTI4IDYuOTEyYy0zMS4wNCAyNC4xMjgtMjk2LjMyIDIzMC44NDgtMzUxLjQ4OCAzMTAuMTQ0Qzc0LjI0IDM0MC42NzIgNjQgMzg1LjQ3MiA2NCA0NjQuNjQgNjQgNjMwLjIwOCAxODQuNjQgNzY4IDMzNi4yNTYgNzY4YzY1LjQ3MiAwIDEyNy40ODgtMjQuMTI4IDE3NS43NDQtNjguOTI4QTI1Ni41MTIgMjU2LjUxMiAwIDAwNjg3Ljc0NCA3NjhDODM5LjQyNCA3NjggOTYwIDYzMC4xNDQgOTYwIDQ2NC43NjhjMC03NS44NC0xMC4zNjgtMTIwLjY0LTcyLjMyLTIwNi43ODQtNTUuMTY4LTc1Ljg0LTMyMy45NjgtMjg2LjA4LTM1MS41NTItMzEwLjE0NEE2My44NzIgNjMuODcyIDAgMDA1MTItNTkuMDcyek0xMjggNDUzLjUwNGMwLTQxLjcyOCAxMC4yNC05MC40MzIgNjIuNDY0LTE2My41MkMyMzIuMjU2IDIzNC4zMDQgNDE1Ljg3MiA5My43NiA1MTMuMjggMTMuNzZjOTcuNDA4IDgwIDI4MC45NiAyMjAuNTQ0IDMyMi42ODggMjc2LjIyNEM4ODguMTI4IDM2My4wNzIgODk2IDQxNS4yMzIgODk2IDQ1My41MDQgODk2IDU4MC42MDggODE0LjA4IDcwNCA2ODcuNDI0IDcwNGMtNjguNzM2IDAtMTA4LjE2LTI2LjYyNC0xNTYuODY0LTY4LjM1Mi0xMC4yNC02Ljk3Ni0xNS41NTItNi45NzYtMTcuMjgtNi45NzYtMS42NjQgMC05LjIxNiAwLTE5LjA3MiA3LjA0QzQ0MS45ODQgNjc3LjMxMiA0MDUuNDQgNzA0IDM0Ni4yNCA3MDQgMjE0LjQgNzA0IDEyOCA1ODUuNzI4IDEyOCA0NTMuNTA0eiIgaG9yaXotYWR2LXg9IjEwMjQiLz48Z2x5cGggZ2x5cGgtbmFtZT0icHVsbGRvd24iIHVuaWNvZGU9Iu6biiIgZD0iTTUxMC41OTIgMjM3LjQ0TDE4MS4xMiA1NjQuNDhhMzEuMTA0IDMxLjEwNCAwIDAxLTQ0LjE2LS45NiAzMi4zODQgMzIuMzg0IDAgMDEuNjQtNDUuMjQ4bDM1Mi45Ni0zNTAuMjA4YzEyLjM1Mi0xMi4yMjQgMzAuMzM2LTkuNzkyIDQyLjYyNCAyLjM2OGwzNTMuMjggMzUwLjU5MmEzMi4zODQgMzIuMzg0IDAgMDEuNjQgNDUuMzEyIDMxLjEwNCAzMS4xMDQgMCAwMS00NC4wOTYuOTZMNTEwLjU5MiAyMzcuNDR6IiBob3Jpei1hZHYteD0iMTAyNCIvPjxnbHlwaCBnbHlwaC1uYW1lPSJwdWxsdXAiIHVuaWNvZGU9Iu6biyIgZD0iTTUxMC41OTIgNTMwLjU2TDE4MS4xMiAyMDMuNTJhMzEuMTA0IDMxLjEwNCAwIDAwLTQ0LjE2Ljk2IDMyLjM4NCAzMi4zODQgMCAwMC42NCA0NS4yNDhsMzUyLjk2IDM1MC4yMDhjMTIuMzUyIDEyLjIyNCAzMC4zMzYgOS43OTIgNDIuNjI0LTIuMzY4bDM1My4yOC0zNTAuNTkyYTMyLjM4NCAzMi4zODQgMCAwMC42NC00NS4zMTIgMzEuMTA0IDMxLjEwNCAwIDAwLTQ0LjA5Ni0uOTZMNTEwLjU5MiA1MzAuNTZ6IiBob3Jpei1hZHYteD0iMTAyNCIvPjxnbHlwaCBnbHlwaC1uYW1lPSJjb2xsZWN0aW9uIiB1bmljb2RlPSLum4wiIGQ9Ik00NjYuNDMyIDQ4LjI1NmwtMTI3LjA0LTY2Ljc1MmE5Ni4yNTYgOTYuMjU2IDAgMDAtMTM5LjY0OCAxMDEuNDRsMjQuMzIgMTQxLjQ0YTk3LjkyIDk3LjkyIDAgMDEtMjguMTYgODYuNjU2TDkyLjk5MiA0MTEuMjY0YTk2LjI1NiA5Ni4yNTYgMCAwMDUzLjM3NiAxNjQuMTZsMTQyLjA4IDIwLjYwOGE5Ny45MiA5Ny45MiAwIDAxNzMuNiA1My41NjhMNDI1LjYgNzc4LjMwNGE5Ni4yNTYgOTYuMjU2IDAgMDAxNzIuNjA4IDBsNjMuNTUyLTEyOC42NGE5Ny45MiA5Ny45MiAwIDAxNzMuNzI4LTUzLjYzMmwxNDIuMDgtMjAuNjA4YTk2LjI1NiA5Ni4yNTYgMCAwMDUzLjMxMi0xNjQuMTZMODI4LjE2IDMxMS4wNEE5Ny45MiA5Ny45MiAwIDAxODAwIDIyNC40NDhsMjQuMjU2LTE0MS41MDRhOTYuMjU2IDk2LjI1NiAwIDAwLTEzOS42NDgtMTAxLjQ0bC0xMjcuMDQgNjYuNzUyYTk3LjkyIDk3LjkyIDAgMDEtOTEuMTM2IDB6bTEyMS40NzIgNTcuNzkybDEyNy4wNC02Ni44MTZhMzAuOTc2IDMwLjk3NiAwIDAxNDQuOTkyIDMyLjY0bC0yNC4zMiAxNDEuNTA0YTE2My4yIDE2My4yIDAgMDA0Ni45NzYgMTQ0LjM4NGwxMDIuNzg0IDEwMC4yMjRhMzAuOTc2IDMwLjk3NiAwIDAxLTE3LjE1MiA1Mi44NjRsLTE0Mi4wOCAyMC42MDhhMTYzLjIgMTYzLjIgMCAwMC0xMjIuODggODkuMzQ0TDUzOS44NCA3NDkuNDRhMzAuOTc2IDMwLjk3NiAwIDAxLTU1LjU1MiAwTDQyMC42NzIgNjIwLjhhMTYzLjIgMTYzLjIgMCAwMC0xMjIuODgtODkuMjhsLTE0Mi4wMTYtMjAuNjA4YTMwLjk3NiAzMC45NzYgMCAwMS0xNy4xNTItNTIuODY0TDI0MS40MDggMzU3Ljc2YzM4LjQtMzcuNDQgNTYtOTEuNDU2IDQ2LjkxMi0xNDQuMzg0TDI2NCA3MS45MzZhMzAuOTc2IDMwLjk3NiAwIDAxNDQuOTkyLTMyLjY0bDEyNy4xMDQgNjYuNzUyYTE2My4yIDE2My4yIDAgMDAxNTEuODA4IDB6IiBob3Jpei1hZHYteD0iMTAyNCIvPjwvZm9udD48L2RlZnM+PC9zdmc+) format("svg");
}

.bili-font {
    font-family: bili-font !important;
    font-size: 4.26667vw;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.ic_hufen:before {
    content: "\e6d0";
}

.ic_search:before {
    content: "\e6cf";
}

.ic_success:before {
    content: "\e635";
}

.ic_error:before {
    content: "\e658";
}

.ic_input_close:before {
    content: "\e6ce";
}

.ic_descend:before {
    content: "\e6c7";
}

.ic_ascend:before {
    content: "\e6cd";
}

.ic_add:before {
    content: "\e6c2";
}

.ic_into:before {
    content: "\e6c3";
}

.ic_more:before {
    content: "\e6c5";
}

.ic_filter:before {
    content: "\e6c6";
}

.ic_change:before {
    content: "\e6c8";
}

.ic_follow:before {
    content: "\e6c9";
}

.ic_pulldown:before {
    content: "\e6ca";
}

.ic_pullup:before {
    content: "\e6cb";
}

.ic_collection:before {
    content: "\e6cc";
}

.v-transition--collapse {
    transition: height 0.3s ease-in-out, padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out;
}

.v-transition--ios-enter {
    opacity: 0;
    transform: scale(1.1);
    will-change: opacity, transform;
}

.v-transition--ios-leave-to {
    opacity: 0;
    transform: scale(0.9);
    will-change: opacity, transform;
}

.v-transition--ios-enter-active,
.v-transition--ios-leave-active {
    transition: 0.2s ease-in-out;
    will-change: opacity, transform;
}

.v-transition--md-enter {
    opacity: 0;
    transform: scale(0.9);
    will-change: opacity, transform;
}

.v-transition--md-leave-to {
    opacity: 0;
    will-change: opacity;
}

.v-transition--md-enter-active,
.v-transition--md-leave-active {
    transition: 0.15s ease-in-out;
    will-change: opacity, transform;
}

.v-transition--popup-enter,
.v-transition--popup-leave-to {
    opacity: 0;
}

.v-transition--popup-enter-active,
.v-transition--popup-level-active {
    transition: opacity 0.3s;
}

.v-transition--popup-enter-active>* {
    -webkit-animation: popup-enter 0.3s;
    animation: popup-enter 0.3s;
}

.v-transition--popup-level-active>* {
    -webkit-animation: popup-leave 0.3s;
    animation: popup-leave 0.3s;
}

body {
    margin: 0;
    font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;
}

body *,
body :after,
body :before {
    box-sizing: border-box;
}

body * {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
}

a {
    color: inherit;
    cursor: default;
    text-decoration: none;
}

li {
    list-style-type: none;
}

button {
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

div[contenteditable="true"],
input:not([type="radio"]):not([type="checkbox"]):not([type="range"]),
select,
textarea {
    -webkit-appearance: none;
    -webkit-user-select: auto !important;
    -moz-user-select: auto !important;
    -ms-user-select: auto !important;
    user-select: auto !important;
}

div[contenteditable="true"]:focus,
input:not([type="radio"]):not([type="checkbox"]):not([type="range"]):focus,
select:focus,
textarea:focus {
    outline: none;
}

@keyframes rolling {
    0% {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(1turn);
    }
}

@-webkit-keyframes rolling {
    0% {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(1turn);
    }
}

@keyframes popup-enter {
    0% {
        top: 55%;
    }
    to {
        top: 50%;
    }
}

@-webkit-keyframes popup-enter {
    0% {
        top: 55%;
    }
    to {
        top: 50%;
    }
}

@keyframes popup-leave {
    0% {
        top: 50%;
    }
    to {
        top: 55%;
    }
}

@-webkit-keyframes popup-leave {
    0% {
        top: 50%;
    }
    to {
        top: 55%;
    }
}

.v-drawer__footer:active,
.v-drawer__item.strict:active {
    background-color: rgba(0, 0, 0, 0.1);
}

.v-drawer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: none;
    pointer-events: none;
    overflow: hidden;
    z-index: 1003;
}

.v-drawer__wrap {
    position: absolute;
    transform: translateY(0);
    overflow: auto;
    -ms-scroll-chaining: none;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
    pointer-events: auto;
    box-sizing: content-box;
    z-index: 1003;
    background-color: #fff;
}

body.night-mode .v-drawer__wrap {
    background-color: #141414;
}

.v-drawer__line {
    height: 2.13333vw !important;
    background-color: #f8f8f8;
}

body.night-mode .v-drawer__line {
    background-color: #1b1b1b;
}

.v-drawer__footer,
.v-drawer__item.strict {
    position: relative;
    height: 13.33333vw;
    line-height: 13.33333vw;
    font-size: 4.26667vw;
    padding: 0 2.66667vw;
    color: #323233;
}

body.night-mode .v-drawer__footer,
body.night-mode .v-drawer__item.strict {
    color: #d1d1d2;
}

.v-drawer__footer:before,
.v-drawer__item.strict:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background-color: #ebedf0;
}

body.night-mode .v-drawer__footer:before,
body.night-mode .v-drawer__item.strict:before {
    background-color: #28292b;
}

.v-drawer__footer {
    text-align: center;
}

.v-drawer--bottom .v-drawer--transition-enter,
.v-drawer--bottom .v-drawer--transition-leave-to {
    transform: translateY(100%);
}

.v-drawer--offset.v-drawer--bottom .v-drawer__wrap {
    padding-bottom: env(safe-area-inset-bottom);
}

.v-drawer--offset.v-drawer--top .v-drawer__wrap {
    padding-top: env(safe-area-inset-top);
}

.v-drawer--offset.v-drawer--left .v-drawer__wrap {
    padding-left: env(safe-area-inset-left);
}

.v-drawer--offset.v-drawer--right .v-drawer__wrap {
    padding-right: env(safe-area-inset-right);
}

.v-drawer--top .v-drawer--transition-enter,
.v-drawer--top .v-drawer--transition-leave-to {
    transform: translateY(-100%);
}

.v-drawer--left .v-drawer--transition-enter,
.v-drawer--left .v-drawer--transition-leave-to {
    transform: translateX(-100%);
}

.v-drawer--right .v-drawer--transition-enter,
.v-drawer--right .v-drawer--transition-leave-to {
    transform: translateX(100%);
}

.v-drawer--transition-enter-active,
.v-drawer--transition-leave-active {
    transition: transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);
    will-change: transform;
}

.v-overlay {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    opacity: 0;
    z-index: 1002;
    pointer-events: auto;
}

.v-overlay--md {
    background-color: rgba(0, 0, 0, 0.32);
    transition: opacity 0.15s ease-in-out;
    will-change: opacity;
}

.v-overlay--ios {
    background-color: rgba(0, 0, 0, 0.3);
    transition: opacity 0.2s ease-in-out;
    will-change: opacity;
}

.v-overlay--show {
    opacity: 1;
}

.v-swipe {
    width: 100%;
    border-radius: 1.06667vw;
    overflow: hidden;
    transform: translateZ(0);
    height: 32vw;
}

.v-swipe__wrap {
    position: relative;
    width: 100%;
    height: 100%;
}

.v-swipe__item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
}

.v-swipe__item:first-child {
    z-index: 2;
}

.v-swipe__item>* {
    width: 100%;
    height: 100%;
}

.v-swipe__indicator {
    position: absolute;
    right: 2.13333vw;
    bottom: 2.13333vw;
    z-index: 3;
    pointer-events: none;
}

.v-swipe__indicator__item {
    display: inline-block;
    width: 1.33333vw;
    height: 1.33333vw;
    border-radius: 50%;
    margin-left: 1.06667vw;
    background-color: #fff;
}

body.night-mode .v-swipe__indicator__item {
    background-color: #141414;
}

.v-swipe__indicator__item.is-active {
    background-color: #fb7299;
}

body.night-mode .v-swipe__indicator__item.is-active {
    background-color: #eb7093;
}

.v-navbar__wrap__title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.v-navbar {
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.v-navbar__body,
.v-navbar__shim {
    height: 11.73333vw;
    box-sizing: content-box;
    padding-top: 5.33333vw;
}

@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .v-navbar__body,
    .v-navbar__shim {
        padding-top: env(safe-area-inset-top);
    }
}

@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    .v-navbar__body,
    .v-navbar__shim {
        padding-top: env(safe-area-inset-top);
    }
}

@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    .v-navbar__body,
    .v-navbar__shim {
        padding-top: env(safe-area-inset-top);
    }
}

.v-navbar__body {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.v-navbar--fixed .v-navbar__body {
    position: fixed;
}

.v-navbar__outer {
    position: relative;
}

.v-navbar__background {
    position: relative;
    width: 100%;
    overflow: hidden;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2.93333vw 3.2vw;
}

.v-navbar__background__wrap {
    transition: opacity 0.2s ease;
}

.v-navbar--border .v-navbar__body:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    background-color: #e7e7e7;
    transform: scaleY(0.5);
}

.v-navbar--bg,
.v-navbar--bg:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.v-navbar--bg:after {
    content: "";
    height: 16vw;
    background-image: linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.3));
    z-index: 1;
}

.v-navbar--bg .v-navbar__body {
    transition: all 0.2s ease;
}

.v-navbar--bg.v-navbar--fixed .v-navbar__body {
    transition: all 0.6s ease;
}

.v-navbar__wrap {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 11.73333vw;
    padding: 2.93333vw 3.2vw;
    line-height: 5.86667vw;
}

.v-navbar__wrap__title {
    position: absolute;
    left: 0;
    top: 2.93333vw;
    width: 100%;
    font-size: 4.26667vw;
    text-align: center;
    padding: 0 24vw;
    z-index: 0;
}

.v-navbar__wrap__after,
.v-navbar__wrap__before {
    position: relative;
    z-index: 2;
    font-size: 0;
}

.v-navbar__wrap__after>i,
.v-navbar__wrap__before>i {
    width: 5.86667vw;
    height: 5.86667vw;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
}

.v-navbar__wrap__after>span,
.v-navbar__wrap__before>span {
    font-size: 3.73333vw;
    vertical-align: middle;
}

.v-navbar__wrap__before {
    position: absolute;
    left: 3.2vw;
    top: 2.93333vw;
}

.v-navbar__wrap__before>i {
    margin-right: 3.2vw;
}

.v-navbar__wrap__before__back {
    transform: rotate(180deg);
}

.v-navbar__wrap__after {
    position: absolute;
    right: 3.2vw;
    top: 2.93333vw;
}

.v-navbar__wrap__after>* {
    margin-left: 5.33333vw;
}

.v-switcher {
    height: 100%;
    overflow: hidden;
    position: relative;
    color: #fb7299;
    background-color: #fb7299;
}

body.night-mode .v-switcher {
    color: #eb7093;
    background-color: #eb7093;
}

.v-switcher__header {
    height: 10.66667vw;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, PingFang SC, Source Han Sans SC, Helvetica Neue, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
    background-color: #fff;
}

body.night-mode .v-switcher__header {
    background-color: #141414;
}

.v-switcher__header:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background-color: #e7e7e7;
}

body.night-mode .v-switcher__header:before {
    background-color: #2a2a2a;
}

.v-switcher__header__after,
.v-switcher__header__before {
    position: relative;
    flex-shrink: 0;
    z-index: 1;
}

.v-switcher__header__before {
    float: left;
    order: 0;
}

.v-switcher__header__after {
    float: right;
    order: 3;
}

.v-switcher__header__tabs__wrap {
    overflow: hidden;
    height: 100%;
    flex: 1;
    order: 1;
}

.v-switcher__header__tabs__list {
    position: relative;
    font-size: 0;
    z-index: 1;
    padding: 0;
    margin: 0;
    flex: 1;
    white-space: nowrap;
}

.v-switcher__header__tabs__item {
    height: 10.66667vw;
    line-height: 10.66667vw;
    display: inline-block;
    text-align: center;
    font-size: 3.73333vw;
    vertical-align: middle;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    padding: 0 4.26667vw;
    color: #505050;
}

body.night-mode .v-switcher__header__tabs__item {
    color: #b5b5b5;
}

.v-switcher__header__tabs__item.is-active {
    color: inherit !important;
}

.v-switcher__header__tabs__item i,
.v-switcher__header__tabs__item span {
    vertical-align: middle;
}

.v-switcher__header__anchor {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.53333vw;
    border-radius: 0.53333vw;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-property: width, height, transform;
    pointer-events: none;
    background: currentColor;
}

.v-switcher__header--start {
    text-align: left;
    display: flex;
    flex-direction: row;
}

.v-switcher__header--start .v-switcher__header__tabs__item {
    flex-shrink: 0;
}

.v-switcher__header--center {
    text-align: center;
}

.v-switcher__header--around {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 4.26667vw;
}

.v-switcher__header--end {
    text-align: right;
}

.v-switcher__content {
    box-sizing: border-box;
    height: 100%;
    z-index: 0;
    color: #212121;
    background-color: #fff;
}

body.night-mode .v-switcher__content {
    color: #e1e1e1;
    background-color: #141414;
}

.v-switcher__content--multi {
    padding-top: 10.66667vw;
    margin-top: -10.66667vw;
}

.v-switcher__content__wrap {
    position: relative;
    height: 100%;
}

.v-switcher__content__item {
    height: 100%;
    display: none;
    overflow-y: auto;
}

.v-switcher__content__item i,
.v-switcher__content__item span {
    vertical-align: middle;
}

.v-switcher__content__item.is-active {
    display: block;
}

.v-switcher__content--swipe .v-switcher__content__item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
}

.v-switcher__content--swipe .v-switcher__content__item.is-current {
    position: relative;
    z-index: 1;
}

.v-switcher__content--swipe .v-switcher__content__item.is-active {
    will-change: transform;
}

.v-switcher--fluid {
    height: auto;
}

.v-affix--fixed {
    position: fixed;
    z-index: 1001;
}

@font-face {
    font-family: bili-font;
    src: url(data:application/vnd.ms-fontobject;base64,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AAEECQALACYB7QpDcmVhdGVkIGJ5IGljb25mb250CmJpbGliaWxpX3dlYl9tb2JpbGVSZWd1bGFyYmlsaWJpbGlfd2ViX21vYmlsZWJpbGliaWxpX3dlYl9tb2JpbGVWZXJzaW9uIDEuMGJpbGliaWxpX3dlYl9tb2JpbGVHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQAKAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQACgBiAGkAbABpAGIAaQBsAGkAXwB3AGUAYgBfAG0AbwBiAGkAbABlAFIAZQBnAHUAbABhAHIAYgBpAGwAaQBiAGkAbABpAF8AdwBlAGIAXwBtAG8AYgBpAGwAZQBiAGkAbABpAGIAaQBsAGkAXwB3AGUAYgBfAG0AbwBiAGkAbABlAFYAZQByAHMAaQBvAG4AIAAxAC4AMABiAGkAbABpAGIAaQBsAGkAXwB3AGUAYgBfAG0AbwBiAGkAbABlAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESAAVodWZlbgZzZWFyY2gHc3VjY2VzcwVlcnJvcgtpbnB1dF9jbG9zZQdkZXNjZW5kBmFzY2VuZANhZGQEaW50bwRtb3JlBmZpbHRlcgZjaGFuZ2UGZm9sbG93CHB1bGxkb3duBnB1bGx1cApjb2xsZWN0aW9uAAAA);
    src: url(data:application/vnd.ms-fontobject;base64,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AAEECQALACYB7QpDcmVhdGVkIGJ5IGljb25mb250CmJpbGliaWxpX3dlYl9tb2JpbGVSZWd1bGFyYmlsaWJpbGlfd2ViX21vYmlsZWJpbGliaWxpX3dlYl9tb2JpbGVWZXJzaW9uIDEuMGJpbGliaWxpX3dlYl9tb2JpbGVHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQAKAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQACgBiAGkAbABpAGIAaQBsAGkAXwB3AGUAYgBfAG0AbwBiAGkAbABlAFIAZQBnAHUAbABhAHIAYgBpAGwAaQBiAGkAbABpAF8AdwBlAGIAXwBtAG8AYgBpAGwAZQBiAGkAbABpAGIAaQBsAGkAXwB3AGUAYgBfAG0AbwBiAGkAbABlAFYAZQByAHMAaQBvAG4AIAAxAC4AMABiAGkAbABpAGIAaQBsAGkAXwB3AGUAYgBfAG0AbwBiAGkAbABlAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESAAVodWZlbgZzZWFyY2gHc3VjY2VzcwVlcnJvcgtpbnB1dF9jbG9zZQdkZXNjZW5kBmFzY2VuZANhZGQEaW50bwRtb3JlBmZpbHRlcgZjaGFuZ2UGZm9sbG93CHB1bGxkb3duBnB1bGx1cApjb2xsZWN0aW9uAAAA#iefix) format("embedded-opentype"), url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2"), url(data:font/woff;base64,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) format("woff"), url(data:font/ttf;base64,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aQBjAG8AbgBmAG8AbgB0AAoAYgBpAGwAaQBiAGkAbABpAF8AdwBlAGIAXwBtAG8AYgBpAGwAZQBSAGUAZwB1AGwAYQByAGIAaQBsAGkAYgBpAGwAaQBfAHcAZQBiAF8AbQBvAGIAaQBsAGUAYgBpAGwAaQBiAGkAbABpAF8AdwBlAGIAXwBtAG8AYgBpAGwAZQBWAGUAcgBzAGkAbwBuACAAMQAuADAAYgBpAGwAaQBiAGkAbABpAF8AdwBlAGIAXwBtAG8AYgBpAGwAZQBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgAFaHVmZW4Gc2VhcmNoB3N1Y2Nlc3MFZXJyb3ILaW5wdXRfY2xvc2UHZGVzY2VuZAZhc2NlbmQDYWRkBGludG8EbW9yZQZmaWx0ZXIGY2hhbmdlBmZvbGxvdwhwdWxsZG93bgZwdWxsdXAKY29sbGVjdGlvbgAAAA==) format("truetype"), url(data:image/svg+xml;base64,PHN2Zz48ZGVmcz48Zm9udCBpZD0iYmlsaWJpbGlfd2ViX21vYmlsZSIgaG9yaXotYWR2LXg9IjEwMjQiPjxmb250LWZhY2UgZm9udC1mYW1pbHk9ImJpbGliaWxpX3dlYl9tb2JpbGUiIGZvbnQtd2VpZ2h0PSI1MDAiIHVuaXRzLXBlci1lbT0iMTAyNCIgYXNjZW50PSI4OTYiIGRlc2NlbnQ9Ii0xMjgiLz48Z2x5cGggZ2x5cGgtbmFtZT0iaHVmZW4iIHVuaWNvZGU9Iu6bkCIgZD0iTTgyOC44IDU5Ni41NDRhMzIgMzIgMCAwMDQ4Ljk2LTQwLjgzMmwtMy43MTItNC40MTYtNDUyLjU0NC00NTIuNDhhMzIgMzIgMCAwMC00MC44MzItMy43NzZsLTQuNDggMy43MTJMMTUwLjAxNiAzMjUuMTJhMzIgMzIgMCAwMDQwLjgzMiA0OC45Nmw0LjQ4LTMuNzEyTDM5OC45MTIgMTY2LjcybDQyOS45NTIgNDI5Ljg4OHoiIGhvcml6LWFkdi14PSIxMDI0Ii8+PGdseXBoIGdseXBoLW5hbWU9InNlYXJjaCIgdW5pY29kZT0i7puPIiBkPSJNNjYxLjc2IDE3NS43NDRhMzM2LjI1NiAzMzYuMjU2IDAgMDAtNDYwLjM1MiAxNS43NDQgMzM2LjM4NCAzMzYuMzg0IDAgMDAwIDQ3Ny4yNDggMzM2LjM4NCAzMzYuMzg0IDAgMDA0NzcuMTg0IDAgMzM2LjI1NiAzMzYuMjU2IDAgMDAyNy4yNjQtNDQ2LjU5MmwxOTUuMi0xOTUuMmEzMiAzMiAwIDEwLTQ1LjMxMi00NS4xODRsLTE5My45MiAxOTMuOTJ6bS0yOC4wOTYgNjAuODY0YTI3Mi43MDQgMjcyLjcwNCAwIDAxMCAzODYuOTQ0IDI3Mi43MDQgMjcyLjcwNCAwIDAxLTM4Ni45NDQgMCAyNzIuNzA0IDI3Mi43MDQgMCAwMTAtMzg2Ljk0NCAyNzIuNzA0IDI3Mi43MDQgMCAwMTM4Ni45NDQgMHoiIGhvcml6LWFkdi14PSIxMDI0Ii8+PGdseXBoIGdseXBoLW5hbWU9InN1Y2Nlc3MiIHVuaWNvZGU9Iu6YtSIgZD0iTTk1Ljc3OCAzNjQuODE3Yy0xMS43NDIgMTAuMzc3LTEzLjI0NCAyOC43NC0zLjI3NyA0MS4wOTdsMjYuMTQ2IDMyLjQ5NWM5LjkgMTIuMjg4IDI5LjA4MiAxNi4yNDcgNDMuMDc3IDguNjdMMzg2LjM4OSAzMjUuMjljMTMuODU4LTcuNTEgMzQuOTUzLTUuNTk4IDQ3LjEwNCA0LjM2OWw1MDguMzE0IDQxNS40N2MxMi4xNTEgOS45IDMwLjMxIDguNDY2IDQwLjgyMy0zLjQxM2wtLjg4Ny45NTZjMTAuMzc2LTExLjgxIDEwLjc4Ni0zMS4zMzQuOTU2LTQzLjQ4NmwtNTEwLjc3Mi02MzAuMWMtOS44OTgtMTIuMTUyLTI3LjQ0My0xMy41ODUtMzkuMTE2LTMuMjA5TDk1Ljc3OCAzNjQuODE3eiIgaG9yaXotYWR2LXg9IjEwMjQiLz48Z2x5cGggZ2x5cGgtbmFtZT0iZXJyb3IiIHVuaWNvZGU9Iu6ZmCIgZD0iTTE4Mi45MzggNzc5LjUwOGwtNjQuODY0LTU0LjU4YzExNS40ODktODYuMjIxIDIyMy4wNjctMTg1LjA5OCAzMTcuNTkzLTI4My45NzVDMjkwLjkxMSAyOTUuMDExIDE3Ny40IDE1MS40NDEgMTE3LjY3OSA5My42OTdMMjQxLjA3Ny05LjUzYzQzLjkwMyA5MC41NyAxMzkuMjE5IDIyNy44MTIgMjY2Ljk2OCAzNzEuNzc3QzYzNS43OTQgMjE3LjQ5MSA3MzEuNTA3IDc5LjQ2IDc3NS40MDgtMTEuNTA4YzAgMCAxMjAuMjM1IDEyNy43NSAxMzAuOTEzIDEwNy45NzQtNDYuMjc0IDUyLjIwNy0xNTkuMzkgMjA0LjA4Mi0zMTEuMjY0IDM1OS41MTYgODcuMDExIDg5LjM4NSAxODQuNzAyIDE3Ny45NzkgMjg5LjExNiAyNTUuODk0bC0yOC40NzcgNTIuOTk4QzczNy40NCA3MDUuOTQ0IDYyNC43MiA2MTguNTM2IDUyMy40NyA1MjUuNTkyYy0xMDIuMDQxIDk2LjktMjE3LjUzIDE4OS4wNTMtMzQwLjUzMyAyNTMuOTE2eiIgaG9yaXotYWR2LXg9IjEwMjQiLz48Z2x5cGggZ2x5cGgtbmFtZT0iaW5wdXRfY2xvc2UiIHVuaWNvZGU9Iu6bjiIgZD0iTTU0NCA3NjhhMzg0IDM4NCAwIDEwMC03NjggMzg0IDM4NCAwIDAwMCA3Njh6TTQwOC43MDQgNTY1LjE4NGEzMiAzMiAwIDExLTQ1LjMxMi00NS4yNDhMNDk5LjIgMzg0LjE5MiAzNjMuMzkyIDI0OC40NDhhMzIgMzIgMCAwMS0zLjY0OC00MC44MzJsMy42NDgtNC40OGEzMiAzMiAwIDAxNDUuMzEyIDBsMTM1Ljc0NCAxMzUuODA4TDY4MC4xOTIgMjAzLjJhMzIgMzIgMCAwMTQwLjgzMi0zLjcxMmw0LjQ4IDMuNzEyYTMyIDMyIDAgMDEwIDQ1LjI0OEw1ODkuNjMyIDM4NC4xOTJsMTM1Ljc0NCAxMzUuNzQ0YTMyIDMyIDAgMDEzLjcxMiA0MC44MzJsLTMuNzEyIDQuNDhhMzIgMzIgMCAwMS00NS4yNDggMEw1NDQuNDQ4IDQyOS40NHoiIGhvcml6LWFkdi14PSIxMDI0Ii8+PGdseXBoIGdseXBoLW5hbWU9ImRlc2NlbmQiIHVuaWNvZGU9Iu6bhyIgZD0iTTM3Ny42IDc1NS4ybC0yODgtMzEzLjZjLTEyLjgtMTIuOC0xMi44LTMyIDAtNDQuOCAxMi44LTEyLjggMzItMTIuOCA0NC44IDBsMjM2LjggMjYyLjRWMzJjMC0xOS4yIDEyLjgtMzIgMjUuNi0zMnMzMiAxMi44IDMyIDMydjcwNGM2LjQgMTkuMi0xMi44IDMyLTMyIDMyLTYuNCAwLTE5LjIgMC0xOS4yLTEyLjh6IiBob3Jpei1hZHYteD0iMTAyNCIvPjxnbHlwaCBnbHlwaC1uYW1lPSJhc2NlbmQiIHVuaWNvZGU9Iu6bjSIgZD0iTTg4OS42IDM3MS4yTDY1OS4yIDEwOC44VjczNmMwIDEyLjgtMTkuMiAzMi0zMiAzMnMtMzItMTkuMi0zMi0zMlYzMmMwLTEyLjggMTIuOC0zMiAzMi0zMiA2LjQgMCAxOS4yIDYuNCAxOS4yIDEyLjhsMjg4IDMyMGMxMi44IDEyLjggMTIuOCAzMiAwIDQ0LjgtMTIuOCA2LjQtMzIgNi40LTQ0LjgtNi40eiIgaG9yaXotYWR2LXg9IjEwMjQiLz48Z2x5cGggZ2x5cGgtbmFtZT0iYWRkIiB1bmljb2RlPSLum4IiIGQ9Ik01MTIgNzM2YTMyIDMyIDAgMDAzMi0zMlY0MTZoMjg4YTMyIDMyIDAgMTAwLTY0SDU0NFY2NGEzMiAzMiAwIDEwLTY0IDB2Mjg4SDE5MmEzMiAzMiAwIDAwMCA2NGgyODh2Mjg4YTMyIDMyIDAgMDAzMiAzMnoiIGhvcml6LWFkdi14PSIxMDI0Ii8+PGdseXBoIGdseXBoLW5hbWU9ImludG8iIHVuaWNvZGU9Iu6bgyIgZD0iTTY0Mi41NiAzODIuNTkyTDMxNS41MiA1My4xMmEzMS4xMDQgMzEuMTA0IDAgMDEuOTYtNDQuMTYgMzIuMzg0IDMyLjM4NCAwIDAxNDUuMjQ4LjY0bDM1MC4yMDggMzUyLjk2YzEyLjIyNCAxMi4zNTIgOS43OTIgMzAuMzM2LTIuMzY4IDQyLjYyNEwzNTguOTc2IDc1OC40YTMyLjM4NCAzMi4zODQgMCAwMS00NS4zMTIuNjQgMzEuMTA0IDMxLjEwNCAwIDAxLS45Ni00NC4wOTZsMzI5Ljc5Mi0zMzIuMzUyeiIgaG9yaXotYWR2LXg9IjEwMjQiLz48Z2x5cGggZ2x5cGgtbmFtZT0ibW9yZSIgdW5pY29kZT0i7puFIiBkPSJNODMyIDE2MGEzMiAzMiAwIDEwMC02NEgxOTJhMzIgMzIgMCAxMDAgNjRoNjQwem0wIDI1NmEzMiAzMiAwIDEwMC02NEgxOTJhMzIgMzIgMCAwMDAgNjRoNjQwem0wIDI1NmEzMiAzMiAwIDEwMC02NEgxOTJhMzIgMzIgMCAwMDAgNjRoNjQweiIgaG9yaXotYWR2LXg9IjEwMjQiLz48Z2x5cGggZ2x5cGgtbmFtZT0iZmlsdGVyIiB1bmljb2RlPSLum4YiIGQ9Ik04MjguMDMyIDczNmgtNjMzLjZjLTEyLjggMC0yMi40LTE2LTEyLjgtMjUuNmwyNzItMzIwYzYuNC02LjQgOS42LTE2IDkuNi0yMi40VjE2YzAtMjIuNCAyNS42LTQ4IDQ4LTQ4czQ4IDI1LjYgNDggNDh2MzUyYzAgOS42IDMuMiAxNiA5LjYgMjIuNGwyNzIgMzIwYzkuNiA5LjYgMCAyNS42LTEyLjggMjUuNm0tMzE2LjgtODMyYy01Ny42IDAtMTEyIDU0LjQtMTEyIDExMnYzNDIuNGwtMjg0LjggMzMyLjhjLTE2IDE5LjItMjIuNCA0MS42LTE2IDY0IDkuNiAyOC44IDMyIDQ0LjggNjAuOCA0NC44aDY5Ny42YzIyLjQgMCA0OC05LjYgNjAuOC0zMiAxNi0yNS42IDEyLjgtNTQuNC02LjQtNzMuNmwtMjg4LTMzOS4yVjEyLjhjMC01NC40LTU0LjQtMTA4LjgtMTEyLTEwOC44IiBob3Jpei1hZHYteD0iMTAyNCIvPjxnbHlwaCBnbHlwaC1uYW1lPSJjaGFuZ2UiIHVuaWNvZGU9Iu6biCIgZD0iTTgxOS4wNzIgNzAwLjU0NGg4OC42NGMxOC45NDQgMCAzMS42MTYgMTIuNjcyIDMxLjYxNiAzMS42OCAwIDE4Ljk0NC0xMi42NzIgMzEuNjE2LTMxLjYxNiAzMS42MTZINzQ5LjQ0Yy0xMi43MzYgMC0yNS4zNDQgMC0zOC4wMTYtMTIuNjcyLTkuNDcyLTkuNDcyLTkuNDcyLTIyLjE0NC05LjQ3Mi0zNC44MTZWNTU4LjA4YzAtMTguOTQ0IDEyLjYwOC0zMS42MTYgMzEuNjE2LTMxLjYxNiAxOC45NDQgMCAzMS42OCAxMi42NzIgMzEuNjggMzEuNjE2djExMC43ODRjODIuMjQtNzIuNzY4IDEyOS43MjgtMTc0LjA4IDEyOS43MjgtMjg0Ljg2NEEzODIuMjcyIDM4Mi4yNzIgMCAwMDUxMiAuOTZhMzYzLjI2NCAzNjMuMjY0IDAgMDAtMTE3LjEyIDE5LjAwOGMtMTUuODA4IDMuMi0zMS42OC0zLjItMzguMDE2LTE5LjAwOC02LjI3Mi0xNS44MDggMy4yLTMxLjYxNiAxOS4wMDgtMzcuOTUyQTQ4Ny41NTIgNDg3LjU1MiAwIDAxNTEyLTU2YTQzOS4wNCA0MzkuMDQgMCAwMTQ0MCA0NDBjMCAxMjAuMzItNDcuNDg4IDIzNC4yNC0xMzIuOTI4IDMxNi41NDRtLTUyOC42NC00NTkuMDA4Yy0xOS4wMDggMC0zMS42OC0xMi42NzItMzEuNjgtMzEuNjE2Vjk5LjEzNkMxNzYuNDQ4IDE2OC43NjggMTI4Ljk2IDI3My4yMTYgMTI4Ljk2IDM4NEEzODIuMzM2IDM4Mi4zMzYgMCAwMDUxMiA3NjcuMDRjMzguMDE2IDAgNzUuOTY4LTYuNCAxMTMuOTItMTkuMDA4IDE1LjgwOC02LjMzNiAzMS42OCAzLjIgMzguMDE2IDE5LjAwOCA2LjMzNiAxNS44MDgtMy4yIDMxLjYxNi0xOS4wMDggMzcuOTUyQTQ4MS45MiA0ODEuOTIgMCAwMTUxMiA4MjQgNDM5LjA0IDQzOS4wNCAwIDAxNzIgMzg0YzAtMTIwLjMyIDUwLjYyNC0yMzQuMjQgMTM2LjEyOC0zMTYuNTQ0aC05MS44NGMtMTguOTQ0IDAtMzEuNjE2LTEyLjY3Mi0zMS42MTYtMzEuNjggMC0xOC45NDQgMTIuNjcyLTMxLjYxNiAzMS42MTYtMzEuNjE2SDI3Ny43NmM5LjQ3MiAwIDIyLjE0NCAwIDMxLjY4IDEyLjY3MiAxMi42MDggMTIuNjA4IDEyLjYwOCAyNS4yOCAxMi42MDggMzQuODE2VjIwOS45MmMwIDE4Ljk0NC0xMi42MDggMzEuNjE2LTMxLjYxNiAzMS42MTYiIGhvcml6LWFkdi14PSIxMDI0Ii8+PGdseXBoIGdseXBoLW5hbWU9ImZvbGxvdyIgdW5pY29kZT0i7puJIiBkPSJNNTEyLTU5LjA3MmE2My44NzIgNjMuODcyIDAgMDAtMjQuMTI4IDYuOTEyYy0zMS4wNCAyNC4xMjgtMjk2LjMyIDIzMC44NDgtMzUxLjQ4OCAzMTAuMTQ0Qzc0LjI0IDM0MC42NzIgNjQgMzg1LjQ3MiA2NCA0NjQuNjQgNjQgNjMwLjIwOCAxODQuNjQgNzY4IDMzNi4yNTYgNzY4YzY1LjQ3MiAwIDEyNy40ODgtMjQuMTI4IDE3NS43NDQtNjguOTI4QTI1Ni41MTIgMjU2LjUxMiAwIDAwNjg3Ljc0NCA3NjhDODM5LjQyNCA3NjggOTYwIDYzMC4xNDQgOTYwIDQ2NC43NjhjMC03NS44NC0xMC4zNjgtMTIwLjY0LTcyLjMyLTIwNi43ODQtNTUuMTY4LTc1Ljg0LTMyMy45NjgtMjg2LjA4LTM1MS41NTItMzEwLjE0NEE2My44NzIgNjMuODcyIDAgMDA1MTItNTkuMDcyek0xMjggNDUzLjUwNGMwLTQxLjcyOCAxMC4yNC05MC40MzIgNjIuNDY0LTE2My41MkMyMzIuMjU2IDIzNC4zMDQgNDE1Ljg3MiA5My43NiA1MTMuMjggMTMuNzZjOTcuNDA4IDgwIDI4MC45NiAyMjAuNTQ0IDMyMi42ODggMjc2LjIyNEM4ODguMTI4IDM2My4wNzIgODk2IDQxNS4yMzIgODk2IDQ1My41MDQgODk2IDU4MC42MDggODE0LjA4IDcwNCA2ODcuNDI0IDcwNGMtNjguNzM2IDAtMTA4LjE2LTI2LjYyNC0xNTYuODY0LTY4LjM1Mi0xMC4yNC02Ljk3Ni0xNS41NTItNi45NzYtMTcuMjgtNi45NzYtMS42NjQgMC05LjIxNiAwLTE5LjA3MiA3LjA0QzQ0MS45ODQgNjc3LjMxMiA0MDUuNDQgNzA0IDM0Ni4yNCA3MDQgMjE0LjQgNzA0IDEyOCA1ODUuNzI4IDEyOCA0NTMuNTA0eiIgaG9yaXotYWR2LXg9IjEwMjQiLz48Z2x5cGggZ2x5cGgtbmFtZT0icHVsbGRvd24iIHVuaWNvZGU9Iu6biiIgZD0iTTUxMC41OTIgMjM3LjQ0TDE4MS4xMiA1NjQuNDhhMzEuMTA0IDMxLjEwNCAwIDAxLTQ0LjE2LS45NiAzMi4zODQgMzIuMzg0IDAgMDEuNjQtNDUuMjQ4bDM1Mi45Ni0zNTAuMjA4YzEyLjM1Mi0xMi4yMjQgMzAuMzM2LTkuNzkyIDQyLjYyNCAyLjM2OGwzNTMuMjggMzUwLjU5MmEzMi4zODQgMzIuMzg0IDAgMDEuNjQgNDUuMzEyIDMxLjEwNCAzMS4xMDQgMCAwMS00NC4wOTYuOTZMNTEwLjU5MiAyMzcuNDR6IiBob3Jpei1hZHYteD0iMTAyNCIvPjxnbHlwaCBnbHlwaC1uYW1lPSJwdWxsdXAiIHVuaWNvZGU9Iu6biyIgZD0iTTUxMC41OTIgNTMwLjU2TDE4MS4xMiAyMDMuNTJhMzEuMTA0IDMxLjEwNCAwIDAwLTQ0LjE2Ljk2IDMyLjM4NCAzMi4zODQgMCAwMC42NCA0NS4yNDhsMzUyLjk2IDM1MC4yMDhjMTIuMzUyIDEyLjIyNCAzMC4zMzYgOS43OTIgNDIuNjI0LTIuMzY4bDM1My4yOC0zNTAuNTkyYTMyLjM4NCAzMi4zODQgMCAwMC42NC00NS4zMTIgMzEuMTA0IDMxLjEwNCAwIDAwLTQ0LjA5Ni0uOTZMNTEwLjU5MiA1MzAuNTZ6IiBob3Jpei1hZHYteD0iMTAyNCIvPjxnbHlwaCBnbHlwaC1uYW1lPSJjb2xsZWN0aW9uIiB1bmljb2RlPSLum4wiIGQ9Ik00NjYuNDMyIDQ4LjI1NmwtMTI3LjA0LTY2Ljc1MmE5Ni4yNTYgOTYuMjU2IDAgMDAtMTM5LjY0OCAxMDEuNDRsMjQuMzIgMTQxLjQ0YTk3LjkyIDk3LjkyIDAgMDEtMjguMTYgODYuNjU2TDkyLjk5MiA0MTEuMjY0YTk2LjI1NiA5Ni4yNTYgMCAwMDUzLjM3NiAxNjQuMTZsMTQyLjA4IDIwLjYwOGE5Ny45MiA5Ny45MiAwIDAxNzMuNiA1My41NjhMNDI1LjYgNzc4LjMwNGE5Ni4yNTYgOTYuMjU2IDAgMDAxNzIuNjA4IDBsNjMuNTUyLTEyOC42NGE5Ny45MiA5Ny45MiAwIDAxNzMuNzI4LTUzLjYzMmwxNDIuMDgtMjAuNjA4YTk2LjI1NiA5Ni4yNTYgMCAwMDUzLjMxMi0xNjQuMTZMODI4LjE2IDMxMS4wNEE5Ny45MiA5Ny45MiAwIDAxODAwIDIyNC40NDhsMjQuMjU2LTE0MS41MDRhOTYuMjU2IDk2LjI1NiAwIDAwLTEzOS42NDgtMTAxLjQ0bC0xMjcuMDQgNjYuNzUyYTk3LjkyIDk3LjkyIDAgMDEtOTEuMTM2IDB6bTEyMS40NzIgNTcuNzkybDEyNy4wNC02Ni44MTZhMzAuOTc2IDMwLjk3NiAwIDAxNDQuOTkyIDMyLjY0bC0yNC4zMiAxNDEuNTA0YTE2My4yIDE2My4yIDAgMDA0Ni45NzYgMTQ0LjM4NGwxMDIuNzg0IDEwMC4yMjRhMzAuOTc2IDMwLjk3NiAwIDAxLTE3LjE1MiA1Mi44NjRsLTE0Mi4wOCAyMC42MDhhMTYzLjIgMTYzLjIgMCAwMC0xMjIuODggODkuMzQ0TDUzOS44NCA3NDkuNDRhMzAuOTc2IDMwLjk3NiAwIDAxLTU1LjU1MiAwTDQyMC42NzIgNjIwLjhhMTYzLjIgMTYzLjIgMCAwMC0xMjIuODgtODkuMjhsLTE0Mi4wMTYtMjAuNjA4YTMwLjk3NiAzMC45NzYgMCAwMS0xNy4xNTItNTIuODY0TDI0MS40MDggMzU3Ljc2YzM4LjQtMzcuNDQgNTYtOTEuNDU2IDQ2LjkxMi0xNDQuMzg0TDI2NCA3MS45MzZhMzAuOTc2IDMwLjk3NiAwIDAxNDQuOTkyLTMyLjY0bDEyNy4xMDQgNjYuNzUyYTE2My4yIDE2My4yIDAgMDAxNTEuODA4IDB6IiBob3Jpei1hZHYteD0iMTAyNCIvPjwvZm9udD48L2RlZnM+PC9zdmc+) format("svg");
}

.bili-font {
    font-family: bili-font !important;
    font-size: 4.26667vw;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.ic_hufen:before {
    content: "\e6d0";
}

.ic_search:before {
    content: "\e6cf";
}

.ic_success:before {
    content: "\e635";
}

.ic_error:before {
    content: "\e658";
}

.ic_input_close:before {
    content: "\e6ce";
}

.ic_descend:before {
    content: "\e6c7";
}

.ic_ascend:before {
    content: "\e6cd";
}

.ic_add:before {
    content: "\e6c2";
}

.ic_into:before {
    content: "\e6c3";
}

.ic_more:before {
    content: "\e6c5";
}

.ic_filter:before {
    content: "\e6c6";
}

.ic_change:before {
    content: "\e6c8";
}

.ic_follow:before {
    content: "\e6c9";
}

.ic_pulldown:before {
    content: "\e6ca";
}

.ic_pullup:before {
    content: "\e6cb";
}

.ic_collection:before {
    content: "\e6cc";
}

.v-transition--collapse {
    transition: height 0.3s ease-in-out, padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out;
}

.v-transition--ios-enter {
    opacity: 0;
    transform: scale(1.1);
    will-change: opacity, transform;
}

.v-transition--ios-leave-to {
    opacity: 0;
    transform: scale(0.9);
    will-change: opacity, transform;
}

.v-transition--ios-enter-active,
.v-transition--ios-leave-active {
    transition: 0.2s ease-in-out;
    will-change: opacity, transform;
}

.v-transition--md-enter {
    opacity: 0;
    transform: scale(0.9);
    will-change: opacity, transform;
}

.v-transition--md-leave-to {
    opacity: 0;
    will-change: opacity;
}

.v-transition--md-enter-active,
.v-transition--md-leave-active {
    transition: 0.15s ease-in-out;
    will-change: opacity, transform;
}

.v-transition--popup-enter,
.v-transition--popup-leave-to {
    opacity: 0;
}

.v-transition--popup-enter-active,
.v-transition--popup-level-active {
    transition: opacity 0.3s;
}

.v-transition--popup-enter-active>* {
    -webkit-animation: popup-enter 0.3s;
    animation: popup-enter 0.3s;
}

.v-transition--popup-level-active>* {
    -webkit-animation: popup-leave 0.3s;
    animation: popup-leave 0.3s;
}

body {
    margin: 0;
    font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;
}

body *,
body :after,
body :before {
    box-sizing: border-box;
}

body * {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
}

a {
    color: inherit;
    cursor: default;
    text-decoration: none;
}

li {
    list-style-type: none;
}

button {
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

div[contenteditable="true"],
input:not([type="radio"]):not([type="checkbox"]):not([type="range"]),
select,
textarea {
    -webkit-appearance: none;
    -webkit-user-select: auto !important;
    -moz-user-select: auto !important;
    -ms-user-select: auto !important;
    user-select: auto !important;
}

div[contenteditable="true"]:focus,
input:not([type="radio"]):not([type="checkbox"]):not([type="range"]):focus,
select:focus,
textarea:focus {
    outline: none;
}

@keyframes rolling {
    0% {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(1turn);
    }
}

@-webkit-keyframes rolling {
    0% {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(1turn);
    }
}

@keyframes popup-enter {
    0% {
        top: 55%;
    }
    to {
        top: 50%;
    }
}

@-webkit-keyframes popup-enter {
    0% {
        top: 55%;
    }
    to {
        top: 50%;
    }
}

@keyframes popup-leave {
    0% {
        top: 50%;
    }
    to {
        top: 55%;
    }
}

@-webkit-keyframes popup-leave {
    0% {
        top: 50%;
    }
    to {
        top: 55%;
    }
}

.v-drawer__footer:active,
.v-drawer__item.strict:active {
    background-color: rgba(0, 0, 0, 0.1);
}

.v-drawer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: none;
    pointer-events: none;
    overflow: hidden;
    z-index: 1003;
}

.v-drawer__wrap {
    position: absolute;
    transform: translateY(0);
    overflow: auto;
    -ms-scroll-chaining: none;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
    pointer-events: auto;
    box-sizing: content-box;
    z-index: 1003;
    background-color: #fff;
}

body.night-mode .v-drawer__wrap {
    background-color: #141414;
}

.v-drawer__line {
    height: 2.13333vw !important;
    background-color: #f8f8f8;
}

body.night-mode .v-drawer__line {
    background-color: #1b1b1b;
}

.v-drawer__footer,
.v-drawer__item.strict {
    position: relative;
    height: 13.33333vw;
    line-height: 13.33333vw;
    font-size: 4.26667vw;
    padding: 0 2.66667vw;
    color: #323233;
}

body.night-mode .v-drawer__footer,
body.night-mode .v-drawer__item.strict {
    color: #d1d1d2;
}

.v-drawer__footer:before,
.v-drawer__item.strict:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background-color: #ebedf0;
}

body.night-mode .v-drawer__footer:before,
body.night-mode .v-drawer__item.strict:before {
    background-color: #28292b;
}

.v-drawer__footer {
    text-align: center;
}

.v-drawer--bottom .v-drawer--transition-enter,
.v-drawer--bottom .v-drawer--transition-leave-to {
    transform: translateY(100%);
}

.v-drawer--offset.v-drawer--bottom .v-drawer__wrap {
    padding-bottom: env(safe-area-inset-bottom);
}

.v-drawer--offset.v-drawer--top .v-drawer__wrap {
    padding-top: env(safe-area-inset-top);
}

.v-drawer--offset.v-drawer--left .v-drawer__wrap {
    padding-left: env(safe-area-inset-left);
}

.v-drawer--offset.v-drawer--right .v-drawer__wrap {
    padding-right: env(safe-area-inset-right);
}

.v-drawer--top .v-drawer--transition-enter,
.v-drawer--top .v-drawer--transition-leave-to {
    transform: translateY(-100%);
}

.v-drawer--left .v-drawer--transition-enter,
.v-drawer--left .v-drawer--transition-leave-to {
    transform: translateX(-100%);
}

.v-drawer--right .v-drawer--transition-enter,
.v-drawer--right .v-drawer--transition-leave-to {
    transform: translateX(100%);
}

.v-drawer--transition-enter-active,
.v-drawer--transition-leave-active {
    transition: transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);
    will-change: transform;
}

.v-overlay {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    opacity: 0;
    z-index: 1002;
    pointer-events: auto;
}

.v-overlay--md {
    background-color: rgba(0, 0, 0, 0.32);
    transition: opacity 0.15s ease-in-out;
    will-change: opacity;
}

.v-overlay--ios {
    background-color: rgba(0, 0, 0, 0.3);
    transition: opacity 0.2s ease-in-out;
    will-change: opacity;
}

.v-overlay--show {
    opacity: 1;
}

.v-swipe {
    width: 100%;
    border-radius: 1.06667vw;
    overflow: hidden;
    transform: translateZ(0);
    height: 32vw;
}

.v-swipe__wrap {
    position: relative;
    width: 100%;
    height: 100%;
}

.v-swipe__item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
}

.v-swipe__item:first-child {
    z-index: 2;
}

.v-swipe__item>* {
    width: 100%;
    height: 100%;
}

.v-swipe__indicator {
    position: absolute;
    right: 2.13333vw;
    bottom: 2.13333vw;
    z-index: 3;
    pointer-events: none;
}

.v-swipe__indicator__item {
    display: inline-block;
    width: 1.33333vw;
    height: 1.33333vw;
    border-radius: 50%;
    margin-left: 1.06667vw;
    background-color: #fff;
}

body.night-mode .v-swipe__indicator__item {
    background-color: #141414;
}

.v-swipe__indicator__item.is-active {
    background-color: #fb7299;
}

body.night-mode .v-swipe__indicator__item.is-active {
    background-color: #eb7093;
}

.v-navbar__wrap__title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.v-navbar {
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.v-navbar__body,
.v-navbar__shim {
    height: 11.73333vw;
    box-sizing: content-box;
    padding-top: 5.33333vw;
}

@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .v-navbar__body,
    .v-navbar__shim {
        padding-top: env(safe-area-inset-top);
    }
}

@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    .v-navbar__body,
    .v-navbar__shim {
        padding-top: env(safe-area-inset-top);
    }
}

@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    .v-navbar__body,
    .v-navbar__shim {
        padding-top: env(safe-area-inset-top);
    }
}

.v-navbar__body {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.v-navbar--fixed .v-navbar__body {
    position: fixed;
}

.v-navbar__outer {
    position: relative;
}

.v-navbar__background {
    position: relative;
    width: 100%;
    overflow: hidden;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2.93333vw 3.2vw;
}

.v-navbar__background__wrap {
    transition: opacity 0.2s ease;
}

.v-navbar--border .v-navbar__body:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    background-color: #e7e7e7;
    transform: scaleY(0.5);
}

.v-navbar--bg,
.v-navbar--bg:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.v-navbar--bg:after {
    content: "";
    height: 16vw;
    background-image: linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.3));
    z-index: 1;
}

.v-navbar--bg .v-navbar__body {
    transition: all 0.2s ease;
}

.v-navbar--bg.v-navbar--fixed .v-navbar__body {
    transition: all 0.6s ease;
}

.v-navbar__wrap {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 11.73333vw;
    padding: 2.93333vw 3.2vw;
    line-height: 5.86667vw;
}

.v-navbar__wrap__title {
    position: absolute;
    left: 0;
    top: 2.93333vw;
    width: 100%;
    font-size: 4.26667vw;
    text-align: center;
    padding: 0 24vw;
    z-index: 0;
}

.v-navbar__wrap__after,
.v-navbar__wrap__before {
    position: relative;
    z-index: 2;
    font-size: 0;
}

.v-navbar__wrap__after>i,
.v-navbar__wrap__before>i {
    width: 5.86667vw;
    height: 5.86667vw;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
}

.v-navbar__wrap__after>span,
.v-navbar__wrap__before>span {
    font-size: 3.73333vw;
    vertical-align: middle;
}

.v-navbar__wrap__before {
    position: absolute;
    left: 3.2vw;
    top: 2.93333vw;
}

.v-navbar__wrap__before>i {
    margin-right: 3.2vw;
}

.v-navbar__wrap__before__back {
    transform: rotate(180deg);
}

.v-navbar__wrap__after {
    position: absolute;
    right: 3.2vw;
    top: 2.93333vw;
}

.v-navbar__wrap__after>* {
    margin-left: 5.33333vw;
}
</style>
