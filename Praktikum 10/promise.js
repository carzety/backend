/**
 * @returns {object} Promise
*/

const download = () => {
    /**
     * Promise dibuat menggunakan class Promise
     * Promise menerima callback function/executor
     * Executor menerima 2 params: resolve dan reject
     * Resolve dipanggil jika proses berhasil
     * Reject dipanggil jika proses gagal
     */
    return new Promise((resolve, reject) => {
        const status = true;

        setTimeout(() => {
            if (status) {
                resolve("Download Selesai");
            } else {
                reject("Download Gagal");
            }
        }, 5000);
    });
};

/**
 * .then menangkap hasil resolve
 * .catch menangkap hasil reject
 */
download()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});