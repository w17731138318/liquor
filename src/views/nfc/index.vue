<template>
  <div>
    <div class="container">
      <img src="../assets/search_main_top.png" width="100%">
    </div>
    <div class="container">
      <div class="columns is-multiline is-mobile">
        <div class="column is-three-fifths" style="padding-left:2em;padding-bottom: 0em;padding-top:0em;">
          <table class="table is-fullwidth" style="margin-bottom: 0em;">
            <tbody>
              <tr>
                <td style="padding-top:0em;padding-bottom:0em;"><img src="../assets/product_info.png" class="pic"></td>
              </tr>
              <tr>
                <td style="padding-top:5px;padding-bottom:5px;">
                  <span class="has-text-weight-bold is-size-7-mobile">
                    产品类型
                  </span>
                  <span class="is-size-7-mobile">{{goods.goodsType}}</span>
                </td>
              </tr>
              <tr>
                <td style="padding-top:5px;padding-bottom:5px;">
                  <span class="has-text-weight-bold is-size-7-mobile">
                    品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名
                  </span>
                  <span class="is-size-7-mobile">{{goods.goodsName}}</span>
                </td>
              </tr>
              <tr>
                <td style="padding-top:5px;padding-bottom:5px;">
                  <span class="has-text-weight-bold is-size-7-mobile">
                    容&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量
                  </span>
                  <span class="is-size-7-mobile">{{goods.volume}}毫升</span>
                </td>
              </tr>
              <tr>
                <td style="padding-top:5px;padding-bottom:5px;">
                  <span class="has-text-weight-bold is-size-7-mobile">
                    度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数
                  </span>
                  <span class="is-size-7-mobile">{{goods.proof}}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="../assets/to_track_source.png" class="pic" @click="goInfo">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="column" style="padding-bottom: 0em;padding-top:0em;">
          <div style="display:flex;display: -webkit-flex;align-items:center;height:100%;">
            <img src="../assets/1.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns is-multiline is-mobile" style="padding-bottom: 0em;padding-top:0em;margin-bottom: 0em;">
        <div class="column" style="padding-left:2em;padding-bottom: 0em;padding-top:0.5em;">
          <table class="table is-fullwidth" style="margin-bottom: 0px;">
            <tbody>
              <tr>
                <td style="padding-top:0px;padding-bottom:0px;"><img src="../assets/check_detail.png" class="pic"></td>
              </tr>
              <tr>
                <td style="padding-top:3px;padding-bottom:3px;">
                  <span class="has-text-weight-bold is-size-7-mobile has-text-grey">
                    鉴定次数
                  </span>
                  <span class="is-size-7-mobile has-text-grey">{{bottle.checks}}</span>
                </td>
              </tr>
              <tr>
                <td style="padding-top:3px;padding-bottom:3px;">
                  <span class="has-text-weight-bold  has-text-grey is-size-7-mobile">
                    最后鉴定时间
                  </span>
                  <span class="is-size-7-mobile has-text-grey">{{bottle.lastCheckTime}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="columns is-multiline is-mobile" style="padding-bottom: 0em;padding-top:0em;margin-bottom: 0em;">
        <div class="column" style="padding-left:2em;padding-bottom: 0em;">
          <table class="table is-fullwidth" style="padding-bottom: 0em;padding-top:0.5em;margin-bottom: 0px;">
            <tbody>
              <tr>
                <td style="padding-top:0em;padding-bottom:0em;"><img src="../assets/company_info.png" class="pic"></td>
              </tr>
              <tr>
                <td style="padding-top:3px;padding-bottom:3px;">
                  <span class="has-text-weight-bold is-size-7-mobile has-text-grey">
                    贵州茅台酒股份有限公司
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding-top:3px;padding-bottom:3px;">
                  <span class="has-text-weight-bold is-size-7-mobile has-text-grey">
                    •公司地址: 
                  </span>
                  <span class="is-size-7-mobile has-text-grey">贵州省仁怀市茅台镇</span>
                </td>
              </tr>
              <tr>
                <td style="padding-top:3px;padding-bottom:3px;">
                  <span class="has-text-weight-bold is-size-7-mobile has-text-grey">
                    •公司名称: 
                  </span>
                  <span class="is-size-7-mobile has-text-grey">贵州茅台酒股份有限公司</span>
                </td>
              </tr>
              <tr>
                <td style="padding-top:3px;padding-bottom:3px;">
                  <span class="has-text-weight-bold is-size-7-mobile has-text-grey">
                    •服务电话: 
                  </span>
                  <span class="is-size-7-mobile has-text-grey">4008189999</span>
                </td>
              </tr>
              <tr>
                <td style="padding-top:3px;padding-bottom:3px;">
                  <span class="has-text-weight-bold is-size-7-mobile has-text-grey">
                    •公司网址: 
                  </span>
                  <span class="is-size-7-mobile has-text-grey">www.maotaichina.com</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="columns" style="padding-bottom: 0em;padding-top:0.5em;margin-bottom: 0em;">
        <div class="column" style="padding-left:1.5em;padding-right:1.5em;padding-bottom: 0em;padding-top:0.5em;">
          <img src="../assets/product_introduction.png" class="pic">
          <div class="card is-size-7-mobile has-text-grey" style="padding:3px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;茅台酒是世界三大著名蒸馏酒之一，誉称国酒，在国内外享有盛名。产于中国贵州茅台镇，以本地优质糯高粱，小麦，水为原料，利用得天独厚的自然环境，采用科学独特的传统工艺，精心酿造而成。味添加任何香气，香味物质，从生产，储存到出厂历经五年以上。具有酱香突出，优雅细腻，酒体醇香，回味悠长，空杯留香持久的特点。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;茅台酒历史悠久，是中华文化酒的典型代表，1951年获巴拿马国博览会金奖，多次获得金奖，蝉联历届中国名酒称号。 茅台酒已通过“绿色食品”认证，并列为国家原产地域产品。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/bulma.css'
import axios from 'axios'
export default {
  name: 'nfc',
  data () {
    return {
      goods: {
        id: 0,
        goodsName: '',
        goodsType: '',
        details: '',
        volume: 0,
        proof: 0,
        productionDate: '',
        status: 0,
        createUserId: 0,
        createTime: '',
        batch: '',
        indexes: 0,
        company: '',
        place: '',
        packing: ''
      },
      bottle: {
        id: 0,
        goodsId: 0,
        nfcCode: '',
        checks: 0,
        lastCheckTime: '',
        batch: 0
      }
    }
  },
  methods: {
    getDate () {
      axios.get('/api/nfc/' + this.$route.params.nfcCode)
        .then(response => {
          if (response.data.code === 0) {
            this.goods = response.data.goods
            this.bottle = response.data.bottle
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    goInfo () {
      this.$router.push('/info/' + this.$route.params.nfcCode)
    }
  },
  mounted () {
    this.getDate()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.columns{
  margin: 0em;
}
.mypadding{
  padding-top: 0em;
  padding-bottom: 0em;
  padding-left: 0em;
  padding-right: 0em;
}
.pic{
  height: 20px;
  width: auto;
}
</style>
