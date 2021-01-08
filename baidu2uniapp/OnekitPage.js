export default function(PAGE_JSON, bd_object) {
  let uni_object = {
    onLoad(query) {
      this.data = this.$data;
        for (let key of Object.keys(bd_object)) {
          let obj = bd_object[key];
          switch (key) {
            case "data":
            case "onLoad":
            case "onUnload":
            case "onReady":
            case "onShow":
            case "onHide":
              break;
            default:
              if(typeof(obj)!=='function'){
                this.data[key] = obj
              }
              break;
          }
        }
      
      if (bd_object["onLoad"]) {
        bd_object["onLoad"].call(this,query );
      }
    },
    onUnload() {
      if (bd_object["onUnload"]) {
        bd_object["onUnload"].call(this);
      }
    },
    onReady() {
      if (bd_object["onReady"]) {
        bd_object["onReady"].call(this);
      }
    },
    onShow() {
        if (bd_object["onShow"]) {
          bd_object["onShow"].call(this);
        }
    },
    onHide() {
        if (bd_object["onHide"]) {
          bd_object["onHide"].call(this);
        }
    },
    methods: {
      setData(data) {
        let that = this;
        this.$nextTick(() => {
          for (let k of Object.keys(data)) {
            that[k] = data[k];
          }
        });
      },
      animate(){
        
      }
    }
  };
    if (bd_object.data) {
      uni_object.data = () => {
        return bd_object.data;
      };
    }
  
    for (let key of Object.keys(bd_object)) {
      let obj = bd_object[key];
      switch (key) {
        case "data":
        case "onLoad":
        case "onUnload":
        case "onReady":
        case "onShow":
        case "onHide":
          break;
        default:
          if(typeof(obj)==='function'){
            uni_object.methods[key] = obj;
          }
          break;
      }
    }
  return uni_object;
}