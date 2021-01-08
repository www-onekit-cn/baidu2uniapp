export default function(UC_JSON, bd_object) {
  let uni_object = {
    props:{},
    mounted() {
      this.data = this.$data;
      if(bd_object.lifetimes && bd_object.lifetimes.attached){
        bd_object.lifetimes.attached.call(this);
      }
      if (bd_object["attached"]) {
        bd_object["attached"].call(this );
      }
    },
    destroyed() {
      if(bd_object.lifetimes && bd_object.lifetimes.attadetachedched){
        bd_object.lifetimes.detached.call(this);
      }
      if (bd_object["detached"]) {
        bd_object["detached"].call(this);
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
    if(bd_object.properties){
      for (const key of Object.keys(bd_object.properties)) {
        const property = bd_object.properties[key];
        const prop = {
          type:property.type
        }
        if(property.value){
          prop.default = property.value
        }
        uni_object.props[key] = prop;
      }
    }
    if(bd_object.methods){
    for (let key of Object.keys(bd_object.methods)) {
      let func = bd_object.methods[key];
      uni_object.methods[key] = func;
    }
  }
  return uni_object;
}