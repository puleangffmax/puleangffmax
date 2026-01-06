// 1. បង្កើតប៊ូតុង Floating (Neon Style)
var menu = document.createElement('div');
menu.innerHTML = "🎯 VIP MENU";
menu.style = "position: fixed; z-index: 9999; top: 150px; left: 20px; width: 120px; height: 45px; background: #000; color: #00f2ff; border: 2px solid #00f2ff; border-radius: 10px; text-align: center; line-height: 45px; font-weight: bold; box-shadow: 0 0 15px #00f2ff; cursor: pointer;";
document.body.appendChild(menu);

// 2. កូដមុខងារ FOV និង Speed (ប្រើអង់គ្លេសដើម្បីកុំឱ្យ Error)
menu.onclick = function() {
    // មុខងារ FOV 0xb51 (I32)
    h5gg.clearResults();
    h5gg.searchNumber('1053273620', 'I32', '0x100000000', '0x200000000');
    if(h5gg.getResultsCount() > 0) {
        h5gg.editAll('-2000', 'I32');
    }

    // មុខងារ RUN SPEED (F64)
    h5gg.clearResults();
    h5gg.searchNumber('5.0', 'F64', '0x100000000', '0x200000000');
    if(h5gg.getResultsCount() > 0) {
        h5gg.editAll('99.0', 'F64');
    }

    this.style.background = "#00f2ff";
    this.style.color = "#000";
    this.innerHTML = "✅ ACTIVE";
    alert("FOV & SPEED: DONE!");
};

