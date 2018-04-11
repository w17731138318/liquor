<template>
  <div>
    <div class="container">
      <div class="columns">
        <img src="../assets/logo.png" width="100%">
      </div>
      <div class="columns" style="text-align: center;">
        <img src="../assets/tracking.png" style="height: 25px;width: auto;">
      </div>
      <div class="columns is-multiline is-mobile">
        <div class="column" style="padding-bottom: 1em;padding-top:1em;padding-right:0em;">
          <div style="display:flex;display: -webkit-flex;align-items:center;height:100%;float:right">
            <img src="../assets/1.png" alt="">
          </div>
        </div>
        <div class="column is-half" style="padding-bottom: 0em;padding-top:0em;">
          <table class="table is-fullwidth" style="margin-bottom: 0em;">
            <tbody>
              <tr>
                <td style="padding-top:0em;padding-bottom:0em;"><img src="../assets/product_info.png" class="pic"></td>
              </tr>
              <tr>
                <td style="padding-top:5px;padding-bottom:5px;">
                  <span class="has-text-weight-bold is-size-7-mobile">
                    产品产地
                  </span>
                  <span class="is-size-7-mobile">{{goods.place}}</span>
                </td>
              </tr>
              <tr>
                <td style="padding-top:5px;padding-bottom:5px;">
                  <span class="has-text-weight-bold is-size-7-mobile">
                    生成日期
                  </span>
                  <span class="is-size-7-mobile">{{goods.productionDate}}</span>
                </td>
              </tr>
              <tr>
                <td style="padding-top:5px;padding-bottom:5px;">
                  <span class="has-text-weight-bold is-size-7-mobile">
                    产品容量
                  </span>
                  <span class="is-size-7-mobile">{{goods.volume}}毫升</span>
                </td>
              </tr>
              <tr>
                <td style="padding-top:5px;padding-bottom:5px;">
                  <span class="has-text-weight-bold is-size-7-mobile">
                    产品度数
                  </span>
                  <span class="is-size-7-mobile">{{goods.proof}}度</span>
                </td>
              </tr>
              <tr>
                <td style="padding-top:5px;padding-bottom:5px;">
                  <span class="has-text-weight-bold is-size-7-mobile">
                    包装规格
                  </span>
                  <span class="is-size-7-mobile">{{goods.packing}}</span>
                </td>
              </tr>
              <tr>
                <td style="padding-top:5px;padding-bottom:5px;">
                  <span class="has-text-weight-bold is-size-7-mobile">
                    生成批次号
                  </span>
                  <span class="is-size-7-mobile">{{goods.batch}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="columns">
        <div class="column" style="padding-bottom: 0em;padding-top:1em;padding-right:1em;">
            <img src="../assets/title_gxqd2.gif" alt="" class="pic">
        </div>
        <div class="column" style="padding-bottom: 0em;padding-top:0em;padding-right:1em;">
          <span class="has-text-weight-bold is-size-7-mobile">
            客商名称
          </span>
          <span class="is-size-7-mobile">{{goods.company}}</span>
        </div>
        <div class="column" style="padding-bottom: 1em;padding-top:1em;padding-right:1em;">
          <span class="has-text-weight-bold is-size-7-mobile">
            备注：
          </span>
        </div>
        <div class="column" style="padding-bottom: 0em;padding-top:0em;padding-right:1em;">
          <textarea class="textarea" style="width:100%;" v-text="goods.details" readonly></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/bulma.css'
import axios from 'axios'
export default {
  name: 'info',
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
