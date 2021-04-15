<style>
.advancedMenu {
  width: 800px;
  height: 550px;
}
</style>
<template>
  <div>
    <b-dropdown
      v-model="modal"
      split
      id="city"
      :text="cityValue"
      ref="dropdown"
      class="m-2"
      variant="outline-secondary"
      style="background-color:#fff"
    >
      <b-dropdown-form>
        <b-form-checkbox
          class="mb-3"
          v-model="cityCheckBox"
          v-for="(city, i) in citys"
          :key="i"
          :value="city"
           
          >{{ city }}</b-form-checkbox
        >
        <b-form-group label-for="city-form" @submit.stop.prevent>
        </b-form-group>
      </b-dropdown-form>
    </b-dropdown>

    <b-dropdown
      split
      id="price"
      :text="priceValue"
      ref="dropdown"
      class="m-2"
      variant="outline-secondary"
      style="background-color:#fff"
    >
      <b-dropdown-form style="width: 500px">
        <b-form-checkbox
          v-model="priceNoSet"
          aria-describedby="flavours"
          aria-controls="flavours"
          @change="clickNoSet($event,'price')"
        >
          {{ priceNoSetValue }}
        </b-form-checkbox>
        <b-form-checkbox
          v-for="(price, i) in prices"
          :id="'priceInput' + i"
          class="mb-3"
          required
          aria-describedby="flavours"
          aria-controls="flavours"
          v-model="priceCheckBox"
          :key="i"
          :value="price"
          style="background-color:#fff"
          >{{ price }}</b-form-checkbox>
        <div style="position: relative; height: 50px;">
          <b-form-input
            id="minPrice"
            size="sm"
            placeholder=""
            v-model="minPrice"
            style="width: 150px;position: absolute;"
          ></b-form-input>
          <span style="left: 160px;position: absolute;">萬 ~</span>
          <b-form-input
            id="maxPrice"
            size="sm"
            placeholder=""
            v-model="maxPrice"
            style="width: 150px;position: absolute;top: 0; left: 195px;"
          ></b-form-input>
          <span style="position: absolute;left:355px">萬</span>
        </div>
      </b-dropdown-form>
    </b-dropdown>

    <b-dropdown
      split
      id="ping"
      :text="pingValue"
      ref="dropdown"
      class="m-2"
      variant="outline-secondary"
      style="background-color:#fff"
      v-show="pingShow"
    >
      <b-dropdown-form>
        <b-form-checkbox
          v-model="pingNoSet"
          aria-describedby="flavours"
          aria-controls="flavours"
          @change="clickNoSet($event,'ping')"
        >
          {{ pingNoSetValue }}
        </b-form-checkbox>
        <b-form-checkbox
          class="mb-3"
          v-model="pingCheckBox"
          v-for="(ping, i) in pings"
          :key="i"
          :value="ping"
          >{{ ping }}</b-form-checkbox
        >
        <div style="position: relative; height: 50px;">
          <b-form-input
            id="minPing"
            size="sm"
            placeholder=""
            v-model="minPing"
            style="width: 50px;position: absolute;"
          ></b-form-input>
          <span style="left: 50px;position: absolute;">~</span>
          <b-form-input
            id="maxPing"
            size="sm"
            placeholder=""
            v-model="maxPing"
            style="width: 50px;position: absolute;top: 0; left: 65px;"
          ></b-form-input>
          <span style="position: absolute;right:-20px">坪</span>
        </div>
      </b-dropdown-form>
    </b-dropdown>

    <b-dropdown
      split
      id="room"
      :text="roomValue"
      ref="dropdown"
      class="m-2"
      variant="outline-secondary"
      v-show="roomShow"
      style="background-color:#fff"
    >
      <b-dropdown-form>
        <b-form-checkbox
          v-model="roomNoSet"
          aria-describedby="flavours"
          aria-controls="flavours"
         @change="clickNoSet($event,'room')"
        >
          {{ roomNoSetValue }}
        </b-form-checkbox>
        <b-form-checkbox
          class="mb-3"
          v-model="roomCheckBox"
          v-for="(room, i) in rooms"
          :key="i"
          :value="room"
          >{{ room }}</b-form-checkbox
        >
        <div style="position: relative; height: 50px;">
          <b-form-input
            id="minRoom"
            size="sm"
            placeholder=""
            v-model="minRoom"
            style="width: 50px;position: absolute;"
          ></b-form-input>
          <span style="left: 50px;position: absolute;">~</span>
          <b-form-input
            id="maxRoom"
            size="sm"
            placeholder=""
            v-model="maxRoom"
            style="width: 50px;position: absolute;top: 0; left: 65px;"
          ></b-form-input>
          <span style="position: absolute;right:-20px">房</span>
        </div>
      </b-dropdown-form>
    </b-dropdown>
    <b-dropdown
          split
          id="langType"
          :text="langTypeValue"
          ref="dropdown"
          class="m-2"
          variant="outline-secondary"
          style="background-color:#fff"
          v-show="langTypeShow"
        >
          <b-dropdown-form>
            <b-form-checkbox
              v-model="langTypeNoSet"
              aria-describedby="flavours"
              aria-controls="flavours"
              @change="clickNoSet($event,'langType')"
            >
              {{ langTypeNoSetValue }}
            </b-form-checkbox>
            <b-form-checkbox
              class="mb-3"
              v-model="langTypeCheckBox"
              v-for="(langType, i) in langTypes"
              :key="i"
              :value="langType"
              >{{ langType }}</b-form-checkbox
            >
          </b-dropdown-form>
    </b-dropdown>
        <b-dropdown
        split
        id="parkingSpaceType"
        :text="parkingSpaceTypeValue"
        ref="dropdown"
        class="m-2"
        variant="outline-secondary"
        style="background-color:#fff"
        v-show="parkingSpaceTypeShow"
      >
        <b-dropdown-form>
          <b-form-checkbox
            v-model="parkingSpaceTypeNoSet"
            aria-describedby="flavours"
            aria-controls="flavours"
            @change="clickNoSet($event,'parkingSpaceType')"
          >
            {{ parkingSpaceTypeNoSetValue }}
          </b-form-checkbox>
          <b-form-checkbox
            class="mb-3"
            v-model="parkingSpaceTypeCheckBox"
            v-for="(parkingSpaceType, i) in parkingSpaceTypes"
            :key="i"
            :value="parkingSpaceType"
            >{{ parkingSpaceType }}</b-form-checkbox
          >
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
        <b-col>
          <b-dropdown-form>
            <span>類別</span>
            <b-form-checkbox
              v-model="categoryNoSet"
              aria-describedby="flavours"
              aria-controls="flavours"
              @change="clickNoSet($event,'category')"
            >
              {{ categoryNoSetValue }}
            </b-form-checkbox>
            <b-form-checkbox
              class="mb-3"
              v-for="(category, i) in categorys"
              :key="i"
              :value="category"
              v-model="categoryCheckBox"
              >{{ category }}</b-form-checkbox
            >
          </b-dropdown-form>
        </b-col>
        <b-col>
          <b-dropdown-form>
            <span>屋齡</span>
            <b-form-checkbox
              v-model="houseYearNoSet"
              aria-describedby="flavours"
              aria-controls="flavours"
              @change="clickNoSet($event,'houseYear')"
            >
              {{ houseYearNoSetValue }}
            </b-form-checkbox>
            <b-form-checkbox
              class="mb-3"
              v-model="houseYearCheckBox"
              v-for="(year, i) in houseYear"
              :key="i"
              :value="year"
              >{{ year }}
            </b-form-checkbox>
            <div style="position: relative; height: 50px;">
              <b-form-input
                id="minhouseYear"
                size="sm"
                placeholder=""
                v-model="minHouseYear"
                style="width: 50px;position: absolute;"
              ></b-form-input>
              <span style="left: 50px;position: absolute;">~</span>
              <b-form-input
                id="maxHouseYear"
                size="sm"
                placeholder=""
                v-model="maxHouseYear"
                style="width: 50px;position: absolute;top: 0; left: 65px;"
              ></b-form-input>
              <span style="position: absolute;right:-45px">年</span>
            </div>
          </b-dropdown-form>
        </b-col>
        <b-col v-show="floorShow">
          <b-dropdown-form>
            <span>樓層</span>
            <b-form-checkbox
              v-model="floorNoSet"
              aria-describedby="flavours"
              aria-controls="flavours"
              @change="clickNoSet($event,'floor')"
            >
              {{ floorNoSetValue }}
            </b-form-checkbox>
            <b-form-checkbox
              class="mb-3"
              v-model="floorCheckBox"
              v-for="(floor, i) in floors"
              :key="i"
              :value="floor"
              >{{ floor }}
            </b-form-checkbox>
            <div style="position: relative; height: 50px;">
              <b-form-input
                id="minFloor"
                size="sm"
                placeholder=""
                v-model="minFloor"
                style="width: 50px;position: absolute;"
              ></b-form-input>
              <span style="left: 50px;position: absolute;">~</span>
              <b-form-input
                id="maxFloor"
                size="sm"
                placeholder=""
                v-model="maxFloor"
                style="width: 50px;position: absolute;top: 0; left: 65px;"
              ></b-form-input>
              <span style="position: absolute;right:-45px">樓</span>
            </div>
          </b-dropdown-form>
        </b-col>
        <b-col>
          <b-dropdown-form>
            <span>車位</span>
            <b-form-checkbox
              v-model="parkingSpaceNoSet"
              aria-describedby="flavours"
              aria-controls="flavours"
              @change="clickNoSet($event,'parkingSpace')"
            >
              {{ parkingSpaceNoSetValue }}
            </b-form-checkbox>
            <b-form-checkbox
              class="mb-3"
              v-model="parkingSpaceCheckBox"
              v-for="(parkingSpace, i) in parkingSpaces"
              :key="i"
              :value="parkingSpace"
              >{{ parkingSpace }}</b-form-checkbox
            >
          </b-dropdown-form>
        </b-col>
        <b-col v-show='environmentShow'>
          <b-dropdown-form>
            <span>特色環境</span>
            <b-form-checkbox
              v-model="environmentNoSet"
              aria-describedby="flavours"
              aria-controls="flavours"
              @change="clickNoSet($event,'environment')"
            >
              {{ environmentNoSetValue }}
            </b-form-checkbox>
            <b-form-checkbox
              class="mb-3"
              v-model="environmentCheckBox"
              v-for="(environment, i) in environments"
              :key="i"
              :value="environment"
              >{{ environment }}</b-form-checkbox
            >
          </b-dropdown-form>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-button variant="danger">重設條件</b-button>
        <b-button variant="danger" class="ml-3">設定完成</b-button>
      </b-row>
    </b-dropdown>
    <b-button size="lg" variant="primary" class="mb-2" style="background-color: #bea98e;border-color: #bea98e;width: 70px;">
      <i class="fas fa-search" style="color:#FFF;"></i>
    </b-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modal: '',
      searchInput: "",
      checked: true,
      citys: ["台北市", "新北市"],
      cityCheckBox: [],
      cityValue: "請選擇縣市",
      
      priceCheckBox: [],
      priceValue: "總價預算",
      minPrice: "",
      maxPrice: "",
      priceNoSet: false,
      priceNoSetValue: "不限",
      prices: ["700萬以下","700萬-1400萬","1400萬-2000萬","2000萬-2500萬","2500萬-4000萬","4000萬以上"],

      pingShow:true,
      pingNoSet: false,
      pingNoSetValue: "不限",
      pingCheckBox: [],
      pingValue: "坪數",
      pings: ["20坪以下", "20-30坪", "30-40坪", "40坪以上"],
      minPing: "",
      maxPing: "",

      roomShow:true,
      roomNoSet: false,
      roomNoSetValue: "不限",
      roomCheckBox: [],
      roomValue: "房數",
      rooms: ["1房", "2房", "3房", "4房", "4房以上"],
      minRoom: "",
      maxRoom: "",

      langTypeShow:false,
      langTypeNoSet: false,
      langTypeNoSetValue: "不限",
      langTypeCheckBox: [],
      langTypeValue: "類型",
      langTypes: ["農地", "建地", "工業地", "其它土地"],

      parkingSpaceTypeShow:false,
      parkingSpaceTypeNoSet: false,
      parkingSpaceTypeNoSetValue: "不限",
      parkingSpaceTypeCheckBox: [],
      parkingSpaceTypeValue: "車位類型",
      parkingSpaceTypes: ["平面式", "機械式", "庭院", "輪抽","坡道式平面","升降式平面","坡道式機械","升降式機械","其它"],

      advancedShow: true,
      advancedValue: "進階搜尋",
      categoryNoSet: true,
      categoryNoSetValue: "不限",
      categoryCheckBox: [],
      categorys: ["套房","公寓","華夏","大樓","透天別墅","建地","農地","工業地","其它建物","其它土地"],

      houseYearNoSet: true,
      houseYearNoSetValue: "不限",
      houseYearCheckBox: [],
      minHouseYear: "",
      maxHouseYear: "",
      houseYear: ["0-1年", "1-5年", "6-10年", "11-20年", "21-30年", "30年以上"],

      floorShow: true,
      floorNoSet: true,
      floorNoSetValue: "不限",
      floorCheckBox: [],
      minFloor: "",
      maxFloor: "",
      floors: ["1樓", "2-5樓", "5-10樓", "11以上"],

      parkingSpaceNoSet: true,
      parkingSpaceNoSetValue: "不限",
      parkingSpaceCheckBox: [],
      parkingSpaces: ["有車位", "無車位", "多車位"],

      environmentShow:true,
      environmentNoSet: true,
      environmentNoSetValue: "不限",
      environmentCheckBox: [],
      environments: ["有電梯","有管理","低公設","近捷運","近學校","近公園","近市場"]
    };
  },
  watch: {
    cityCheckBox(value) {
      let values = value.toString();
      values == ""
        ? (this.cityValue = "請選擇縣市")
        : (this.cityValue = value.toString());
    },
    priceCheckBox(value) {
      this.priceNoSet = false;
      this.parameterArrange(value, "checkbox", "price");
    },
    pingCheckBox(value) {
      this.pingNoSet = false;
      this.parameterArrange(value, "checkbox", "ping");
    },
    roomCheckBox(value) {
      this.roomNoSet = false;
      this.parameterArrange(value, "checkbox", "room");
    },
    categoryCheckBox(value) {
      this.categoryNoSet = false;
    },
    houseYearCheckBox(value) {
      this.houseYearNoSet = false;
      this.parameterArrange(value, "checkbox", "houseYear");
    },
    floorCheckBox(value) {
      this.floorNoSet = false;
      this.parameterArrange(value, "checkbox", "floor");
    },
    parkingSpaceCheckBox(value) {
      this.parkingSpaceNoSet = false;
    },
    environmentCheckBox(value) {
      this.environmentNoSet = false;
    },
    minPrice(value) {
      this.priceValue = `${value}`;
      this.priceValue = this.minPrice;
    },
    maxPrice(value) {
      if (this.priceValue != "不限") {
        value == ""
          ? (this.priceValue = "總價預算")
          : (this.priceValue = `${this.minPrice}萬-${value}萬`);
      }
    },
    minPing(value) {
      this.pingValue = `${value}`;
      this.pingValue = this.minPing;
    },
    maxPing(value) {
      if (this.pingValue != "不限") {
        value == ""
          ? (this.pingValue = "坪數")
          : (this.pingValue = `${this.minPing}-${value}坪`);
      }
    },
    minRoom(value) {
      this.roomValue = `${value}`;
      this.roomValue = this.minRoom;
    },
    maxRoom(value) {
      if (this.roomValue != "不限") {
        value == ""
          ? (this.roomValue = "房數")
          : (this.roomValue = `${this.minRoom}-${value}房`);
      }
    },
    minHouseYear(value) {
      this.houseYearValue = `${value}`;
      this.houseYearValue = this.minHouseYear;
    },
    maxHouseYear(value) {
      if (this.houseYearValue != "不限") {
        value == ""
          ? (this.houseYearValue = "年")
          : (this.houseYearValue = `${this.minHouseYear}-${value}年`);
      }
    },
    minFloor(value) {
      this.floorValue = `${value}`;
      this.floorValue = this.minFloor;
    },
    maxFloor(value) {
      if (this.floorValue != "不限") {
        value == ""
          ? (this.floorValue = "樓")
          : (this.floorValue = `${this.minFloor}-${value}樓`);
      }
    }
  },
  created(){
   this.$nuxt.$on('searchBar', (parameter) => {
        switch (parameter) {
          case 'house':
                  this.pingShow = true;
                  this.floorShow = true;
                  this.advancedShow = true;
                  this.roomShow = true;
                  this.environmentShow = true;
                  this.langTypeShow = false;
                  this.parkingSpaceTypeShow = false;
                  this.categorys = ["套房","公寓","華夏","大樓","透天別墅","其它建物"]
                  this.floors = ["1樓", "2-5樓", "5-10樓", "11以上"];
            break;
          case 'land':
                  this.pingShow = true;
                  this.floorShow = true;
                  this.langTypeShow = true;
                  this.environmentShow = true;
                  this.advancedShow = false;
                  this.roomShow =false;
                  this.parkingSpaceTypeShow = false;
                  this.floors = ["1樓", "2-5樓", "5-10樓", "11以上"];
              break;
          case 'storeFront':
                  this.pingShow = true;
                  this.floorShow = true;
                  this.advancedShow = true;
                  this.environmentShow = true;
                  this.roomShow =false;
                  this.langTypeShow = false;
                  this.parkingSpaceTypeShow = false;
                  this.categorys = ["套房","公寓","華夏","大樓","透天別墅","其它建物"];
                  this.floors = ["1樓", "2-5樓"];
              break;
          case 'office':
                  this.floorShow = true;
                  this.roomShow = true;
                  this.environmentShow = true;
                  this.parkingSpaceTypeShow = false;
                  this.categorys = ["套房","公寓","華夏","大樓","透天別墅","其它建物"];
              break;
          case 'geoponics':
                  this.pingShow = true;
                  this.floorShow = true;
                  this.environmentShow = false;
                  this.parkingSpaceTypeShow = false;
                  this.floors = ["1樓", "2-5樓"];
              break;
          case 'industry':
                  this.pingShow = true;
                  this.environmentShow = false;
                  this.floorShow = false;
                  this.parkingSpaceTypeShow = false;
                  this.categorys = ["廠房","廠辦","工業地","其它建物","其它土地"];
                 
              break;
          case 'other':
                  this.pingShow = true;
                  this.environmentShow = false;
                  this.floorShow = false;
                  this.parkingSpaceTypeShow = false;
                  this.categorys = ["其它建物","其它土地"];
                 
              break;
          case 'parkingSpace':
                  this.parkingSpaceTypeShow = true;
                  this.environmentShow = false;
                  this.floorShow = false;
                  this.roomShow = false;
                  this.pingShow = false;
                  this.categorys = ["其它建物","其它土地"];
                 
              break;

          default:
                this.floorShow = true;
                this.advancedShow = true;
                this.roomShow = true;
                this.environmentShow = true;
                this.pingShow = true;
                this.langTypeShow = false;
                this.parkingSpaceTypeShow = false;
                this.categorys = ["套房","公寓","華夏","大樓","透天別墅","建地","農地","工業地","其它建物","其它土地"];
                this.floors = ["1樓", "2-5樓", "5-10樓", "11以上"];
                
            break;
        }
    })
  },
  methods: {
    clickNoSet(checked,type){
      this.parameterArrange(checked, "noSet", type);
    },

    parameterArrange(value, type, category) {
      /**
       *  第一層 switch 判別 選單項目 or 不限的按鈕
       *
       */
      switch (type) {
        case "checkbox":
          let checkboxValue = value.toString();
          let removetext = /[萬 以上 以下 坪 房 年 樓]/gi;
          let change = /-/gi;
          switch (checkboxValue) {
            case "700萬以下":
              let minPrice700 = checkboxValue.replace(removetext, "");
              this.minPrice = 0;
              this.maxPrice = minPrice700;
              break;

            case "4000萬以上":
              let maxPrice4000 = checkboxValue.replace(removetext, "");
              this.minPrice = maxPrice4000;
              this.maxPrice = "";
              break;
            case "20坪以下":
              let pingMax = checkboxValue.replace(removetext, "");
              this.minPing = 0;
              this.maxPing = pingMax;
              break;
            case "40坪以上":
              let pingMin = checkboxValue.replace(removetext, "");
              this.maxPing = "";
              this.minPing = pingMin;
              break;
            case "4房以上":
              let roomMin = checkboxValue.replace(removetext, "");
              this.maxRoom = "";
              this.minRoom = roomMin;
              break;

            default:
              if (checkboxValue != "") {
                let price = checkboxValue.replace(removetext, "");
                price = price.replace(change, ",").split(",");
                var noRepeatPrice = price.filter(function(element, index, arr) {
                  return arr.indexOf(element) === index;
                });
                var min = "";
                var max = "";

                for (let i = 0; i < noRepeatPrice.length; i++) {
                  min = parseInt(noRepeatPrice[0]);
                  max = parseInt(noRepeatPrice[0]);
                  if (min > parseInt(noRepeatPrice[i])) {
                    min = noRepeatPrice[i];
                  }
                  if (max < parseInt(noRepeatPrice[i])) {
                    max = noRepeatPrice[i];
                  }
                }
                /**
                 * 判別類別 將輸入欄位 分別塞入 最大值 跟 最小值
                 */
                switch (category) {
                  case "price":
                    this.minPrice = min;
                    this.maxPrice = max;
                    this.priceValue == ""
                      ? (this.priceValue = "總價預算")
                      : (this.priceValue = `${this.minPrice}萬-${this.maxPrice}萬`);

                    break;
                  case "ping":
                    this.minPing = min;
                    this.maxPing = max;

                    break;
                  case "room":
                    this.minRoom = min;
                    this.maxRoom = max;

                    break;
                  case "houseYear":
                    this.minHouseYear = min;
                    this.maxHouseYear = max;
                    break;
                  case "floor":
                    this.minFloor = min;
                    this.maxFloor = max;
                    break;
                }
                break;
              }
          }
          break;
        /**
         * 點選 不限的選項
         *
         */
        case "noSet":
          let checked = value;
          if (checked) {
            /**
             *  當不限的選項 被打勾
             */
            switch (category) {
              case "price":
                this.priceValue = "不限";
                this.priceCheckBox = [];
                break;

              case "ping":
                this.pingValue = "不限";
                this.pingCheckBox = [];

                break;
              case "room":
                this.roomValue = "不限";
                this.roomCheckBox = [];
                break;
              case "langType":
                this.langTypeValue = "不限";
                this.langTypeCheckBox = [];
                break;
              case "parkingSpaceType":
                this.parkingSpaceTypeValue = "不限";
                this.parkingSpaceTypeCheckBox = [];
                break;
              case "category":
                this.categoryCheckBox = [];

                break;
              case "houseYear":
                this.houseYearCheckBox = [];
                break;
              case "floor":
                this.floorCheckBox = [];
                break;
              case "parkingSpace":
                this.parkingSpaceCheckBox = [];
                break;
              case "environment":
                this.environmentCheckBox = [];
                break;
            }
          } else {
            /**
             * 不限的選項 被取消打勾
             * 下拉選單將改回預設值
             */
            switch (category) {
              case "price":
                this.priceValue = "總價預算";
                break;
              case "ping":
                this.pingValue = "坪數";
                break;
              case "room":
                this.roomValue = "房數";
                break;
            }
          }
          break;
        default:
          break;
      }
    }
  }
};
</script>