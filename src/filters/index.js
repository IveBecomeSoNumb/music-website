import Vue from 'vue'

const filters = {
    // time
    sec2his: t => {
        if (~~t || t < 1) {
            var tt = Math.round(t)
            var m = Math.floor(t / 60)
            var s = tt % 60
            m = m >= 10 ? m : '0' + m
            s = s >= 10 ? s : '0' + s
            return m + ':' + s
        } else {
            return t
        }
    },
    // popular
    hotClass: hot => {
        switch (hot) {
            case 1: return 'fire-red'
            case 3: return 'fire-yellow'
            case 4: return 'fire-blue'
        }
    }
}
// global filtering
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
