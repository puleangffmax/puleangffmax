// បង្កើតប៊ូតុងបណ្ដែតលើអេក្រង់
var fovBtn = document.createElement('div');
fovBtn.innerHTML = "🎯 VIP MENU";
fovBtn.style = "position: fixed; z-index: 9999; top: 100px; left: 20px; width: 120px; height: 45px; background: #000; color: #00f2ff; border: 2px solid #00f2ff; border-radius: 10px; text-align: center; line-height: 45px; font-weight: bold; box-shadow: 0 0 15px #00f2ff; cursor: pointer;";
document.body.appendChild(fovBtn);

fovBtn.onclick = function() {
    // មុខងារ FOV 0xb51 (I32)
    h5gg.clearResults();
    h5gg.searchNumber('1053273620', 'I32', '0x100000000', '0x200000000');
    if(h5gg.getResultsCount() > 0) {
        h5gg.editAll('-2000', 'I32');
        alert("✅ FOV 0xb51: Active!");
    } else {
        alert("❌ រកមិនឃើញតម្លៃលេខ!");
    }
};

