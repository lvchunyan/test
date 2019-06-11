<template>
    <div>
        <Card>
            <page-table :get-method="getMethod" :columns="columns" :operation="operations"></page-table>
        </Card>
    </div>
</template>

<script>
import pageTable from '_c/page-table'
import { getCars } from '@/api/car'
import { config } from '@/libs/common'

export default {
  components: {
    pageTable
  },
  data () {
    return {
      getMethod: getCars,
      columns: [
        {
          title: '所属单位',
          key: 'companyName'
        },
        {
          title: '车牌号',
          key: 'vehicleNumber'
        },
        {
          title: '车型',
          key: 'vehicleType',
          render: (h, params) => {
            return h('div', [
              config.getVehicleType(params.row.vehicleType)
            ])
          }
        },
        {
          title: '车储气容量（吨）',
          key: 'capacity'
        },
        {
          title: '操作',
          slot: 'action',
          align: 'center'
        }
      ],
      operations: {
        edit: {
          index: '编辑'
        },
        view: {
          index: '详情'
        },
        delete: {
          index: '删除'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
