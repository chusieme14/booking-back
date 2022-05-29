<script>
import moment from "moment";
moment.locale("en");
export default {
    data(vm) {
        return {
            active_route: "/",
            // currentlang: language,
            // footerPages: {
            //     "items-per-page-options": [5, 10, 15, 20, 30, 40, 50, 100], 
            // },
            // isCode: 0,
            // openedMenu: [],
            // processing: false,
            selected: []
        };
    },
    methods: {
        _pluck(items, key) {
          return items.map(item => item[key]);
        },
        _asset(file) {
            return window.asset + "/" + file;
        },
        _clear() {
            this._commit('errors',[])
        },
        _commit(key, value) {
            this.$store.commit(key, value);
        },
        _createFilterParams(filters){
            let params = "";
            for (const item in filters){
                if(filters[item])
                    params = params + '&' + item + '=' + filters[item]
            }
            return params;

        },
        _createParams(params,old_params) {
            let param = "";
            let sortby = params.sortBy[0];
            let sorttype = params.sortDesc[0];
            let page = params.page;
            let perpage = params.itemsPerPage;

            param += `page=${page}&per_page=${perpage}`;
            if (sortby) {
                param += `&sortBy=${sortby}/${sorttype ? "asc" : "desc"}`;
            }
            if (old_params) param+=`&${old_params}`
            return param;
        },
        _currentLang() {
            this.currentlang = localStorage.getItem("lang");
        },
        _display(content) {
            if (content == "" || content == null || content == undefined) {
                return "...";
            }

            return content;
        },
        _displayImage(file, dir = "storage") {
            let base_url = window.location.origin;
            if (this._isUrl(file)) return file;
            return `${base_url}/${dir}/${file}`;
        },
        _displayThumb(file, dir = "storage") {
            let base_url = window.location.origin;
            if (this._isUrl(file)) return file;
            let img = file.split("/");
            return `${base_url}/${dir}/${img[0]}/thumb_${img[1]}`;
        },
        _displayImages(file, type = "", dir = "storage") {
            let base_url = window.location.origin;
            let path = `${base_url}/${dir}/`;

            if (this._isUrl(file.url)) return file.url;
            if (type == 'thumbnail') return path+file.thumbnail;
            if (type == 'original') return path+file.original;
            if (type == 'compressed') return path+file.compressed;
        },
        _deleteToast() {
            // this._commit("toaster", {
            //     color: "green",
            //     content: "record_deleted_successfully"
            // });
            this.$toast.success(this._lang("record_deleted_successfully"));
        },
        _filter(value, filter) {
            if (!this._isValidFilter(filter)) return value;

            return this.$options.filters[filter](value);
        },
        _normalFormatDate(value) {
            return moment(value).format('MMMM Do YYYY, h:mm:ss a');
        },
        _formatDate(value, format = "ddd, Do MMMM YYYY") {
            if (value) {
                if (Array.isArray(value)) {
                    for (var i = 0; i <= value.length; i++) {
                        value[i] = moment(value[i]).format(format);
                    }
                    return value;
                } else {
                    return moment(value).format(format);
                }
            }
        },
        _formatNumber(number, format = "fr") {
            if (!isNaN(number)) {
                let formatter = new Intl.NumberFormat(format, {
                    minimumFractionDigits: 2
                });
                return formatter.format(number);
            } else {
                return "";
            }
        },
        _formatTime(n) {
            return `0${n ^ 0}`.slice(-2);
        },
        _getIndex(column, target, value) {
            return target.findIndex(ind => ind[column] == value);
        },
        _getters(key) {
            console.log(this.$store.getters[key]), 'getters';
            return this.$store.getters[key];
        },
        _infoToast() {
            this.$toast.info(this._lang("record_cannot_be_deleted"));
        },
        _isValidFilter(filter) {
            return !!this.$options.filters[filter];
        },
        _isValidMethod(method) {
            return !!this.$options.methods[method];
        },
        _isUrl(str) {
            // if (typeof str === 'string') return str
            return str.indexOf("http://") == 0 || str.indexOf("https://") == 0;
        },
        _lang(value, filter, explode = false) {
            if (!isNaN(value) || !value) return value;

            let arr = [];
            let res = [];

            if (explode) arr = value.split(" ");
            else arr = value;

            if (arr.length > 1 && explode) {
                if (this._isValidFilter(filter)) {
                    res = arr.map(item => {
                        return this.$options.filters[filter](this.$t(item));
                    });
                } else {
                    res = arr;
                }
                return res.toString().replace(/\,/g, " ");
            } else {
                if (this._isValidFilter(filter)) {
                    return this.$options.filters[filter](this.$t(value));
                } else {
                    return this.$t(value);
                }
            }
        },
        _parse(val) {
            return JSON.parse(val);
        },
        _parseString(val) {
            return JSON.parse(JSON.stringify(val));
        },
        _push(child, params = {}) {
            console.log(child, 'route');
            let link = this.$router.resolve({
                name: child,
                params: params
            });

            let path = link.route.path;
            if (this.$route.path == path) return;

            this.$router.push({ path: path });
        },
        _secondsToHms(d, formatted) {
            d = Number(d);
            var h = Math.floor(d / 3600);
            var m = Math.floor((d % 3600) / 60);
            var s = Math.floor((d % 3600) % 60);

            var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            var mDisplay =
                m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
            if (formatted)
                return (
                    this._formatTime(h) +
                    ":" +
                    this._formatTime(m) +
                    ":" +
                    this._formatTime(s)
                );
            return hDisplay + mDisplay + sDisplay;
        },
        _status_update(status) {
            if (!status)
                this.$toast.error(this._lang("status_updated_failed"), {
                    position: "bottom"
                });
            else
                this.$toast.success(this._lang("status_updated_successfully"), {
                    position: "bottom"
                });
        },
        _storeToast() {
            // this._commit("toaster", {
            //     color: "green",
            //     content: this._lang("record_created_successfully")
            // });
            this.$toast.success(this._lang("record_created_successfully"));
        },
        _string(val) {
            return JSON.stringify(val);
        },
        _stringParse(val) {
            return JSON.stringify(JSON.parse(val));
        },
        _truncate(string, length) {
            if (!string) return;
            if (string.length <= length) return string;
            return string.substring(0, Math.min(length, string.length)) + "...";
        },
        _updateToast() {
            // this._commit("toaster", {
            //     color: "green",
            //     content: this._lang("record_updated_successfully")
            // });
            this.$toast.success(this._lang("record_updated_successfully"));
        },
        _notExist(val) {
            if (val == "") return true;
            if (val == null) return true;
            if (val == undefined) return true;

            return false;
        },
    },
    watch: {
        _currentlang(newValue) {
            this.$i18n.locale = newValue;
            localStorage.setItem("lang", newValue);
        }
    },
    computed: {
        // authUser() {
        //     return this.getters("user");
        // },
        // isAuth() {
        //     return this.getters("is_authenticated");
        // },
        is_submitted() {
            return this._getters('is_submitted')
        },
    },
    filters: {
        camelize(str) {
            return str
                .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
                    return index === 0
                        ? word.toLowerCase()
                        : word.toUpperCase();
                })
                .replace(/\s+/g, "");
        },
        capitalize(value) {
            if (!value) return value;
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        lcase(value) {
            if (value) return value.toLowerCase();
        },
        numberSeparator(value) {
            return value
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        },
        ucase(value) {
            if (value) return value.toUpperCase();
        }
    },
    
};
</script>