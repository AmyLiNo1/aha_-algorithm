// 最基本的
const publishers_subscribers = () => {
    let corp = {}
    corp.list = []
    corp.on = (fn) => {
        corp.list.push(fn)
    }
    corp.emit = (a, b) => {
        corp.list.forEach((cb) => {
            cb(a, b)
        })
    }
    corp.on(function(position, salary) {
        console.log(`position: ${position}`)
        console.log(`salary: ${salary}`)
    })
    corp.on(function(skill, hobby) {
        console.log(`skill: ${skill}`)
        console.log(`hobby: ${hobby}`)
    })
    corp.emit('前端', 10000);
    corp.emit('端茶和倒水', '足球');
}
// publishers_subscribers()

// 完善后的数据
const publishers_subscribers1 = () => {
    const corp = {}
    corp.list = {}
    corp.on = function(key, fn) {
        if(!this.list[key]) {
            this.list[key] = []
        }
        this.list[key].push(fn)
    }
    corp.emit = function() {
        let key = [].shift.apply(arguments)
        fns = this.list[key]
        fns.forEach(cb => {
            cb.apply(this, arguments)
        })
    }
    corp.on('join', function(position, salary) {
        console.log(`position: ${position}`)
        console.log(`salary: ${salary}`)
    })
    corp.on('other', function(skill, hobby) {
        console.log(`skill: ${skill}`)
        console.log(`hobby: ${hobby}`)
    })
    corp.emit('join', '前端', 10000);
    corp.emit('other', '端茶和倒水', '足球');
}
// publishers_subscribers1()

// 添加取消
const publishers_subscribers2 = () => {
    let event = {
        list: {},
        on(key, fn) {
            if (!this.list[key]) {
                this.list[key] = [];
            }
            this.list[key].push(fn);
        },
        emit(key, data) {
            let fns = this.list[key]
            fns.forEach(cb => {
                cb(data)
            })
        },
        remove(key, fn) {
            let fns = this.list[key]
            if(!fns) return
            if(!fn) return
            fns.forEach((cb, i) => {
                if(cb === fn) {
                    fns.splice(i, 1)
                }
            })
        }
    };

    function cat() {
        console.log('一起喵喵喵');
    }
    function dog() {
        console.log('一起旺旺旺');
    }
    event.on('pet', data => {
        console.log('接收数据');
        console.log(data);
    });
    event.on('pet', cat);
    event.on('pet', dog);
    event.remove('pet', dog);
    event.emit('pet', ['二哈', '波斯猫']);
}
// publishers_subscribers2()

