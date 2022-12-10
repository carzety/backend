/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Download Complete");
    }, 3000);
  });
};

const result = "Windows-10.exe";
const download = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Results Download : " + result);
    }, 3000);
  });
};

const main = async () => {
  console.log(await showDownload);
  console.log(await download());
}

main();