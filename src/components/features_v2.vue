<script>
import {
  LayoutIcon,
  LifeBuoyIcon,
  ServerIcon,
  RssIcon
} from "vue-feather-icons";
export default {
  components: { LayoutIcon, LifeBuoyIcon, ServerIcon, RssIcon }
};
</script>

<template>
  <div>
    <!-- Features Start -->


    <section
      class="about-section section"
    >
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">

            <div class="about-row flex">
              <div class="about-col about-col-1">
                <div class="about-left">
                  <div class="about-title section-title">
                    About
                  </div>
                  <div class="about-subtitle section-subtitle">
                    <b>DEFI HUNTERS DAO</b> powered by <b>Pro Blockchain Media and nftindex.tech</b>
                  </div>
                  <div class="about-margintext">
                    Full membership gives you access to the entire<br>
                    ecosystem: smart investing, training and education,<br>
                    lifestyle and culture, Top NFTs + Trading Alpha,<br>
                    events, and community management. 
                  </div>
                  <div class="about-text">
                    <b>DEFI DAO</b>’s Discord server is a primary platform for communication.<br>
                    It s public to all “cryptoverse” enthusiasts. We created an open space<br>
                    for everybody to network, share ideas, and create.<br>
                    To become a part of a private Discord channel, one should own one<br>
                    of the following tokens:<br>
                    — DAO Hunter NFT - <b>dao.information-pro.com</b><br>
                    — a certain amount of $DDAO tokens<br>
                    — LP tokens in a DDAO / ETH or Bonds pair<br>
                    — LP tokens of GNFT / ETH pair 
                  </div>
                </div>
              </div>
              <div class="about-col about-col-2">
                <div class="about-right">
                  <div class="about-info info-box">
                    <b>PRO BLOCKCHAIN MEDIA (PBM)</b> is one of the biggest Media in the Russian-speaking community,
                    with more than 200K followers. It has operated
                    since 2016 and already did work with top projects
                    and known people in the crypto space, including
                    but not limited to Huobi, Bybit, Binance, 1inch,
                    Bitcoin Cash (Roger Ver), Celsius (Alex Mashinsky).<br>
                    The primary media resource is the Youtube channel, with 170K viewers. DEFI DAO
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section
      class="token-section section"
    >
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">

            <div class="token-row flex">
              <div class="token-col token-col-1">
                <div class="token-left">
                  <div class="token-title section-title">
                    Tokenomics
                  </div>
                  <div class="token-items-title">
                    Token allocation
                  </div>
                  <div class="token-items">
                    <div class="token-item flex">
                      <div class="token-item-color token-item-color-1"></div>
                      <div class="token-item-text">
                        Bonding program - <b>7 350 000</b>
                      </div>
                    </div>
                    <div class="token-item flex">
                      <div class="token-item-color token-item-color-2"></div>
                      <div class="token-item-text">
                        Token Sale - <b>4 200 000</b>
                      </div>
                    </div>
                    <div class="token-item flex">
                      <div class="token-item-color token-item-color-3"></div>
                      <div class="token-item-text">
                        Ecosystem Growth (Reserve) - <b>2 520 000</b>
                      </div>
                    </div>
                    <div class="token-item flex">
                      <div class="token-item-color token-item-color-4"></div>
                      <div class="token-item-text">
                        Liquidity providing Incentive program - <b>2 100 000</b>
                      </div>
                    </div>
                    <div class="token-item flex">
                      <div class="token-item-color token-item-color-5"></div>
                      <div class="token-item-text">
                        Liquidity Sale - <b>2 100 000</b>
                      </div>
                    </div>
                    <div class="token-item flex">
                      <div class="token-item-color token-item-color-6"></div>
                      <div class="token-item-text">
                        Team - <b>1 680 000</b>
                      </div>
                    </div>
                    <div class="token-item flex">
                      <div class="token-item-color token-item-color-7"></div>
                      <div class="token-item-text">
                        Early adopters AirDrop - <b>1 050 000</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="token-col token-col-2">
                <div class="token-image">
                  <img :src="require('@/assets/images/token-image.png')" alt="">
                </div>
              </div>
            </div>

            <div class="stats-row flex">
              <div class="stats-col stats-col-1">
                <div class="stats-title stats-title-1">
                  <span>Token Sale</span>
                  20% - 4 200 000
                </div>
                <div class="stats-text">
                  <p><b>Seed - 12 % (2 520 000)</b><br>
                  Price - 0.16 $ allocation (min 50 000 $ / max 100 000 $)<br>
                  Hard Cap - 403 200 $</p>

                  <p><b>Private 1 - 6 % (1 260 000)</b><br>
                  Price - 0.32 $ allocation (min 10 000 $ / max 30 000 $)<br>
                  Hard Cap - 403 200 $</p>

                  <p><b>Private 2 - 2 % (420 000)</b><br>
                  Price - 0.47 $ allocation (min 500 $ / max 1 000 $)<br>
                  Hard Cap - 197 400 $</p>
                </div>
                <div class="stats-blue flex">
                  <span>DEX LISTING PRICE - <b>0.6 $</b> PER TOKEN</span>
                </div>
              </div>
              <div class="stats-col stats-col-2">
                <div class="stats-title stats-title-2">
                  <span>Liquidity Sale</span>
                  10% - 2 100 000
                </div>
                <div class="stats-text">
                  <p>BALANCER POOL</p>

                  <p><b>Auction Settings</b><br>
                  Start Wights
                  • 96 % Token + 4 % USDC</p>

                  <p><b>End Weights</b><br>
                  • 60 % Token + 40 % USDC</p>
                </div>
                <div class="stats-info info-box">
                  <b>Vesting period</b><br>
                  <b>Team:</b> 24 months linear unlock, starting 1 Mar., 2022<br>
                  <b>Seed:</b> 24 months linear unlock, starting 1 Mar., 2022. aDDAO<br>
                  (like Bond or option) gives you access to groups immediately.<br>
                  <b>Private 1:</b> 18 months linear unlock, starting 1 Mar., 2022. aDDAO<br>
                  (like Bond or option) gives you access to groups immediately.<br>
                  <b>Private 2:</b> 12 months linear unlock, starting 1 Mar., 2022. aDDAO<br>
                  (like Bond or option) gives you access to groups immediately. 
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section
      class="acc-section section"
    >
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">

            <div class="acc-title section-title">
              ACCELERATOR PROGRAM
            </div>

            <div class="acc-row flex">
              <div class="acc-col acc-col-1">
                <div class="acc-image">
                  <img :src="require('@/assets/images/acc-image.png')" alt="">
                </div>
              </div>
              <div class="acc-col acc-col-2">
                <div class="acc-right">
                  <div class="acc-text">
                    <p>The projects will have an option to submit applications<br>
                    in DAO Fund.</p>

                    <p>We offer investment in the early stage and provide support from our community.</p>

                    <p><b>DeFi Hunters DAO</b> Fund will analyze the projects and<br>
                    invite candidates for pitch sessions. The DAO members<br>
                    will vote on the final investment decision.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section
      class="road-section section"
    >
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">

            <div class="road-title section-title">
              ROADMAP
            </div>

            <div class="road-row flex">
              <div class="road-col road-col-1">
                <div class="road-items flex">
                  <div class="road-item">
                    <span>Q1 2022</span>
                    <ul>
                      <li>Invest in $METAI</li>
                      <li>Marketing incentives and collaboration</li>
                      <li>Discord server</li>
                      <li>MVP DAO FUND</li>
                      <li>Landing page</li>
                      <li>Intro to governance and token</li>
                    </ul>
                  </div>
                  <div class="road-item">
                    <span>Q2 2022</span>
                    <ul>
                      <li>DAO FUND</li>
                      <li>DAO GAMEFI GUILD</li>
                      <li>Rewards system for DAO members</li>
                    </ul>
                  </div>
                  <div class="road-item">
                    <span>Q3 2022</span>
                    <ul>
                      <li>DAO Academy</li>
                      <li>DAO Media</li>
                      <li>DAO Charity</li>
                    </ul>
                  </div>
                  <div class="road-item">
                    <span>Q4 2022</span>
                    <ul>
                      <li>Collaboration with Metaverse</li>
                      <li>VR Offices for community</li>
                      <li>300 000 DAO members</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="road-col road-col-2">
                <div class="road-image">
                  <img :src="require('@/assets/images/road-image.png')" alt="">
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section
      class="cs-section section"
    >
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">

            <div class="cs-title section-title">
              CONTACTS
            </div>

            <div class="cs-email">
              <a href="mailto:defihunterdao@gmail.com">defihunterdao@gmail.com</a>
            </div>

            <div class="cs-links flex">
              <a href="#" class="cs-links-item">
                <i class="fab fa-discord"></i>
              </a>
              <a href="#" class="cs-links-item">
                <i class="fab fa-medium-m"></i>
              </a>
              <a href="#" class="cs-links-item">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="#" class="cs-links-item">
                <i class="fab fa-telegram-plane"></i>
              </a>
              <a href="#" class="cs-links-item">
                <i class="fas fa-globe"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
  </div>
</template>