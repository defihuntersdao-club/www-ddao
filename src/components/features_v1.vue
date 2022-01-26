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
      class="section bg-light feather-bg-img"
      :style="{'background-image': 'url(' + require('@/assets/images/features-bg-img.png') + ')'}"
      id="features"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center mb-5">
              <h3 class="title mb-3">The first NFT Drops</h3>
              <p class="text-muted font-size-15">
                on DartFlex Marketplace are aptly named the Genesis
              </p>
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="mb-4 mb-lg-0">
              <img src="@/assets/images/visa-nft-1.jpg" alt class="img-fluid d-block mx-auto" />
            </div>
          </div>

          <div class="col-lg-5 offset-lg-1">
            <p class="font-weight-medium text-uppercase mb-2">
              <i class="mdi mdi-chart-bubble h2 text-primary mr-1 align-middle"></i> Creative Features
            </p>
            <h3 class="font-weight-semibold line-height-1_4 mb-4">
              These
              <b>NFTs</b> are
              <b>packed</b> with utility across the
              <b>DartFlex Platform</b>
            </h3>
            <p class="text-muted font-size-15 mb-4">
              And will entitle their holders to unique privileges and unlock new experiences.
              The Genesis Drop will be a 9-day event, with one character released each 3 days at 12PM UTC on dartflex.art, starting in November (TBD), 2021!
            </p>
            <p>
              This is a truly special event for dartflex.art. DartFlex Genesis NFTs will give holders access to future drops, farming multipliers, airdrops and any other NFT activity.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="section feather-bg-img"
      :style="{'background-image': 'url(' + require('@/assets/images/features-bg-img-1.png') + ')'}"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <p class="font-weight-medium text-uppercase mb-2">
              <i class="mdi mdi-chart-bubble h2 text-primary mr-1 align-middle"></i>DartFlex NFT Utility
            </p>
            <h3 class="font-weight-semibold line-height-1_4 mb-4">
              <b>Priority</b> Access to Drops
            </h3>
            <!-- <h3 class="font-weight-semibold line-height-1_4 mb-4">Build <b>community</b> & <b>conversion</b> with our suite of <b>social tool</b></h3> -->
            <p class="text-muted font-size-15 mb-4">
              NFT holders will receive priority access for all future NFT drops in DartFlex Marketplace ( curated by DartFlex ). According to rarity, holders will be able to access a separate queue that increases their chances to buy NFTs on these drops.
            </p>
            <p class="text-muted mb-2">
              <strong>Gold</strong> — 90% chance of access.
            </p>
            <p class="text-muted">
              <strong>Rare</strong> — 50% chance of access.
            </p>
            <p class="text-muted">
              <strong>Common</strong> — 30% chance of access.
            </p>
            <div class="mt-5">
              <p>
                When the Priority Access feature launches, interested buyers can submit their ETH address to a digital queue. There are two queues; Priority and Default. A process begins which populates the queue. If you own a DartFlex Genesis NFT you will be given the chance at entering the priority queue based on the rarity of your asset.
              </p>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <div class="mt-4 mt-lg-0">
              <img src="@/assets/images/priority.png" alt class="img-fluid d-block mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="mb-4 mb-lg-0">
              <img src="@/assets/images/DeFi.jpg" alt class="img-fluid d-block mx-auto" />
            </div>
          </div>

          <div class="col-lg-5 offset-lg-1">
            <p class="font-weight-medium text-uppercase mb-2">
              <i class="mdi mdi-chart-bubble h2 text-primary mr-1 align-middle"></i> Farming Multiplier
            </p>
            <p>
              One of the most important utilities for the DartFlex native NFTs is the Farming Multiplier, which operates like an in-game item for our marketplace ecosystems. Wallets that hold DartFlex native NFTs will be privy to multipliers on their rewards, allowing them to be the first in line to mint some of the most exciting NFTs on the platform.
            </p>
            <p>
              In this way, the Genesis NFT functions like a “power-up” throughout the DartFlex ecosystem, bringing gamification to the protocol itself. This type of utility is not only consequential for the ecosystems that will take root on the DartFlex platform, but also as a sign of what’s possible when fusing the worlds of NFTs and DeFi.
            </p>
            <p class="text-muted">
              <strong>Boost </strong> %
            </p>
            <p class="text-muted">
              <strong>Gold </strong> 30%
            </p>
            <p class="text-muted">
              <strong>Rare </strong> 20%
            </p>
            <p class="text-muted">
              <strong>Common </strong> 10%
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="container" style="margin-bottom: 20px;">
      <div class="row align-items-center">
        <div class="col-lg-5">
          <p class="font-weight-medium text-uppercase mb-2">
            <i class="mdi mdi-chart-bubble h2 text-primary mr-1 align-middle"></i>DartFlex NFT Utility
          </p>
          <h3 class="font-weight-semibold line-height-1_4 mb-4">
            <b>DartFlex</b> Airdrops
          </h3>
          <!-- <h3 class="font-weight-semibold line-height-1_4 mb-4">Build <b>community</b> & <b>conversion</b> with our suite of <b>social tool</b></h3> -->
          <p class="text-muted font-size-15 mb-4">
            Holders of DartFlex Genesis NFTs receive exclusive airdrop incentives in the form of <strong>$DAF</strong>. NFT holders will be able to claim $DAF tokens via a decentralized portal by simply holding NFTs in their wallets. Token claims will be tied to each NFT token, not the wallet itself, so once transferred the new holder can claim the remaining tokens.
          </p>
          <p class="text-muted mb-2">
            <strong>Common</strong> — 50 $DAF
          </p>
          <p class="text-muted">
            <strong>Rare</strong> — 200 $DAF
          </p>
          <p class="text-muted">
            <strong>Gold</strong> — 500 $DAF
          </p>
          <div class="mt-5">
            <p>
              These airdrops are designed to incentivize long term support for the DartFlex platform and community, and for that reason the claim period will take place starting one month after the NFT sale and extend for 6 months on a linear, block-by-block schedule. Holders of the NFT can claim airdrops via a dedicated claim portal, and if the asset is sold, new holders can claim whatever is remaining from the airdrop schedule.
            </p>
          </div>
          <div class="mt-5">
            <p>
              Whoever holds the NFT in their wallet at the time of the snapshot is considered the “owner” for purposes of the airdropped tokens. The NFT may change hands any number of times before the snapshot. If you purchase/farm an NFT and sell it before the snapshot, you will miss out on the subsequent airdrop reward.
            </p>
          </div>
          <h3 class="font-weight-semibold line-height-1_4 mb-4">
            <b>$DAF Holder</b>  Exclusive NFT Pools
          </h3>
          <p>
            DartFlex Genesis NFT Drops is expected to generate a tremendous amount of hype and excitement. As promised, $DAF holders will enjoy access to an exclusive pool of NFTs that are only being sold in $DAF. This is just the first of so many utilities coming to the $DAF token. $DAF will be able to be used for a wide array of utilities in the near future such as priority access, NFT farming, rewards multipliers, fees, governance, AI NFT generation and more!
          </p>
        </div>
        <div class="col-lg-6 offset-lg-1">
          <div class="mt-4 mt-lg-0">
            <img src="@/assets/images/cryptocurrency-airdrops-and-giveaways-what-they-are-and-whats-next-2.jpg" alt class="img-fluid d-block mx-auto" />
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
</template>