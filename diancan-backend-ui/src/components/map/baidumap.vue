<template>
   <div id="bmap" v-loading="loading">
      <el-card class= "card-container">
          <div slot="header" class="header clearfix">
              <el-input v-model="city" style="width:350px"/><el-button @click="searchCity">查询</el-button>
          </div>
          <div id="mapcontainer"></div>
      </el-card>
   </div>
</template>

<script>
export default {
  props: {
    zoom: {
      required: true,
      default: 15,
      type: Number
    },
    addr: {
      latitude: {
        default: 0,
        type: Number
      },
      longitude: {
        default: 0,
        type: Number
      },
      defaultcity: {
        default: "上海",
        type: String
      },
      type: Object
    },
    ak: {
      default: "yl2jbc9RtMVTeMrAZamHKnQzl84ixjB5",
      type: String
    }
  },
  name: "BMap",
  data() {
    return {
      apikey: this.ak || "yl2jbc9RtMVTeMrAZamHKnQzl84ixjB5",
      city: this.addr.defaultcity || "上海",
      map: null,
      loading: false
    };
  },
  methods: {
    searchCity: function() {
      this.bmap.centerAndZoom(this.city,this.zoom);
    }
  },
  computed:{
     bmap:function() {
         return this.map;
     }
  },
  created() {
      var scriptsrc =
      "http://api.map.baidu.com/getscript?v=2.0&ak=" +
      this.apikey +
      "&services=&t=20180102152545";
    var mapcontainer = document.getElementsByTagName("body")[0];
    if(document.getElementById('scriptsrc')) {
      mapcontainer.appendChild(document.getElementById('scriptsrc'));
    }else {
        var mapscript = document.createElement("script");
        mapscript.src = scriptsrc;
        mapscript.id="scriptsrc";
        mapscript.type = "text/javascript";
        mapcontainer.appendChild(mapscript);
    }
      console.log('created'+JSON.stringify(this.$data));
  },
  beforeMount() {
      console.log('beforeMount');
  },
  mounted() {
      console.log('mounted'+JSON.stringify(this.$data));
    this.loading = false;
      if (window.BMap) {
        var map = new BMap.Map("mapcontainer");
        this.map =map;
        map.centerAndZoom(this.city, this.zoom);
        map.addControl(
          new BMap.MapTypeControl({
            mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
          })
        );
        var size = new BMap.Size(10, 20);
        map.addControl(
          new BMap.CityListControl({
            anchor: BMAP_ANCHOR_TOP_LEFT,
            offset: size,
            onChangeBefore: function() {
              console.log("city change before");
            },
            onChangeAfter: function() {
              console.log("city change after");
            }
          })
        );
        map.enableScrollWheelZoom(true);
        map.disableDragging();
        setTimeout(function() {
           map.enableDragging();
        },2000);
      }
  },
  beforeUpdate() {
     console.log('beforeUpdate');
  },
  updated() {
     console.log('updated'+this.city);
  },
  beforeDestroy() {
     console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  }
};
</script>

<style lang="scss" scoped>
#mapcontainer {
  height: 500px;
}
.header {
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix {
  clear: both;
}
.card-container {
  margin: 10px;
}
</style>
