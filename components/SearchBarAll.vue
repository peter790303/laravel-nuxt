<style>
.advancedMenu {
  width: 800px;
  height: 550px;
}
</style>
<template>
  <div>
    <b-dropdown
      v-for="(select, i) in selects"
      :key="i"
      split
      :id="select.id"
      :text="select.defalutValue"
      ref="dropdown"
      class="m-2"
      variant="outline-secondary"
      style="background-color:#fff"
      v-show="select.show"
    >
      <b-dropdown-form :style="select.style">
        <b-form-checkbox
          class="mb-3"
          v-for="(droupDownvalue, i) in select.droupDownValue"
          :key="i"
          :value="droupDownvalue"
          :id="select.id + '_' + i"
          @change="clickDroup(select.id, $event, droupDownvalue.name)"
          >{{ droupDownvalue.name }}</b-form-checkbox
        >
        <div
          v-show="select.customValue"
          style="position: relative; height: 50px;"
          @change="clickInput($event, select.id)"
        >
          <b-form-input
            size="sm"
            :id="'min_' + select.id"
            placeholder=""
            v-model="select.minValue"
            style="width: 150px;position: absolute;"
          ></b-form-input>
          <span style="left: 160px;position: absolute;"
            >{{ select.customText }} ~</span
          >
          <b-form-input
            size="sm"
            :id="'max_' + select.id"
            placeholder=""
            v-model="select.maxValue"
            style="width: 150px;position: absolute;top: 0; left: 195px;"
          ></b-form-input>
          <span style="position: absolute;left:355px">{{
            select.customText
          }}</span>
        </div>
      </b-dropdown-form>
    </b-dropdown>

    <div
      style="position: relative;display: inline-flex;height: 35px;width: 200px; vertical-align: middle;"
    >
      <b-form-input
        id="searchInput"
        size="sm"
        placeholder="請輸入關鍵字或物件編號搜尋"
        v-model="searchInput"
      ></b-form-input>
    </div>

    <b-dropdown
      split
      menu-class="advancedMenu"
      id="advanced"
      :text="advancedValue"
      ref="dropdown"
      class="m-2"
      boundary="window"
      variant="outline-secondary"
      style="background-color:#fff"
      v-show="advancedShow"
    >
      <b-row>
        <b-row
          v-for="(advancedSelect, i) in advancedSelects"
          :key="i"
          v-show="advancedSelect.show"
        >
          <b-col>
            <b-dropdown-form>
              <span>{{ advancedSelect.name }}</span>
              <b-form-checkbox
                class="mb-3"
                v-for="(droupDownValue, i) in advancedSelect.droupDownValue"
                :key="i"
                :value="droupDownValue"
                v-show="droupDownValue.show"
                @change="
                  clickDroup(
                    advancedSelect.id,
                    $event,
                    advancedSelect.name,
                    'advanced'
                  )
                "
                >{{ droupDownValue.name }}</b-form-checkbox
              >
              <div
                v-show="advancedSelect.customValue"
                style="position: relative; height: 50px;right:10px;"
                @change="clickInput($event, advancedSelect.id)"
              >
                <b-form-input
                  size="sm"
                  :id="'min_' + advancedSelect.id"
                  placeholder=""
                  v-model="advancedSelect.minValue"
                  style="width: 40px;position: absolute;"
                ></b-form-input>
                <span style="left: 50px;position: absolute;"
                  >{{ advancedSelect.customText }} ~</span
                >
                <b-form-input
                  size="sm"
                  :id="'max_' + advancedSelect.id"
                  placeholder=""
                  v-model="advancedSelect.maxValue"
                  style="width: 40px;position: absolute;top: 0; left: 90px;"
                ></b-form-input>
                <span style="position: absolute;left:145px">{{
                  advancedSelect.customText
                }}</span>
              </div>
            </b-dropdown-form>
          </b-col>
        </b-row>
      </b-row>
      <b-row class="justify-content-center">
        <b-button variant="danger">重設條件</b-button>
        <b-button variant="danger" class="ml-3">設定完成</b-button>
      </b-row>
    </b-dropdown>
    <b-button
      size="lg"
      variant="primary"
      class="mb-2"
      style="background-color: #bea98e;border-color: #bea98e;width: 70px;"
    >
      <i class="fas fa-search" style="color:#FFF;"></i>
    </b-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchInput: "",
      selects: [
        {
          id: "city",
          droupDownValue: [
            { checked: false, name: "台北市" },
            { checked: false, name: "新北市" }
          ],
          resetDefalut: "請選擇縣市區域",
          defalutValue: "請選擇縣市區域",
          customValue: false,
          customValue: false,
          show: true
        },
        {
          id: "price",
          droupDownValue: [
            { checked: false, name: "不限" },
            { checked: false, name: "700萬以下" },
            { checked: false, name: "700萬-1400萬" },
            { checked: false, name: "2000萬-2500萬" },
            { checked: false, name: "2500萬-4000萬" },
            { checked: false, name: "4000萬以上" }
          ],
          resetDefalut: "總價預算",
          defalutValue: "總價預算",
          customValue: true,
          customText: "萬",
          selectValues: [],
          minValue: "",
          maxValue: "",
          show: true,
          style: "width:450px !important"
        },
        {
          id: "ping",
          droupDownValue: [
            { checked: false, name: "不限" },
            { checked: false, name: "20坪以下" },
            { checked: false, name: "20-30坪" },
            { checked: false, name: "30-40坪" },
            { checked: false, name: "40坪以上" }
          ],
          resetDefalut: "坪數",
          defalutValue: "坪數",
          customValue: true,
          customText: "坪",
          selectValues: [],
          minValue: "",
          maxValue: "",
          show: true,
          style: "width:450px !important"
        },
        {
          id: "room",
          droupDownValue: [
            { checked: false, name: "不限" },
            { checked: false, name: "1房" },
            { checked: false, name: "2房" },
            { checked: false, name: "4房" },
            { checked: false, name: "4房以上" }
          ],
          resetDefalut: "房數",
          defalutValue: "房數",
          customValue: true,
          customText: "房",
          selectValues: [],
          minValue: "",
          maxValue: "",
          show: true,
          style: "width:450px !important"
        },
        {
          id: "langType",
          droupDownValue: [
            { checked: false, name: "不限" },
            { checked: false, name: "農地" },
            { checked: false, name: "建地" },
            { checked: false, name: "工業地" },
            { checked: false, name: "其它土地" }
          ],
          resetDefalut: "類型",
          defalutValue: "類型",
          customValue: false,
          show: false
        },
        {
          id: "parkingSpaceType",
          droupDownValue: [
            { checked: false, name: "不限" },
            { checked: false, name: "平面式" },
            { checked: false, name: "機械式" },
            { checked: false, name: "庭院" },
            { checked: false, name: "輪抽" },
            { checked: false, name: "坡道式平面" },
            { checked: false, name: "升降式平面" },
            { checked: false, name: "坡道式機械" },
            { checked: false, name: "升降式機械" },
            { checked: false, name: "其它" }
          ],
          resetDefalut: "車位類型",
          defalutValue: "車位類型",
          customValue: false,
          show: false
        }
      ],
      advancedShow: true,
      resetDefalut: "進階搜尋",
      advancedValue: "進階搜尋",
      advancedSelects: [
        {
          id: "category",
          name: "類別",
          show: true,
          droupDownValue: [
            { checked: false, name: "不限", show: true },
            { checked: false, name: "套房", show: true },
            { checked: false, name: "公寓", show: true },
            { checked: false, name: "華夏", show: true },
            { checked: false, name: "大樓", show: true },
            { checked: false, name: "透天別墅", show: true },
            { checked: false, name: "建地", show: true },
            { checked: false, name: "農地", show: true },
            { checked: false, name: "工業地", show: true },
            { checked: false, name: "其它建物", show: true },
            { checked: false, name: "其它土地", show: true },
            { checked: false, name: "廠房", show: false },
            { checked: false, name: "廠辦", show: false }
          ]
        },
        {
          id: "houseYear",
          name: "屋齡",
          customValue: true,
          customText: "年",
          selectValues: [],
          minValue: "",
          maxValue: "",
          show: true,
          droupDownValue: [
            { checked: false, name: "不限", show: true },
            { checked: false, name: "0-1年", show: true },
            { checked: false, name: "1-5年", show: true },
            { checked: false, name: "6-10年", show: true },
            { checked: false, name: "11-20年", show: true },
            { checked: false, name: "21-30年", show: true },
            { checked: false, name: "30年以上", show: true }
          ]
        },
        {
          id: "floor",
          name: "樓層",
          customValue: true,
          customText: "樓",
          selectValues: [],
          minValue: "",
          maxValue: "",
          show: true,
          droupDownValue: [
            { checked: false, name: "不限", show: true },
            { checked: false, name: "1樓", show: true },
            { checked: false, name: "2-5樓", show: true },
            { checked: false, name: "5-10樓", show: true },
            { checked: false, name: "11以上", show: true }
          ]
        },
        {
          id: "parkingSpace",
          name: "車位",
          customValue: false,
          show: true,
          droupDownValue: [
            { checked: false, name: "不限", show: true },
            { checked: false, name: "有車位", show: true },
            { checked: false, name: "無車位", show: true },
            { checked: false, name: "多車位", show: true }
          ]
        },
        {
          id: "environment",
          name: "特色環境",
          customValue: false,
          show: true,
          droupDownValue: [
            { checked: false, name: "不限", show: true },
            { checked: false, name: "有電梯", show: true },
            { checked: false, name: "有管理", show: true },
            { checked: false, name: "低公設", show: true },
            { checked: false, name: "近捷運", show: true },
            { checked: false, name: "近學校", show: true },
            { checked: false, name: "近公園", show: true },
            { checked: false, name: "近市場", show: true }
          ]
        }
      ]
    };
  },
  created() {
    this.$nuxt.$on("searchBar", parameter => {
      let typeOFF= [];
      this.selects.forEach(select => {
        switch (parameter) {
          case "house":
            if (select.id == "langType" || select.id == "parkingSpaceType") {
              select.show = false;
            } else {
              select.show = true;
            }
            this.advancedShow = true;
            this.switchAdvancedSelects("default", true, typeOFF);
            break;
          case "land":
            if (select.id == "room" || select.id == "parkingSpaceType") {
              select.show = false;
            } else {
              select.show = true;
            }
            this.advancedShow = false;
            break;
          case "storeFront":
            if (
              select.id == "room" ||
              select.id == "parkingSpaceType" ||
              select.id == "langType"
            ) {
              select.show = false;
            } else {
              select.show = true;
            }
            this.advancedShow = true;
            this.switchAdvancedSelects("default", false, typeOFF);

            break;
          case "office":
            if (select.id == "parkingSpaceType" || select.id == "langType") {
              select.show = false;
            } else {
              select.show = true;
            }
            this.advancedShow = true;
           
            this.switchAdvancedSelects("default", true, typeOFF);
            break;
          case "geoponics":
            if (select.id == "parkingSpaceType" || select.id == "langType") {
              select.show = false;
            } else {
              select.show = true;
            }
            this.advancedShow = true;
            typeOFF = ["environment"];
            this.switchAdvancedSelects("geoponics", false, typeOFF);

            break;
          case "industry":
            if (select.id == "parkingSpaceType" || select.id == "langType") {
              select.show = false;
            } else {
              select.show = true;
            }
            typeOFF = ['environment','floor']
            this.advancedShow = true;
            this.switchAdvancedSelects("industry", false, typeOFF);
            break;
          case "other":
            if (select.id == "parkingSpaceType" || select.id == "langType") {
              select.show = false;
            } else {
              select.show = true;
            }
            this.advancedShow = true;
            typeOFF = ['environment','floor']
            this.switchAdvancedSelects("other", false, typeOFF);
         

            break;
          case "parkingSpace":
            if (select.id == "parkingSpaceType" || select.id == "price" || select.id == "city") {
              select.show = true;
            } else {
              select.show = false;
            }
            this.advancedShow = false;
            break;

          default:
            if (select.id == "langType" || select.id == "parkingSpaceType") {
              select.show = false;
            } else {
              select.show = true;
            }
            this.advancedShow = true;
            this.switchAdvancedSelects(false, false, "all");

            break;
        }
      });
    });
  },
  methods: {
    clickNoSet(checked, type) {
      this.parameterArrange(checked, "noSet", type);
    },
    clickInput(event, type) {
      let inputID = event.target.id;
      let inputCategory = inputID.split("_")[0];
      this.selects.forEach(select => {
        if (select.id == type) {
          switch (inputCategory) {
            case "min":
              select.minValue = event.target.value;
              break;
            case "max":
              select.maxValue = event.target.value;
              break;
          }
          select.defalutValue = `${select.minValue}-${select.maxValue}${select.customText}`;
        }
      });
    },
    clickDroup(selectDroupDown, checkedValue, checkedName, type) {
      /**
       * selectValues ->  存取打勾的選項
       */

      let selectValues = [];
      let selectObject;
      if (type == "advanced") {
        selectObject = this.advancedSelects;
      } else {
        selectObject = this.selects;
      }
      selectObject.forEach(select => {
        if (select.id == selectDroupDown) {
          /**
           * 判斷 狀態值 為 true or false
           * 再把狀態值塞回 選項
           */

          if (!checkedValue) {
            select.droupDownValue.forEach(element => {
              if (element.name == checkedName) {
                element.checked = false;
              }
            });
          } else {
            checkedValue.checked = true;
          }
          /**
           * 將複選的選項 塞入陣列 selectValues
           */
          select.droupDownValue.forEach(element => {
            if (element.checked) {
              selectValues.push(element.name);
            }
          });

          if (select.droupDownValue[0].checked) {
              if(select.id == 'city') {
                 select.defalutValue =checkedName;
              } else {
                select.minValue = "";
                select.maxValue = "";
                select.defalutValue = "不限";

                for (let i = 1; i < select.droupDownValue.length; i++) {
                    select.droupDownValue[i].checked = false;
                    $(`#${select.id}_${i}`).prop("checked", false);
                }
              }
            
          } else {
            if (select.customValue) {
              if (selectValues.length > 0) {
                let chooseValues = this.replaceText(selectValues);
                let min = "";
                let max = "";
                for (let i = 0; i < chooseValues.length; i++) {
                  min = parseInt(chooseValues[0]);
                  max = parseInt(chooseValues[0]);
                  if (min > parseInt(chooseValues[i])) {
                    min = chooseValues[i];
                  }
                  if (max < parseInt(chooseValues[i])) {
                    max = chooseValues[i];
                  }
                }
                select.minValue = min;
                select.maxValue = max;
                select.defalutValue = `${min}-${max}${select.customText}`;
              } else {
                select.defalutValue = select.resetDefalut;
              }
            } else {
              var lock = false;
              select.droupDownValue.forEach(element => {
                if (element.checked) {
                  return (lock = true);
                }
              });
              select.defalutValue = lock ? checkedName : select.resetDefalut;
            }
          }
        }
      });
    },
    replaceText(data) {
      let selectValues = data.toString();
      let removetext = /[萬 以上 以下 坪 房 年 樓]/gi;
      selectValues = selectValues.replace(removetext, "");
      let removeSymbol = /-/gi;
      selectValues = selectValues.replace(removeSymbol, ",").split(",");

      let noRepeatValue = selectValues.filter(function(element, index, arr) {
        return arr.indexOf(element) === index;
      });

      return noRepeatValue;
    },
    switchAdvancedSelects(categoryDefalut, floorDefalut, type) {
      let categorys = [];
      this.advancedSelects.forEach(advancedSelect => {
        if (advancedSelect.id == "category") {
          switch (categoryDefalut) {
            case "default":
              categorys = ["不限","套房","公寓","華夏","大樓","透天別墅","其它建物"];
              break;
            case "geoponics":
              categorys = ["不限", "農舍", "農地", "其它建物", "其它土地"];
              break;
            case "industry":
              categorys = ["不限","廠房", "廠辦", "工業地", "其它建物", "其它土地"];
              break;
            case "other":
              categorys = ["不限","其它建物", "其它土地"];
              break;
          }
          advancedSelect.droupDownValue.forEach(droupDown => {
            droupDown.show = categorys.includes(droupDown.name) ? true : false;
          });
        }

        if (advancedSelect.id == "floor") {
          advancedSelect.droupDownValue.forEach(droupDown => {
            if (floorDefalut) {
              droupDown.show = true;
            } else {
              let floors = ["1樓", "2-5樓"];
              droupDown.show = floors.includes(droupDown.name) ? true : false;
            }
          });
        }

        if (type != undefined) {
          if (type == "all") {
          advancedSelect.droupDownValue.forEach(droupDown => {
            droupDown.show = true;
          });
         } else {
            advancedSelect.show = type.includes(advancedSelect.id) ? false : true;
         }
        
        }
        
      
      });
    }
  }
};
</script>