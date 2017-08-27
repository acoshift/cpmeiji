<template>
  <div>

    <div class="location-panel cp-block">
      <div class="cp-input-field _flex-column _no-margin cp-segment">
        <label>ร้านของคุณ</label>
        <select class="cp-input _flex-span" v-model="selectedShop">
          <option value="" disabled>กรุณาเลือก...</option>
          <option v-for="x in shops" :key="x.id" :value="x.id">{{ x.name }}</option>
        </select>
      </div>

    </div>
    <div
      v-if="detail"
      class="time-card-container row"
      style="padding-top: 110px">
      <div v-for="x in periodList" :key="x.id" class="col-xs-12 cp-block">
        <TimeCard
          :orderDate="x.order.dateName"
          :orderTime="x.order.time"
          :sentDate="x.send.dateName"
          @select="select(x)">
        </TimeCard>
      </div>
      <div class="col-xs-12 cp-block">
        <div class="time-card cp-segment">
          <DatePicker
            ref="datePicker"
            :date="startTime"
            :option="datePickerOption"
            :limit="limit"
            @change="dateChange"
          ></DatePicker>
          <div class="cp-button -positive" @click="$refs.datePicker.showCheck()">เลือกรอบอื่น</div>
          <!-- <div class="hidden"> -->
          <!-- </div> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import SweetAlert from 'sweetalert'
import TimeCard from './TimeCard'
import DatePicker from 'vue-datepicker/vue-datepicker-es6.vue'
import moment from 'moment'

export default {
  name: 'OrderSelectPeriod',
  components: {
    TimeCard,
    DatePicker
  },
  props: {
    sessionData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      selectedShop: '',
      startTime: {
        time: moment().format('DD/MM/YYYY')
      },
      datePickerOption: {
        type: 'day',
        week: ['จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อ'],
        month: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
        format: 'DD/MM/YYYY',
        placeholder: 'เลือกวันส่ง',
        inputStyle: {
          display: 'none'
        },
        color: {
          header: '#fa3768',
          headerText: 'white'
        },
        buttons: {
          ok: 'ตกลง',
          cancel: 'ยกเลิก'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      limit: [
        {
          type: 'weekday',
          available: [0, 1, 2, 3, 4, 5, 6]
        },
        {
          type: 'fromto',
          from: moment(),
          to: moment().add(120, 'day')
        }
      ],
      periodList: []
    }
  },
  subscriptions () {
    return {
      shops: this.$api.listShops().do(console.log),
      detail: this.$watchAsObservable('selectedShop')
        .pluck('newValue')
        .filter(Boolean)
        .flatMap((shopId) => this.$api.getShop(shopId))
        .do((detail) => {
          this.periodList = detail.periods
          console.log(this.periodList)
        })
    }
  },
  methods: {
    select (period) {
      SweetAlert({
        title: 'กรุณาใส่เลข PO',
        type: 'input',
        showCancelButton: true,
        closeOnConfirm: true,
        inputPlaceholder: 'เลข PO ของคุณ',
        cancelButtonText: 'ยกเลิก',
        confirmButtonText: 'ยืนยัน'
      }, (inputValue) => {
        if (inputValue) {
          this.$emit('selectPeriod', {
            shop: this.selectedShop,
            period: period.id,
            po: inputValue
          })
        }
      })
    },
    dateChange (date) {
      console.log(date)
      console.log(this.periodList)
      this.periodList.push({
        order: {
          dateName: date,
          time: '-'
        },
        send: {
          dateName: '-'
        }
      })
      // this.selectedDate = date
    }
  }
}
</script>

<style scoped lang="scss">
.hidden {
  display: none;
}
.time-card {
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 3px 7px rgba(50,50,93,.03), 0 2px 7px rgba(0,0,0,.03);
  border: 1px solid #efefef;
}
.time-card-container {
  padding-top: 90px;
}
.location-panel {
  position: fixed;
  z-index: 99;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ececec;
  box-shadow: 0 3px 7px rgba(50,50,93,.03), 0 2px 7px rgba(0,0,0,.03);
}
</style>
