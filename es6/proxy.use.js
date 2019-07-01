 let obj = {
            get hehe() {
                console.log("获取值哦");
                return obj.val;
            },
            set hehe(value) {
                console.log("获取值哦11");
                return this.val = value;
            }
        };
        obj.hehe = 1;
        console.log(obj.val);
        console.log(obj.hehe);