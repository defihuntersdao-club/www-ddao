<template>
  <div>
    <Navbar />
    <div v-scroll-spy>
      <section class="hero-1-bg" id="home">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-4" v-for="(item, index) in items" :key="item.title">
              <div class="cards-wrapper">
                <div class="draggable">
                  <div class="card-block">
                    <div class="card">
                      <div class="side back">
                        <img :src="require('@/assets/images/logo.gif')" alt="" class="b-logo">
                      </div>
                      <div class="side front">
                        <div class="pricing-box m-h-415 rounded text-center p-4">
                          <h4 class="title mb-3">{{ item.title }}</h4>
                          <h1 class="font-weight-bold mb-0">
                            <b>
                              <sup class="h4 mr-2 font-weight-bold" v-if="item.price.length">{{ item.price }}</sup>
                            </b>
                          </h1>
                          <p class="text-muted font-weight-semibold" v-if="item.description.length"></p>
                          <ul class="list-unstyled pricing-item mb-4">
                            <li class="text-muted" v-for="description in item.description">{{ description }}</li>
                          </ul>
                            <template v-if="account==null">
                              <div style="margin-top: 250px;">
                                <button class="btn btn-outline-primary pr-btn" @click="clickOpenModal()">Connect</button>
                              </div>
                            </template>
                            <template v-else>
                              <div style="margin-top: 150px;">
                                <p v-if="claimEnables[index].claimEnableDefault==true">Claim enable: Yes</p>
                                <p v-else>Claim enable: No</p>
                                <p v-if="claimEnables[index].claimAmountDefault>0">Claim amount: {{claimAmounts[index].claimAmountDefault/1000000000000000000}}</p>
                                <p v-else>Claim amount: 0</p>
                                <button class="btn btn-outline-primary pr-btn" @click="clickClaim(item)" v-if="item.button.length">Claim</button>
                              </div>
                            </template>
                          <div class="mt-4">
                            <div class="hero-bottom-img">
                              <img
                                  src="@/assets/images/pricing-bottom-bg.png"
                                  alt
                                  class="img-fluid d-block mx-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Service from "@/components/services";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

import itemsJson from '@/assets/example.json';

import {mapActions, mapGetters} from "vuex"

export default {
  data() {
    return {
      flipClass1: '',
      flipClass2: '',
      flipClass3: '',
      items: itemsJson
    }
  },
  components: { Navbar, Service, Features, Pricing, Blog, Contact, Footer },
  computed: {
    ...mapGetters(['account', 'claimEnables','claimAmounts']),
  },
  methods: {
    ...mapActions(['connectionModal', 'txClaim', 'getClaimCheckEnable', 'getClaimCheckAmount']),
    clickOpenModal: function () {
      this.connectionModal()
    },
    clickClaim: function (item) {
      this.txClaim({ contractAddr: item.claimAddress, contractAbi: item.claimABI })
    },
    flipBlock1: function(){
      this.flipClass1 = 'flip';
    },
    flipOutBlock1: function(){
      this.flipClass1 = '';
    },
    flipBlock2: function(){
      this.flipClass2 = 'flip';
    },
    flipOutBlock2: function(){
      this.flipClass2 = '';
    },
    flipBlock3: function(){
      this.flipClass3 = 'flip';
    },
    flipOutBlock3: function(){
      this.flipClass3 = '';
    }
  },
  watch:{
    claimEnables: {
      deep: true,
      handler() {
        var wrapItems = this.items;
        const gettClaimCheckAmount = this.getClaimCheckAmount;
        this.claimEnables.forEach(function(item, index) {
          gettClaimCheckAmount({ index: index, contractAddr: wrapItems[index].claimAddress, contractAbi: wrapItems[index].claimABI })
        })
      }
    },
    claimAmounts: {
      deep: true,
      handler() {
        this.claimAmounts
      }
    },
    account() {
      if (this.account != null) {
        var index;
        for (index = 0; index < this.items.length; ++index) {
          if (this.items[index].button == 'Claim') {
            this.getClaimCheckEnable({ index: index, contractAddr: this.items[index].claimAddress, contractAbi: this.items[index].claimABI })
          }
        }
      }
    },
  },
  mounted() {
  }
};
</script>

<style>
.cards-wrapper {
  width: 100%;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 10%);
  display: flex;
  justify-content: space-between;
}

/*блок, в котором расположена карта*/
.card-block {
  transition: all .5s ease;
  cursor: pointer;
  transform: scale(.90); /*уменьшает размер блока, чтобы потом увеличить до 1*/
  perspective: 500px; /*глубина перспективы/объем 3D-пространства*/
}

/*элемент-карта*/
.card {
  width: 350px;
  position: relative;
  transition: all 1s ease;
  transform-style: preserve-3d; /*определяет то, что дочерние элементы, находятся в 3D-пространстве*/
}

.card-block:hover {
  transform: scale(1) translate3d(0, -10px, 0); /*при наведении на блок с картой, он увеличивается и поднимается вверх*/
}

.card-block:hover .side{
  box-shadow: 1px 2px 16px 0 rgba(0, 0, 0,.8); /*при наведении на блок с картой, для видимой стороны карты задается тень*/
}

.side {
  width: 100%;
  border-radius: 15px; /*скругляет элемент, чтобы тень повторяла контур img с изображением карты*/
  transition: all .3s ease;
  display: block;
  backface-visibility: hidden; /*прячет сторону карты, которая отвернута от пользователя*/
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0,.4); /*небольшая тень, когда карта «лежит» на поверхности*/
}

/*рубашка карты*/
.back {
  position: relative;
}

/*лицевая сторона карты*/
.front {
  position: absolute; /*абсолютно позиционирован внутри родителя и лежит на рубашке карты*/
  top: 0;
  transform: rotateY(180deg); /*отвернута от нас на 180 градусов по своей оси*/
}

.flip {
  transform: rotateY(180deg); /*при добавлении этого класса элемент развернется на 180 градусов*/
}
.draggable .side img{
  width: 126%;
  margin-left: -13%;
}
.draggable .side{
  overflow: hidden;
  background: linear-gradient(129.22deg, #5239AE 6.8%, #7F82F5 134.28%);
}
.draggable .card{
  border: none;
}
.draggable .card .front{
  background: linear-gradient(129.22deg, #5239AE 6.8%, #7F82F5 134.28%);
}
.m-h-415{
  min-height: 415px;
  width: 100%;
}
</style>
