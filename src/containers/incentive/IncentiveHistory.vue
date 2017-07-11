<template>
  <div class="history">
    <h3 class="col-xs-12">ประวัติกิจกรรม</h3>
    <!-- Table -->
    <div class="flex-row col-xs-12 cp-block-big">
      <table class="history-table">
        <thead>
          <th>วัน</th>
          <th>เวลา</th>
          <th>กิจกรรม</th>
          <th>ร้าน</th>
        </thead>
        <tbody>
          <tr>
            <td data-column="วันที่" style="min-width: 120px">14/03/2560</td>
            <td data-column="เวลา">09:45</td>
            <td data-column="กิจกรรม">เช็คอิร</td>
            <td data-column="ร้าน">Central Ladprao</td>
          </tr>
          <tr>
            <td data-column="วันที่" style="min-width: 120px">14/03/2560</td>
            <td data-column="เวลา">09:50</td>
            <td data-column="กิจกรรม">เช็คอิน</td>
            <td data-column="ร้าน">Big C Wongsawang</td>
          </tr>
          <tr>
            <td data-column="วันที่" style="min-width: 120px">13/03/2560</td>
            <td data-column="เวลา">16:50</td>
            <td data-column="กิจกรรม">เช็คอิน</td>
            <td data-column="ร้าน">Big C Wongsawang</td>
          </tr>
          <tr>
            <td data-column="วันที่" style="min-width: 120px">13/03/2560</td>
            <td data-column="เวลา">10:50</td>
            <td data-column="กิจกรรม">เช็คอิน</td>
            <td data-column="ร้าน">Isetan</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.history {
  padding-top: 106px;
  padding-bottom: 16px;
}
table {
  thead {
    @media only screen and (max-width: 969px) {
      display: none;
    }
  }
}
.history-table {
  font-size: 0.7rem;
}
</style>
