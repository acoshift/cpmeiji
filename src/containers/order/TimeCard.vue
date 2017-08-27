<template>
  <div
    class="time-card cp-segment"
    :class="{
      monday: orderDate === 'วันจันทร์',
      tuesday: orderDate === 'วันอังคาร',
      wednesday: orderDate === 'วันพุธ',
      thursday: orderDate === 'วันพฤหัสบดี',
      friday: orderDate === 'วันศุกร์',
      saturday: orderDate === 'วันเสาร์',
      sunday: orderDate === 'วันอาทิตย์'
    }">
    <div class="cp-block">
      <div class="cp-block"><strong>รอบการสั่ง(วัน): </strong> {{ orderDate || '-' }}</div>
      <div class="cp-block"><strong>รอบการสั่ง(เวลา): </strong> {{ orderTime || '-' }}</div>
      <div class="cp-block"><strong>รอบการส่ง: </strong> {{ sentDate || '-' }}
        <!-- <DatePicker
          :date="startTime"
          :option="datePickerOption"
          :limit="limit"
          @change="dateChange"
        ></DatePicker> -->
      </div>
    </div>
    <div class="cp-button -positive" @click="select">เลือกรอบนี้</div>
  </div>
</template>

<script>
import DatePicker from 'vue-datepicker/vue-datepicker-es6.vue'
import moment from 'moment'

export default {
  name: 'TimeCard',
  components: {
    DatePicker
  },
  props: [
    'orderDate',
    'orderTime',
    'sentDate'
  ],
  data () {
    return {
      selectedDate: moment().format('DD/MM/YYYY'),
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
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '1px solid rgb(209, 209, 209)',
          'border-radius': '4px',
          'color': '#5F5F5F'
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
          available: [1]
        },
        {
          type: 'fromto',
          from: moment(),
          to: moment().add(60, 'day')
        }
      ]
    }
  },
  methods: {
    select () {
      this.$emit('select')
    },
    dateChange (date) {
      console.log(date)
      this.selectedDate = date
    }
  }
}
</script>

<style scoped lang="scss">
.time-card {
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 3px 7px rgba(50,50,93,.03), 0 2px 7px rgba(0,0,0,.03);
  border: 1px solid #efefef;
  &.monday {
    border-left: 6px solid yellow
  }
  &.tuesday {
    border-left: 6px solid pink
  }
  &.wednesday {
    border-left: 6px solid green
  }
  &.thursday {
    border-left: 6px solid orange
  }
  &.friday {
    border-left: 6px solid skyblue
  }
  &.saturday {
    border-left: 6px solid violet
  }
  &.sunday {
    border-left: 6px solid red
  }
}
</style>
