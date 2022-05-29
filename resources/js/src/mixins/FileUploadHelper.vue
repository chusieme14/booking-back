<script>
export default {
    methods: {
        createImageAvatar(file, data) {
            var reader = new FileReader();

            reader.onload = e => {
                data.avatar = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        createImageBase64(file) {
            var reader = new FileReader();

            return new Promise((resolve, reject) => {
                reader.onload = e => {
                    let res = e.target.result;
                    resolve(res);
                };
                reader.readAsDataURL(file);
            });
        },
        createBase64(file) {
            var reader = new FileReader();

            return new Promise((resolve, reject) => {
                reader.onload = e => {
                    let res = e.target.result;
                    resolve(res);
                };
                reader.readAsDataURL(file);
            });
        },
        bytesToSize(bytes) {
            var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
            if (bytes == 0) return "0 Byte";
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
        },
    }
};
</script>
